import { useEffect, useRef } from 'react';

const ThumbnailGallery = () => {
  const hoverImageRef = useRef(null);

  useEffect(() => {
    const hoverImage = hoverImageRef.current;
    const listItems = document.querySelectorAll('.laguna__Projects__list li');

    const handleMouseMove = (e) => {
      const imgSrc = e.currentTarget.getAttribute('data-img');
      if (hoverImage) {
        hoverImage.innerHTML = `<img src="${imgSrc}" alt="${imgSrc}" />`;
        hoverImage.style.display = 'block';
        hoverImage.style.left = `${e.pageX + 10}px`;
        hoverImage.style.top = `${e.pageY + 10}px`;
      }
    };

    const handleMouseLeave = () => {
      if (hoverImage) {
        hoverImage.style.display = 'none';
      }
    };

    listItems.forEach((li) => {
      li.addEventListener('mousemove', handleMouseMove);
      li.addEventListener('mouseleave', handleMouseLeave);
    });

    const moveWithCursor = (e) => {
      if (hoverImage && hoverImage.style.display === 'block') {
        hoverImage.style.left = `${e.pageX + 10}px`;
        hoverImage.style.top = `${e.pageY + 10}px`;
      }
    };

    document.addEventListener('mousemove', moveWithCursor);

    // Cleanup
    return () => {
      listItems.forEach((li) => {
        li.removeEventListener('mousemove', handleMouseMove);
        li.removeEventListener('mouseleave', handleMouseLeave);
      });
      document.removeEventListener('mousemove', moveWithCursor);
    };
  }, []);

  return <div className="laguna__thumbnail__hoverImage" ref={hoverImageRef}></div>;
};

export default ThumbnailGallery;