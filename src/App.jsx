	import { useEffect } from 'react';
	import { Routes, Route, useLocation } from 'react-router-dom';

	// Pages
	import HomePage from './pages/Home';
	import ProjectPage from './pages/ProjectPage';

	// Components
	import HeadMeta from './components/HeadMeta';
	import Header from './components/Header';
	import CursorElement from './components/th/CursorElement';
	import AmimatedBG from './components/th/AnimatedBG';
	import ScrollUpBTN from './components/buttons/ScrollUp';

	// JS
	import ScrollEffects from './js/ScrollEffects';
	import ColorThemeToggle from './js/ColorThemeToogle';
	import CustomCursor from './js/CustomCursor';
	import OverlayManager from './js/OverlayManager';
	import ThumbnailGallery from './js/ThumbnailGallery';
	import ScrollToTopButton from './js/ScrollToTopButton';

	// Homepage-only components
	import HeroMyselfDesktop from './components/Index/HeroZone/HeroZoneMyself';
	import HeroNavAndMoon from './components/Index/HeroZone/HeroNavAndMoon';
	import HeroZoneMyInfo from './components/Index/HeroZone/HeroZoneMyInfo';
	import TitleSelectedProjects from './components/titles/SelectedProjectsTitle';
	import ProjectsList from './components/projects/ProjectsList';
	import IndexFooter from './components/Index/IndexFooter';

	// Overlays
	import OverlayDesign from './components/overlays/OverlayDesign';
	import OverlayIllustration from './components/overlays/OverlayIllustration';
	import OverlayHi from './components/overlays/OverlayHi';
	import OverlayProjectDetails from './components/overlays/OverlayProjectDetails';

	// Mixpanel (optional)
	// import mixpanel from './utils/mixpanel';

	function App() {
	const location = useLocation();
	const isHome = location.pathname === '/';

	// Set body class based on route
	useEffect(() => {
		const body = document.body;

		if (location.pathname === '/') {
		body.className = 'laguna__home';
		} else if (location.pathname.startsWith('/project')) {
		body.className = 'laguna__singlepage';
		} else {
		body.className = ''; // fallback or other route
		}
	}, [location.pathname]);

	// Close overlays on route change
	useEffect(() => {
		const closeOverlayOnRouteChange = () => {
		const activeOverlay = document.querySelector('.laguna__overlay_BG.active');
		if (activeOverlay) {
			activeOverlay.classList.remove('active');
			document.body.classList.remove('overlay-open'); // if used globally
		}
		};

		closeOverlayOnRouteChange();
	}, [location]);

	return (
		<>
		<HeadMeta />
		<CursorElement />
		<AmimatedBG />
		<Header />

		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/project/:slug" element={<ProjectPage />} />
		</Routes>

		{isHome && (
			<>
			<section className="laguna__heroZone">
				<div className="laguna__heroZone-main">
				<HeroMyselfDesktop />
				<HeroNavAndMoon />
				<HeroZoneMyInfo />
				</div>
			</section>

			<section id="laguna_work" className="laguna__selectedProjects">
				<TitleSelectedProjects />
				<ProjectsList />
			</section>

			<IndexFooter />
			</>
		)}

		{/* Overlays */}
		<OverlayHi />
		<OverlayDesign />
		<OverlayIllustration />
		<OverlayProjectDetails />

		{/* JS Enhancements */}
		<ScrollEffects />
		<ColorThemeToggle />
		<CustomCursor />
		<OverlayManager />
		<ThumbnailGallery />
		<ScrollToTopButton />
		<ScrollUpBTN />
		</>
	);
	}

	export default App;