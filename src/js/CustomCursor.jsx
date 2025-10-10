import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CustomCursor = () => {
  const location = useLocation();

  useEffect(() => {
    const isTouchDevice = () =>
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;

    const customCursor = document.querySelector('.lagunacustom-cursor');
    if (!customCursor) return;

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

        customCursor.classList.toggle('zoom', isHovering);
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    } else {
      customCursor.style.display = 'none';
    }
  }, [location.pathname]); // Re-run on route change

  return null;
};

export default CustomCursor;