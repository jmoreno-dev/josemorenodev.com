import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProfileSection from './components/ProfileSection'
import Experience from './components/Experience'
import Transition from './components/Transition'
import TechSkills from './components/TechSkills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProfileSection />
      <Experience />
      <Transition />
      <TechSkills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
