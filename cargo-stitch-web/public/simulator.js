async function loadSimulatedData() {
    console.log('Cargo SNS Simulator: Initializing...');
    try {
        const response = await fetch('/data.json');
        if (!response.ok) {
            console.error('Cargo SNS Simulator: Failed to load data.json', response.status);
            return;
        }
        const data = await response.json();
        console.log('Cargo SNS Simulator: Data loaded', data);

        // 1. Onboarding Roles Detection
        const roleContainer = document.getElementById('role-container');
        if (roleContainer && data.roles) {
            console.log('Cargo SNS Simulator: Rendering roles...');
            roleContainer.innerHTML = data.roles.map(role => `
                <button class="w-full text-left group" onclick="window.location.href='marketplace.html'">
                    <div class="glass-card p-5 rounded-2xl transition-all duration-300 flex items-center gap-5 relative overflow-hidden">
                        <div class="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 blur-2xl"></div>
                        <div class="flex size-14 shrink-0 items-center justify-center rounded-2xl ${role.gradient} text-white shadow-lg">
                            <span class="material-symbols-outlined text-3xl">${role.icon}</span>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-center justify-between">
                                <h3 class="text-xl font-bold text-slate-900 dark:text-white">${role.title}</h3>
                                <span class="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                            </div>
                            <p class="text-[10px] font-black text-primary/80 uppercase tracking-widest mt-0.5">${role.subtitle}</p>
                            <p class="text-slate-500 dark:text-slate-400 text-sm mt-1 leading-relaxed">${role.description}</p>
                        </div>
                    </div>
                </button>
            `).join('');
        }

        // 2. Marketplace Detection
        const warehouseContainer = document.getElementById('warehouse-container');
        if (warehouseContainer && data.marketplace) {
            console.log('Cargo SNS Simulator: Rendering marketplace...');
            warehouseContainer.innerHTML = data.marketplace.map(wh => `
                <div class="bg-slate-800/40 border border-slate-700/30 rounded-2xl p-4 flex gap-4 transition-all hover:bg-slate-800/60">
                    <div class="size-24 rounded-xl overflow-hidden shrink-0 bg-slate-700">
                        <img class="w-full h-full object-cover" src="${wh.image}" alt="${wh.name}">
                    </div>
                    <div class="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                            <div class="flex justify-between items-start">
                                <h3 class="font-bold text-sm text-white truncate">${wh.name}</h3>
                                <div class="flex items-center gap-1">
                                    <span class="material-symbols-outlined text-[10px] text-yellow-400 fill-current">star</span>
                                    <span class="text-[10px] font-bold text-slate-300">${wh.rating}</span>
                                </div>
                            </div>
                            <p class="text-[10px] text-slate-400 truncate mt-1 flex items-center gap-1">
                                <span class="material-symbols-outlined text-[10px]">location_on</span>
                                ${wh.location}
                            </p>
                            <div class="flex gap-1 mt-2 flex-wrap">
                                ${wh.tags.map(tag => `<span class="text-[8px] px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 uppercase font-black tracking-tighter">${tag}</span>`).join('')}
                            </div>
                        </div>
                        <div class="flex items-center justify-between mt-3">
                            <div class="text-[10px] uppercase tracking-wider text-slate-500 font-black">
                                Price: <span class="text-white">${wh.price}</span>
                            </div>
                            <button class="px-3 py-1.5 bg-primary rounded-lg text-[10px] font-black text-white uppercase tracking-widest shadow-lg shadow-primary/20">Book</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // 3. User Stats / Profile Detection
        const nameEl = document.getElementById('user-name');
        if (nameEl && data.user) {
            console.log('Cargo SNS Simulator: Rendering profile data...');
            const avatarEl = document.getElementById('user-avatar');
            const goodsEl = document.getElementById('metric-goods');
            const routesEl = document.getElementById('metric-routes');

            if (nameEl) nameEl.textContent = data.user.name;
            if (avatarEl) avatarEl.src = data.user.avatar;
            if (goodsEl) goodsEl.textContent = data.user.stats.total_goods;
            if (routesEl) routesEl.textContent = data.user.stats.active_routes;

            // Alerts
            const alertsContainer = document.getElementById('alerts-container');
            if (alertsContainer && data.alerts) {
                alertsContainer.innerHTML = data.alerts.map(alert => `
                    <div class="glass p-4 rounded-2xl flex gap-4 border-l-4 ${alert.status === 'warning' ? 'border-l-accent-orange' : 'border-l-primary'}">
                        <div class="flex-1 space-y-2">
                            <div class="flex items-center gap-2">
                                <span class="size-2 ${alert.status === 'warning' ? 'bg-accent-orange pulse' : 'bg-primary'} rounded-full"></span>
                                <p class="text-[10px] font-black uppercase tracking-widest ${alert.status === 'warning' ? 'text-accent-orange' : 'text-primary'}">${alert.type}</p>
                            </div>
                            <div>
                                <h4 class="text-sm font-bold text-white">${alert.title}</h4>
                                <p class="text-xs text-slate-500 leading-relaxed mt-1">${alert.description}</p>
                            </div>
                            <div class="flex items-center justify-between pt-1">
                                <p class="text-[10px] text-slate-600 font-bold uppercase">${alert.time}</p>
                                <button class="px-3 py-1.5 rounded-lg bg-slate-900/50 text-white text-[10px] font-black border border-white/5 uppercase tracking-widest">Details</button>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
        }

    } catch (e) {
        console.error('Cargo SNS Simulator: Error during execution', e);
    }
}

// Run immediately and on DOM content loaded to be safe
if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', loadSimulatedData);
} else {
    loadSimulatedData();
}
