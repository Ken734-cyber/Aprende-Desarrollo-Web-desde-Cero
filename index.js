/* ==========================================================================
   INTERACTIVIDAD CON JAVASCRIPT (DOM & EVENTOS)
   ========================================================================== */

// Esperamos a que todo el HTML esté cargado antes de ejecutar la lógica
document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------------------------
       1. FUNCIONALIDAD EN LA TARJETA DE PRÁCTICA: BOTÓN SEGUIR / CONTADOR
       ---------------------------------------------------------------------- */
    const btnSeguir = document.querySelector('.card-demo .btn-principal');
    const statProyectos = document.querySelector('.card-demo .stat h5');
    
    let siguiendo = false;

    if (btnSeguir) {
        btnSeguir.addEventListener('click', () => {
            if (!siguiendo) {
                btnSeguir.textContent = 'Siguiendo';
                btnSeguir.style.backgroundColor = '#22c55e'; // Verde de éxito
                btnSeguir.style.color = '#ffffff';
                siguiendo = true;
            } else {
                btnSeguir.textContent = 'Seguir';
                btnSeguir.style.backgroundColor = 'var(--primary)';
                btnSeguir.style.color = '#0f172a';
                siguiendo = false;
            }
        });
    }

    /* ----------------------------------------------------------------------
       2. INTERCEPTAR FORMULARIO Y MOSTRAR MENSAJE PERSONALIZADO
       ---------------------------------------------------------------------- */
    const formulario = document.querySelector('form');

    if (formulario) {
        formulario.addEventListener('submit', (event) => {
            // Evita que la página se recargue automáticamente
            event.preventDefault();

            // Obtenemos los valores ingresados por el usuario
            const nombreInput = document.getElementById('nombre');
            const correoInput = document.getElementById('correo');
            
            const nombre = nombreInput ? nombreInput.value.trim() : 'Estudiante';

            // Creamos una alerta o mensaje dinámico en la pantalla
            alert(`🎉 ¡Felicidades, ${nombre}! Te has registrado correctamente en el curso.`);

            // Limpiamos los campos del formulario
            formulario.reset();
        });
    }

    /* ----------------------------------------------------------------------
       3. EXPLICACIÓN EDUCATIVA: CONSOLE LOG
       ---------------------------------------------------------------------- */
    console.log('¡JavaScript cargado con éxito! Revisa cómo interactúan los elementos en pantalla.');
});


/* ----------------------------------------------------------------------
   FUNCIONALIDAD: MODO OSCURO / CLARO CON PERSISTENCIA (localStorage)
   ---------------------------------------------------------------------- */
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');

// 1. Verificamos si el usuario ya tenía una preferencia guardada
const savedTheme = localStorage.getItem('theme');

// Función auxiliar para activar el Modo Oscuro
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    if (themeIcon) themeIcon.textContent = '☀️';
    if (themeText) themeText.textContent = 'Modo Claro';
    localStorage.setItem('theme', 'dark'); // Guardamos la preferencia
}

// Función auxiliar para activar el Modo Claro
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    if (themeIcon) themeIcon.textContent = '🌙';
    if (themeText) themeText.textContent = 'Modo Oscuro';
    localStorage.setItem('theme', 'light'); // Guardamos la preferencia
}

// 2. Aplicar el tema guardado al cargar la página
if (savedTheme === 'dark') {
    enableDarkMode();
} else if (savedTheme === 'light') {
    disableDarkMode();
} else {
    // Si no hay preferencia guardada, revisamos la configuración del sistema/navegador
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkScheme) {
        enableDarkMode();
    }
}

// 3. Evento del botón para alternar el tema
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const isDarkMode = document.body.classList.contains('dark-mode');
        if (isDarkMode) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
}
