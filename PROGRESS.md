# Bitácora de Trabajo - Cargo SNS

Este documento resume el progreso y la metodología de trabajo adoptada por el equipo de **Cargo SNS** hasta la fecha.

## 👥 Equipo y Colaboración
El proyecto se desarrolla de forma colaborativa utilizando un flujo de trabajo basado en **Git/GitHub**:
*   **Ramas Locales:** Cada integrante trabaja en su propia rama (`camilo`, `nicolas`, `hainer`, `laura`).
*   **Integración:** Los avances validados se integran a la rama `main` mediante Pull Requests (PRs).
*   **Sincronización:** Se realizan constantes `git fetch` y `merge` para mantener las ramas locales actualizadas con el trabajo grupal.

## 🛠️ Evolución Tecnológica
1.  **Framework:** Migración exitosa a **Astro 5** para aprovechar las últimas mejoras en rendimiento y componentes.
2.  **Entorno de Desarrollo:** Implementación de **nvm** para gestionar versiones de Node.js, estandarizando el uso de la versión **LTS (v24+)** requerida por Astro 5.
3.  **Estilos y Animaciones:**
    *   Uso de **Tailwind CSS** para un diseño responsivo y moderno.
    *   Integración de **GSAP** y **Lenis** para animaciones fluidas y scroll suave.
    *   Implementación de un **Preloader** premium con animaciones temáticas (camión y logo).

## 📂 Estructura de Documentación
Se ha establecido un repositorio de conocimiento en la carpeta `docs/`:
*   **Modelado de Datos:** `db.md` contiene el esquema de base de datos SQL completo.
*   **Lógica de Negocio:** `generalities.md` y `business_model.md` definen el propósito del ecosistema.
*   **Diseño Visual:** `imgs/moodboard.png` define la identidad visual (Dark Mode, acentos premium).
*   **Prototipado:** `app/screens/` contiene los bocetos de las interfaces clave (Home, Marketplace, Detalle).

## 🚀 Logros Recientes
*   Actualización completa de los componentes de la Landing Page (`Hero`, `Features`, `Navbar`, `Footer`).
*   Integración de recursos multimedia (videos webm/mp4 de alta calidad).
*   Configuración de traducciones (`i18n`) para soporte multi-idioma.
*   Definición de flujos de usuario alineados con la arquitectura de base de datos.
