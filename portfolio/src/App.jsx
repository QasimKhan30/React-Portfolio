// import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import DownloadResume from './components/Resume'
import Certifications from './components/Certifications'

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className="fixed top-0 -z-10 h-full w-full">
        {/* background */}
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="container mx-auto px-8">
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Certifications Section */}
        <Certifications />

        {/* Technologies Section */}
        <Technologies />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Resume Section */}
        <DownloadResume />

        {/* Contact Section */}
        <Contact />

      </div>
      
    </div>
  )
}

export default App