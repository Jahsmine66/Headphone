/* /* document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');

    menuIcon.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
}); */

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');
    const menuItems = document.querySelectorAll('nav ul li a');

    // Function to close the menu
    function closeMenu() {
        nav.classList.remove('active');
    }

    // Toggle menu when clicking the menu icon
    menuIcon.addEventListener('click', function(event) {
        event.stopPropagation();
        nav.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
            closeMenu();
        }
    });

    // Close menu when clicking a menu item
    menuItems.forEach(item => {
        item.addEventListener('click', closeMenu);
    });

    // Prevent clicks inside the nav from closing the menu
    nav.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

/*

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');

    menuIcon.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (nav.classList.contains('active') && !nav.contains(event.target) && event.target !== menuIcon) {
            nav.classList.remove('active');
        }
    });
});