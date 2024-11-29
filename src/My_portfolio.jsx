import React from 'react'
import './My_portfolio.css'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

const My_portfolio = () => {
  return (
    <>
    <div className='full_content'>
    <header>
            <nav>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
        <section id='home'> 
        <div className="text_content">
        <div className="text">
          <h1>Hi, I am </h1>
          <h1 id='thiru'>Thirumurugan</h1>
        </div>
        <div className="p_text">
        <p>I am a full stack web developer. I can provide clean code and pixel perfect design.</p>
        <p>I also make website more & more attractive with web animation</p>
        </div>
       
        </div>
        <div className='btn'>
        <a href="#contact" id='hire_me_button'>Hire Me !</a>
        </div>
       
        </section>
        </div>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default My_portfolio