import { useEffect, useRef } from 'react';

const ScrollEffects = () => {
  const clipRef = useRef(null);
  let scrollAmount = 0;
  let isScrolling = false;

  useEffect(() => {
    const clipContent = clipRef.current;
    if (!clipContent) return;

    const smoothScroll = () => {
      isScrolling = true;
      const step = () => {
        const delta = scrollAmount * 0.2;
        clipContent.scrollLeft += delta;
        scrollAmount -= delta;

        if (Math.abs(scrollAmount) < 0.5) {
          scrollAmount = 0;
          isScrolling = false;
          return;
        }

        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const handleWheel = (e) => {
      e.preventDefault();
      scrollAmount += e.deltaY;
      if (!isScrolling) smoothScroll();
    };

    const handleKeyDown = (e) => {
      const arrowSpeed = 100;
      if (e.key === 'ArrowRight') {
        scrollAmount += arrowSpeed;
        e.preventDefault();
      } else if (e.key === 'ArrowLeft') {
        scrollAmount -= arrowSpeed;
        e.preventDefault();
      }

      if (!isScrolling && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {
        smoothScroll();
      }
    };

    clipContent.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      clipContent.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="laguna__single__clip_content" ref={clipRef}>
      {/* Your scrollable content goes here */}
    </div>
  );
};

export default ScrollEffects;