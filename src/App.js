import React from 'react'
import Navbar from './components/Navbar'
import NavBar from './components/Navbar'
import Intro from './components/Intro'
import Statistic from './components/Statistic'
import Service from './components/Service'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <div className='header'>
        <NavBar />
        <Intro />
      </div>
      <Statistic />
      <div className='section'>
        <Service /> 
        <Portfolio />
        <About />
        <Blog />
      </div>
      <Footer />
    </div>
  )
}

export default App