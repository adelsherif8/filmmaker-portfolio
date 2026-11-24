import { useEffect } from 'react'

// Context
import { ThemeProvider }   from './context/ThemeContext'
import { SectionProvider, useSection } from './context/SectionContext'

// UI
import Grain          from './components/ui/Grain'
import ProgressBar    from './components/ui/ProgressBar'
import Controls       from './components/ui/Controls'

// Layout
import Nav       from './components/layout/Nav'
import Filmstrip from './components/layout/Filmstrip'
import Footer    from './components/layout/Footer'

// Sections
import Hero         from './components/sections/Hero'
import About        from './components/sections/About'
import Breakdown    from './components/sections/Breakdown'
import Films        from './components/sections/Films'
import PlacidShoot  from './components/sections/PlacidShoot'
import Credits      from './components/sections/Credits'
import Craft        from './components/sections/Craft'
import Training     from './components/sections/Training'
import Contact      from './components/sections/Contact'

function TitleSync() {
  const { currentName } = useSection()
  useEffect(() => {
    document.title = currentName === 'Hero'
      ? 'Omar Emad El Din | Scriptwriter & Filmmaker | Cairo · Doha'
      : `Omar Emad El Din | ${currentName}`
  }, [currentName])
  return null
}

export default function App() {
  return (
    <ThemeProvider>
      <SectionProvider>
        <TitleSync />

        {/* Light global overlays only (no preloader, custom cursor or scroll-jacking) */}
        <Grain />
        <ProgressBar />
        <Controls />

        <Nav />
        <main>
          <Hero ready />
          <About />
          <Breakdown />
          <Films />
          <PlacidShoot />
          <Filmstrip />
          <Credits />
          <Craft />
          <Training />
          <Contact />
        </main>
        <Footer />
      </SectionProvider>
    </ThemeProvider>
  )
}
