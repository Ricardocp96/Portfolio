import React from 'react'


import {About, Footer,Header, Skills, Testimonial, Work } from './containers'
import {Navbar } from './Components/'
import './App.scss'
const App = () => {
  
  return (
 // return Components we just created 
 <div className='app'>
  <Navbar/>
 <Header/>
 <About/>
 <Work/>
 <Skills/>
 <Testimonial/>
 <Footer/>
 </div>

  );
}

export default App