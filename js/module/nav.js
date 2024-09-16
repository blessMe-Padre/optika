export const initNav = () => {
    const body = document.querySelector('body');
    // Меню
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuCatalog = document.querySelector('.mobile-menu-catalog');
    const menuButtons = document.querySelector('.btn-close-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');


    menuButtons.addEventListener('click', e => {
        menuButtons.classList.toggle('active');
        // body.classList.toggle('lock');
    });


    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', (evt) => {
            // menuButtons.classList.remove('active');
            mobileMenu.classList.remove('is-active');
            // body.classList.remove('lock');
        });
    });
}