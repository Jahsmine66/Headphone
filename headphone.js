document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');

    menuIcon.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    function closeMenu() {
        nav.classList.remove('active');
        }
    
        document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
            closeMenu();
        }
        });
}); 

    