// Skills.js
import React from 'react';
import './Skills.css'

const Skills = () => {
    const front_end = [ "React", "HTML5", "CSS3", "Bootstrap"];
    const back_end = [ "Python", "Django"];
    const database = [ "Oracle","SqlLite3"];
    const tools = [ "Vs Code", "Pycharm", "Github"];
    const others = [ ".Net", "Visual Studio", "Adobe PhotoShop"];


    return (
        <section id="skills">
            <div className='back'>
                <div className='text_skill'>
                <h2>Skills</h2>
                <p>"Technical skills are the foundation upon which innovation is built. With every line of code and every problem solved,</p>
                    <p> I strive to transform challenges into opportunities and ideas into reality."</p>
                </div>
            <div className="content">
          
            <div className='front-end'>
            <h1>Front-End</h1>
            <ul>
                {front_end.map((front, index) => (
                    <li key={index}>{front}</li>
                ))}
            </ul>
            </div>
            <div className="back-end">
                <h1>Back-End</h1>
            <ul>
                {back_end.map((back, index) => (
                    <li key={index}>{back}</li>
                ))}
            </ul>
            </div>
           <div className="database">
            <h1>DataBase</h1>
           <ul>
                {database.map((data, index) => (
                    <li key={index}>{data}</li>
                ))}
            </ul>
           </div>
           
           <div className="tools">
            <h1>Tools Using</h1>
           <ul>
                {tools.map((tool, index) => (
                    <li key={index}>{tool}</li>
                ))}
            </ul>
           </div>
        
        <div className="others">
            <h1>Extra Known</h1>
        <ul>
                {others.map((other, index) => (
                    <li key={index}>{other}</li>
                ))}
            </ul>
        </div>
          
           
           
            </div>
            </div>
        </section>
    );
};

export default Skills;
