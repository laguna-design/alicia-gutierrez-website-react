//Overlay
document.querySelectorAll('.laguna__trigger_btn').forEach(button => {
    button.addEventListener('click', function() {
        const overlay = this.getAttribute('data-overlay');
        document.querySelector(`.laguna__overlay_BG[data-overlay="${overlay}"]`).classList.add('show');
        setTimeout(() => {
            document.querySelector(`.laguna__overlay_BG[data-overlay="${overlay}"]`).classList.add('show');
        }, 50);  // Small delay to ensure smooth transition
        
    });
});

    
document.querySelectorAll('.laguna__close_btn').forEach(button => {
    button.addEventListener('click', function() {
        const overlay = this.getAttribute('data-overlay');
        document.querySelector(`.laguna__overlay_BG[data-overlay="${overlay}"]`).classList.remove('show');
        setTimeout(() => {
            document.querySelector(`.laguna__overlay_BG[data-overlay="${overlay}"]`).classList.remove('show');
        }, 500);  // Delay to allow the overlay to move down before hiding the background
    });
});
    
    document.querySelectorAll('.laguna__overlay_BG').forEach(overlay => {
        overlay.addEventListener('click', function(event) {
            
            if (event.target === this) {
                const overlayAttr = this.getAttribute('data-overlay');
                document.querySelector(`.laguna__overlay_BG[data-overlay="${overlayAttr}"]`).classList.remove('show');
                 setTimeout(() => {
                        this.classList.remove('show');
                 }, 500);  // Delay to allow the overlay to move down before hiding the background
            }
        })
    
    });
    