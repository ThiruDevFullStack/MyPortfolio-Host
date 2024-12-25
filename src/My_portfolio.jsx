import React from 'react'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import './CSS/Styles.css';

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
          <h1>Hi, I am <span>Thirumurugan</span></h1>
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
        <div className="thanks">
          <img src="./thanks.png" alt="thanks" height={"100px"}/>
        </div>
    </>
  )
}

export default My_portfolio