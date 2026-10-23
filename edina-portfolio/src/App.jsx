import { useTheme } from './hooks/useTheme.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'

import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  // Theme lives here, once, and is passed down — everything that needs
  // it (right now just Navbar → ThemeToggle) reads it as a prop.
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        
        <Contact />
      </main>
      <Footer />
    </>
  )
}
