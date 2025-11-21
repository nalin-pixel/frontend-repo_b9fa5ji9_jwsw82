import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import BackgroundFX from './components/BackgroundFX'

function App() {
  return (
    <div className="min-h-screen text-white">
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Timeline />
        <Contact />
      </main>
      <footer className="py-10 text-center text-white/60">
        © {new Date().getFullYear()} Yash — All rights reserved.
      </footer>
    </div>
  )
}

export default App
