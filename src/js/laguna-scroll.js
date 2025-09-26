
  const clipContent = document.querySelector('.laguna__single__clip_content');
  let scrollAmount = 0;
  let isScrolling = false;

  // Scroll con rueda del ratón
  clipContent.addEventListener('wheel', function(e) {
    e.preventDefault();
    scrollAmount += e.deltaY;
    if (!isScrolling) smoothScroll();
  }, { passive: false });

  // Scroll con flechas del teclado
  window.addEventListener('keydown', function(e) {
    const arrowSpeed = 100; // cantidad de píxeles por pulsación

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
  });

  // Función de scroll suave
  function smoothScroll() {
    isScrolling = true;
    const step = () => {
      const delta = scrollAmount * 0.2; // factor de suavidad
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
  }
