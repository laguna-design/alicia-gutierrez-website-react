import { useEffect } from 'react';

const OverlayManager = () => {
  useEffect(() => {
    const triggerButtons = document.querySelectorAll('.laguna__trigger_btn');
    const closeButtons = document.querySelectorAll('.laguna__close_btn');
    const overlays = document.querySelectorAll('.laguna__overlay_BG');

    triggerButtons.forEach((button) => {
      const handleClick = () => {
        const overlay = button.getAttribute('data-overlay');
        const targetOverlay = document.querySelector(`.laguna__overlay_BG[data-overlay="${overlay}"]`);
        if (targetOverlay) {
          targetOverlay.classList.add('show');
          setTimeout(() => {
            targetOverlay.classList.add('show');
          }, 50);
        }
      };
      button.addEventListener('click', handleClick);

      // Cleanup
      return () => button.removeEventListener('click', handleClick);
    });

    closeButtons.forEach((button) => {
      const handleClick = () => {
        const overlay = button.getAttribute('data-overlay');
        const targetOverlay = document.querySelector(`.laguna__overlay_BG[data-overlay="${overlay}"]`);
        if (targetOverlay) {
          targetOverlay.classList.remove('show');
          setTimeout(() => {
            targetOverlay.classList.remove('show');
          }, 500);
        }
      };
      button.addEventListener('click', handleClick);

      // Cleanup
      return () => button.removeEventListener('click', handleClick);
    });

    overlays.forEach((overlay) => {
      const handleClick = (event) => {
        if (event.target === overlay) {
          const overlayAttr = overlay.getAttribute('data-overlay');
          const targetOverlay = document.querySelector(`.laguna__overlay_BG[data-overlay="${overlayAttr}"]`);
          if (targetOverlay) {
            targetOverlay.classList.remove('show');
            setTimeout(() => {
              targetOverlay.classList.remove('show');
            }, 500);
          }
        }
      };
      overlay.addEventListener('click', handleClick);

      // Cleanup
      return () => overlay.removeEventListener('click', handleClick);
    });
  }, []);

  return null;
};

export default OverlayManager;