// Archivo: scripts/main.js

document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('btn-enter'); // El botón dentro del agujero
    const body = document.body;
    const introScreen = document.getElementById('intro-screen'); // Pantalla de inicio
    const mainContent = document.getElementById('main-content'); // Contenido principal

    // Función que inicia el viaje
    const iniciarViaje = () => {
        
        // 1. Inicia la animación CSS de transición
        body.classList.add('transition-active');
        
        // Opcional: Deshabilita el botón para evitar clics múltiples
        trigger.disabled = true;

        // 2. Espera a que la animación termine (1.5 segundos definido en CSS)
        const duracionAnimacionMs = 1500; 

        setTimeout(() => {
            // 3. Oculta la pantalla de introducción
            introScreen.style.display = 'none';

            // 4. Muestra la pantalla principal con un efecto de fundido
            mainContent.classList.remove('hidden');
            // Esta línea asegura que el navegador reconozca el cambio de display
            void mainContent.offsetWidth; 
            mainContent.classList.add('visible'); 

            // 5. Limpia la clase de transición del body si ya no es necesaria
            body.classList.remove('transition-active'); 
            
            // Opcional: Permitir el scroll en la página principal
            body.style.overflow = 'auto';

        }, duracionAnimacionMs); 
    };

    // Asignar el evento al botón dentro del agujero negro
    if (trigger) { // Asegura que el botón exista antes de agregar el listener
        trigger.addEventListener('click', iniciarViaje);
    } else {
        console.error("Error: El botón con ID 'btn-enter' no fue encontrado.");
    }
});