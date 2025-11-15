// Seguridad: escapar HTML - CORREGIDO
function escapeHTML(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
} // ← AÑADÍ LA LLAVE DE CIERRE QUE FALTABA

// Cerrar buzon al hacer clic fuera - CORREGIDO
document.addEventListener('click', function(e) {
    if (!buzon.contains(e.target) &&
        e.target !== abrirBuzon && // ← CORREGÍ EL NOMBRE DE LA VARIABLE
        buzon.classList.contains('activo')) { // ← CORREGÍ classist A classList Y active A activo
        buzon.classList.remove('activo');
    }
});

// Agregar animaciones CSS - CORREGIDO
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight { // ← CORREGÍ slideIntight A slideInRight
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }

    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;

document.head.appendChild(style);