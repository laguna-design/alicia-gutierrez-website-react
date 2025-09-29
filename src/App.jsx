//Components
import Header from './components/Header'
import CursorElement from './components/CursorElement'
import Projects from './components/Projects'
import TitleSelectedProjects from './components/titles/SelectedProjects'



//JS
import ColorThemeToggle from './js/ColorThemeToogle'
import CustomCursor from './js/CustomCursor'
import OverlayManager from './js/OverlayManager'
import ThumbnailGallery from './js/ThumbnailGallery'
import ScrollEffects from './js/ScrollEffects'
import ScrollToTopButton from './js/ScrollToTopButton'




function App() {

  return (
    <>
      <CursorElement /> 
      <Header />
      <main class="laguna__main">
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
