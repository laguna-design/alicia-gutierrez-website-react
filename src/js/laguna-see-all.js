/* Projects "See all" */
document.getElementById('laguna__projects__toggleButton').addEventListener('click', function(event) {
    event.preventDefault();

    var hiddenItems = document.querySelectorAll('#laguna__Projects__list .laguna__projects__single--hidden');
    hiddenItems.forEach(function(item) {
        if (item.style.display === 'none' || item.style.display === '') {
            item.style.display = 'list-item';
        } else {
            item.style.display = 'none';
        }
    });

    // Change the button text
    if (this.textContent === 'Show All') {
        this.textContent = 'Show Less';
    } else {
        this.textContent = 'Show All';
    }
});