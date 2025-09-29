//Components
import Header from './components/header'
import CursorElement from './components/CursorElement'
import SelectedProjects from './components/SelectedProjects'


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
      <section id="laguna_work" className="laguna__selectedProjects">
        <SelectedProjects />
      </section>

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
