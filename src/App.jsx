import './App.css'
import './refinements.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProfileSection from './components/ProfileSection'
import Experience from './components/Experience'
import Transition from './components/Transition'
import TechSkills from './components/TechSkills'
import Projects from './components/Projects'
import YouTube from './components/YouTube'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()
  return (
    <>
      <a className="skip-link" href="#main-content">{t('nav.skip')}</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Projects />
        <Experience />
        <TechSkills />
        <ProfileSection />
        <Transition />
        <YouTube />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
