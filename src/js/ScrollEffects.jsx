// ScrollEffects.jsx
import { useEffect, useRef } from 'react';

const ScrollEffects = ({ children }) => {
const clipRef = useRef(null);
const scrollAmountRef = useRef(0);
const isScrollingRef = useRef(false);

useEffect(() => {
	const clipContent = clipRef.current;
	if (!clipContent) return;

	const smoothScroll = () => {
	isScrollingRef.current = true;
	const step = () => {
		const delta = scrollAmountRef.current * 0.2;
		clipContent.scrollLeft += delta;
		scrollAmountRef.current -= delta;

		if (Math.abs(scrollAmountRef.current) < 0.5) {
		scrollAmountRef.current = 0;
		isScrollingRef.current = false;
		return;
		}

		requestAnimationFrame(step);
	};
	requestAnimationFrame(step);
	};

	const handleWheel = (e) => {
	e.preventDefault();
	scrollAmountRef.current += e.deltaY;
	if (!isScrollingRef.current) smoothScroll();
	};

	const handleKeyDown = (e) => {
	const arrowSpeed = 100;
	if (e.key === 'ArrowRight') {
		scrollAmountRef.current += arrowSpeed;
		e.preventDefault();
	} else if (e.key === 'ArrowLeft') {
		scrollAmountRef.current -= arrowSpeed;
		e.preventDefault();
	}

	if (!isScrollingRef.current && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {
		smoothScroll();
	}
	};

	clipContent.addEventListener('wheel', handleWheel, { passive: false });
	window.addEventListener('keydown', handleKeyDown);

	return () => {
	clipContent.removeEventListener('wheel', handleWheel);
	window.removeEventListener('keydown', handleKeyDown);
	};
}, []);

return (
	<div className="laguna__single__clip_content laguna__single__desktop" ref={clipRef}>
	{children}
	</div>
);
};

export default ScrollEffects;