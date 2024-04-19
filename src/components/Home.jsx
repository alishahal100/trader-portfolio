import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Services from './Services'
import Footer from './Footer'

const Home = () => {

  
  return (
    <section className=' w-screen   '>
      <Navbar/>
      <About/>
      <Services/>
        <Footer/>
    </section >
  )
}

export default Home
