import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Services from './components/carousel'
import About from './components/About'
import Portfolio from './components/Portfolio/Portfolio'
import ServicesSection from './components/services/ServicesSection'
import Footer from './components/Footer'
import ContactSection from './components/Contact'
import './App.css';
import WhyChooseUs from './components/WhyChooseUs'

function App() {

  return (
    <>
      <Navbar/>
         <Services/>
       <About/>
      <ServicesSection/>
      <Portfolio/>
      <WhyChooseUs />

      <ContactSection/>
      <Footer/> 

      
    </>
  )
}

export default App
