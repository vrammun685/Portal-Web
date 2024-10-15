function sacamenu() {
    const menu = document.getElementById('menusacado');
    console.log("hola");
    // Alterna entre mostrar y ocultar el menú
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('show');
    } else {
        menu.classList.remove('show');
        menu.classList.add('hidden');
    }
}
