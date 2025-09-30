import { useEffect } from 'react';

import HeadMeta from './components/HeadMeta';

//Components
import Header from './components/Header'
import HeroMyselfDesktop from './components/Index/HeroZone/HeroZoneMyself'
import HeroNavAndMoon from './components/Index/HeroZone/HeroNavAndMoon'
import HeroZoneMyInfo from './components/Index/HeroZone/HeroZoneMyInfo'
import IndexFooter from './components/Index/IndexFooter'


//Projects list
import ProjectsList from './components/projects/ProjectsList'
import TitleSelectedProjects from './components/titles/SelectedProjectsTitle'
import ThumbnailHover from './components/projects/ThumbnailsHover';

//Overlays
import OverlayDesign from './components/overlays/OverlayDesign'
import OverlayIllustration from './components/overlays/OverlayIllustration'
import OverlayHi from './components/overlays/OverlayHi'

//Theme Elements
import CursorElement from './components/th/CursorElement'
import AmimatedBG from './components/th/AnimatedBG'

//Buttons
import ScrollUpBTN from './components/buttons/ScrollUp'

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

     
      <HeadMeta />
      <CursorElement /> 
      <AmimatedBG />
      
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
          <ProjectsList />
        </section>
        <IndexFooter />
        <OverlayDesign />
        <OverlayIllustration />
        <OverlayHi />
        <ThumbnailHover />
      </main>
      
      <ScrollEffects />
      <ColorThemeToggle />
      <CustomCursor />
      <OverlayManager />
      <ThumbnailGallery />
      <ScrollToTopButton />
      <ScrollUpBTN />
      {/* other components */}
    </>
  )
}

export default App
