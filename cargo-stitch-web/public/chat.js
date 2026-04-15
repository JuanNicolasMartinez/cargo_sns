import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// Configuration
const SUPABASE_URL = 'https://emkladbmswigqcxgjmna.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Y3AJH4i0ST2uPq-_wLTk0Q_Abp81dwv';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// State for Demo
const CURRENT_USER_ID = '11111111-1111-1111-1111-111111111111'; // Camilo (Transportista)
const CHAT_ID = 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa';

const chatContainer = document.getElementById('chat-container');
const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');

/**
 * Render a single message
 */
function appendMessage(message) {
    // Remove the 'connecting' or initial loader if present
    const loadingEl = document.querySelector('.text-center.w-full');
    if (loadingEl) loadingEl.remove();

    const isMine = message.sender_id === CURRENT_USER_ID;
    const timeString = new Date(message.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const messageDiv = document.createElement('div');
    messageDiv.className = `max-w-[80%] p-3 text-sm ${isMine ? 'message-out' : 'message-in'}`;
    
    messageDiv.innerHTML = `
        <p class="mb-1 leading-relaxed text-slate-200">${message.content}</p>
        <span class="text-[9px] font-bold uppercase tracking-widest ${isMine ? 'text-primary/70' : 'text-slate-500'} flex justify-end">
            ${timeString}
        </span>
    `;

    chatContainer.appendChild(messageDiv);
    // Scroll to bottom
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

/**
 * Load initial messages
 */
async function loadMessages() {
    const { data: messages, error } = await supabase
        .from('messages')
        .select('*')
        .eq('chat_id', CHAT_ID)
        .order('created_at', { ascending: true });

    if (error) {
        console.error("Error loading messages:", error);
        return;
    }

    if (messages.length === 0) {
        chatContainer.innerHTML = `<div class="text-center w-full py-2 text-slate-500 text-xs">Aún no hay mensajes.</div>`;
    } else {
        chatContainer.innerHTML = ''; // Clear container
        messages.forEach(appendMessage);
    }
}

/**
 * Listen for new realtime messages
 */
function subscribeToMessages() {
    supabase
        .channel('realtime_messages')
        .on(
            'postgres_changes',
            { event: 'INSERT', schema: 'public', table: 'messages', filter: `chat_id=eq.${CHAT_ID}` },
            (payload) => {
                // If we didn't send it, append it (we already append ours synchronously on submit to feel faster)
                if (payload.new.sender_id !== CURRENT_USER_ID) {
                    appendMessage(payload.new);
                }
            }
        )
        .subscribe((status) => {
            console.log("Realtime status:", status);
        });
}

/**
 * Handle form submission
 */
chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const content = messageInput.value.trim();
    if (!content) return;

    // Reset input
    messageInput.value = '';
    messageInput.style.height = 'auto';
    sendBtn.setAttribute('disabled', 'true');

    // Optimistic UI update
    const tempMessage = {
        sender_id: CURRENT_USER_ID,
        content: content,
        created_at: new Date().toISOString()
    };
    appendMessage(tempMessage);

    // Save to Supabase
    const { error } = await supabase
        .from('messages')
        .insert({
            chat_id: CHAT_ID,
            sender_id: CURRENT_USER_ID,
            content: content
        });

    if (error) {
        console.error("Error sending message:", error);
        alert("Ocurrió un error enviando el mensaje.");
    }
});

// Initialize
loadMessages().then(() => {
    subscribeToMessages();
});
