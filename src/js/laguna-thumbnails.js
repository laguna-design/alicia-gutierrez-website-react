//THUMBNAILS

 // Espera a que el contenido del DOM esté completamente cargado
 document.addEventListener('DOMContentLoaded', () => {
    const hoverImage = document.querySelector('.laguna__thumbnail__hoverImage');

    // Añade los eventos de mouse a cada elemento de la lista
    document.querySelectorAll('.laguna__Projects__list li').forEach(li => {
        li.addEventListener('mousemove', (e) => {
            const imgSrc = e.currentTarget.getAttribute('data-img');
            hoverImage.innerHTML = `<img src="${imgSrc}" alt="${imgSrc}">`;
            hoverImage.style.display = 'block';
            hoverImage.style.left = `${e.pageX + 10}px`;
            hoverImage.style.top = `${e.pageY + 10}px`;
        });

        li.addEventListener('mouseleave', () => {
            hoverImage.style.display = 'none';
        });
    });

    // Mueve la imagen con el cursor cuando está visible
    document.addEventListener('mousemove', (e) => {
        if (hoverImage.style.display === 'block') {
            hoverImage.style.left = `${e.pageX + 10}px`;
            hoverImage.style.top = `${e.pageY + 10}px`;
        }
    });
});
