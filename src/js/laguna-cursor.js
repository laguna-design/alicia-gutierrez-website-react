/*cursor*/
// Function to detect if the device supports touch
const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  };
  
  // Check if it's a touch device
  if (!isTouchDevice()) {
    const customCursor = document.querySelector('.lagunacustom-cursor'); // Make sure you select your custom cursor element
    const hoverContainers = document.querySelectorAll('.lagunahover-container');
  
    const updateCursorPosition = (event) => {
      customCursor.style.top = `${event.clientY}px`;
      customCursor.style.left = `${event.clientX}px`;
    }
  
    window.addEventListener('mousemove', (event) => {
      updateCursorPosition(event);
  
      let isHovering = false;
      hoverContainers.forEach(container => {
        if (container.matches(':hover')) {
          isHovering = true;
        }
      });
  
      if (isHovering) {
        customCursor.classList.add('zoom');
      } else {
        customCursor.classList.remove('zoom');
      }
    });
  } else {
    // Optionally, you can hide the custom cursor on touch devices
    const customCursor = document.querySelector('.custom-cursor');
    if (customCursor) {
      customCursor.style.display = 'none';
    }
  }
  