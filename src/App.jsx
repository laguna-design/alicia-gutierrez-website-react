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
import ScrollEffects from './js/ScrollEffects';
import ColorThemeToggle from './js/ColorThemeToogle';
import CustomCursor from './js/CustomCursor';
import OverlayManager from './js/OverlayManager';
import ThumbnailGallery from './js/ThumbnailGallery';
import ScrollToTopButton from './js/ScrollToTopButton';
import ScrollUpBTN from './components/buttons/ScrollUp';

// Homepage-only components
import HeroMyselfDesktop from './components/Index/HeroZone/HeroZoneMyself';
import HeroNavAndMoon from './components/Index/HeroZone/HeroNavAndMoon';
import HeroZoneMyInfo from './components/Index/HeroZone/HeroZoneMyInfo';
import TitleSelectedProjects from './components/titles/SelectedProjectsTitle';
import ProjectsList from './components/projects/ProjectsList';
import IndexFooter from './components/Index/IndexFooter';
import OverlayDesign from './components/overlays/OverlayDesign';
import OverlayIllustration from './components/overlays/OverlayIllustration';
import OverlayHi from './components/overlays/OverlayHi';
import ThumbnailHover from './components/projects/ThumbnailsHover';

// Mixpanel
import mixpanel from './utils/mixpanel';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    mixpanel.track('App Loaded');
  }, []);

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
        <main className="laguna__main">
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
          <OverlayDesign />
          <OverlayIllustration />
          <OverlayHi />
          <ThumbnailHover />
        </main>
      )}

      {/* Global elements */}
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