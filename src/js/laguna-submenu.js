//submenu
document.addEventListener('DOMContentLoaded', () => {
    const contactLink = document.getElementById('contact-link');
    const submenu = document.getElementById('submenu');

    contactLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior
        if(!submenu.classList.contains('laguna__submenu_show')){
   
            submenu.classList.add('laguna__submenu_show')
            contactLink.classList.add('laguna__selected');
        } else {
            submenu.classList.remove('laguna__submenu_show')
            contactLink.classList.remove('laguna__selected');
        }
    });
});