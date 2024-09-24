document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('[data-collapse-toggle]');
    const navbarMenu = document.getElementById('navbar-default');
    
    toggleButton.addEventListener('click', function() {
      // Alterna entre agregar o eliminar la clase 'hidden'
      navbarMenu.classList.toggle('hidden');
    });
  });