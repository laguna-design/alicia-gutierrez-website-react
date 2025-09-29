import { useEffect, useState } from 'react';
//Components
import Header from './components/Header'
import CursorElement from './components/CursorElement'
import Projects from './components/Projects'
import TitleSelectedProjects from './components/titles/SelectedProjects'
import HeroMyselfDesktop from './components/HeroZone/HeroZoneMyself'
import HeroNavAndMoon from './components/HeroZone/HeroNavAndMoon'
import HeroZoneMyInfo from './components/HeroZone/HeroZoneMyInfo'

//JS
import ColorThemeToggle from './js/ColorThemeToogle'
import CustomCursor from './js/CustomCursor'
import OverlayManager from './js/OverlayManager'
import ThumbnailGallery from './js/ThumbnailGallery'
import ScrollEffects from './js/ScrollEffects'
import ScrollToTopButton from './js/ScrollToTopButton'

//Mixpanel
import mixpanel from './utils/mixpanel';


function App() {
  useEffect(() => {
    mixpanel.track('App Loaded');
  }, []);

  return (
    <>
      <CursorElement /> 
      <Header />
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
          <Projects />
        </section>
      </main>

      <ScrollEffects />
      <ColorThemeToggle />
      <CustomCursor />
      <OverlayManager />
      <ThumbnailGallery />
      <ScrollToTopButton />
      {/* other components */}
    </>
  )
}

export default App
