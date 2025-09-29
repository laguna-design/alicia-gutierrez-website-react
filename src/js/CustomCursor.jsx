import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const isTouchDevice = () =>
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;

    const customCursor = document.querySelector('.lagunacustom-cursor');

    if (!customCursor) return; // Exit if cursor element doesn't exist

    if (!isTouchDevice()) {
      const hoverContainers = document.querySelectorAll('.lagunahover-container');

      const updateCursorPosition = (event) => {
        customCursor.style.top = `${event.clientY}px`;
        customCursor.style.left = `${event.clientX}px`;
      };

      const handleMouseMove = (event) => {
        updateCursorPosition(event);

        let isHovering = false;
        hoverContainers.forEach((container) => {
          if (container.matches(':hover')) {
            isHovering = true;
          }
        });

        if (isHovering) {
          customCursor.classList.add('zoom');
        } else {
          customCursor.classList.remove('zoom');
        }
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    } else {
      customCursor.style.display = 'none';
    }
  }, []);

  return null;
};

export default CustomCursor;