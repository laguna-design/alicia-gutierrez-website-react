//Components
import Header from './components/header'
import CursorElement from './components/CursorElement'

//JS
import ColorThemeToggle from './js/ColorThemeToogle'
import CustomCursor from './js/CustomCursor'
import OverlayManager from './js/OverlayManager'
import ThumbnailGallery from './js/ThumbnailGallery'

function App() {

  return (
    <> 
      <CursorElement />
      <Header />

      <ColorThemeToggle />
      <CustomCursor />
      <OverlayManager />
      <ThumbnailGallery />
      {/* other components */}

    </>
  )
}

export default App
