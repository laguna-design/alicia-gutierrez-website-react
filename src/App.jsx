//Components
import Header from './components/Header'
import CursorElement from './components/CursorElement'
import Projects from './components/Projects'


//JS
import ColorThemeToggle from './js/ColorThemeToogle'
import CustomCursor from './js/CustomCursor'
import OverlayManager from './js/OverlayManager'
import ThumbnailGallery from './js/ThumbnailGallery'
import ScrollEffects from './js/ScrollEffects'
import ScrollToTopButton from './js/ScrollToTopButton'
import SeeAllToggle from './js/SeeAllToggle'



function App() {

  return (
    <>
      <CursorElement /> 
      <Header />
      <Projects />

      <ScrollEffects />
      <ColorThemeToggle />
      <CustomCursor />
      <OverlayManager />
      <ThumbnailGallery />
      <ScrollToTopButton />
      <SeeAllToggle />

      {/* other components */}

    </>
  )
}

export default App
