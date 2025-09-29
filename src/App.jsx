//Components
import Header from './components/header'
import CursorElement from './components/CursorElement'


import ColorThemeToggle from './js/ColorThemeToogle'
import CustomCursor from './js/CustomCursor'

function App() {

  return (
    <> 
      <CursorElement />
      <Header />

      <ColorThemeToggle />
      <CustomCursor />
      {/* other components */}

    </>
  )
}

export default App
