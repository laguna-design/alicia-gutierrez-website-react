import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const OverlayManager = () => {
  const location = useLocation();

  useEffect(() => {
    const triggerButtons = document.querySelectorAll('.laguna__trigger_btn');
    const closeButtons = document.querySelectorAll('.laguna__close_btn');
    const overlays = document.querySelectorAll('.laguna__overlay_BG');

    const triggerHandlers = [];
    const closeHandlers = [];
    const overlayHandlers = [];

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
      triggerHandlers.push(() => button.removeEventListener('click', handleClick));
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
      closeHandlers.push(() => button.removeEventListener('click', handleClick));
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
      overlayHandlers.push(() => overlay.removeEventListener('click', handleClick));
    });

    return () => {
      triggerHandlers.forEach((unbind) => unbind());
      closeHandlers.forEach((unbind) => unbind());
      overlayHandlers.forEach((unbind) => unbind());
    };
  }, [location.pathname]); // Re-run on route change

  return null;
};

export function closeOverlay(overlayType) {
  const targetOverlay = document.querySelector(`.laguna__overlay_BG[data-overlay="${overlayType}"]`);
  if (targetOverlay) {
    targetOverlay.classList.remove('show');
    setTimeout(() => {
      targetOverlay.classList.remove('show');
    }, 500);
  }
  document.body.classList.remove('overlay-open');
}

export default OverlayManager;