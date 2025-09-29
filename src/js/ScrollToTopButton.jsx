import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      setVisible(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      id="scrollUpBtn"
      onClick={scrollToTop}
      className={`laguna__arrowup ${visible ? 'laguna__arrowup_show' : ''}`}
      style={{
        display: visible ? 'flex' : 'none',
        right: visible ? '3rem' : '-3rem',
        position: 'fixed',
        bottom: '2rem',
        transition: 'right 0.3s ease',
        zIndex: 1000,
      }}
    >
      <svg id="laguna__arrow_up" data-name="Arrow up" version="1.1" viewBox="0 0 31 36" width="24px">
        <path stroke="#F0D4C0" stroke-width="4px" fill="none" d="M15.5,35.5V2.5"></path>
        <path stroke="#F0D4C0" stroke-width="4px" fill="none" d="M28.8,16.6L15.5,3.3,2.2,16.6"></path>
        </svg>
    </button>
  );
};

export default ScrollToTopButton;