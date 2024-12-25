// Projects.js
import React from 'react';


const Projects = () => {
    const javascript = [
        { name: "Grade Calculator", description: "A JavaScript app that calculates grades based on user input." },
        { name: "Online Quiz", description: "A JavaScript app that allows users to take quizzes and see their scores." },
        { name: "Weather Finder", description: "A JavaScript app that fetches and displays weather data based on user input." },
        { name: "Movie Review", description: "A JavaScript app that lets users add, save, and view movie reviews." }
    ];
    const react_js = [
        { name: "To-Do List", description: "A React app to manage tasks efficiently, allowing users to add, delete, and mark tasks as complete." },
        { name: "BMI Calculator", description: "A React app that calculates Body Mass Index based on user input and provides health insights." },
        { name: "Calculator", description: "A React app for performing basic arithmetic calculations, optimized for all screen sizes." },
        { name: "Portfolio (mine)", description: "A React app showcasing my projects, skills, and contact information in a visually appealing portfolio." }
    ];
    const python_django = [
        { name: "Student CRUD", description: "A Django app that allows users to perform CRUD operations on student records." },
        { name: "CGPA Calculator", description: "A Django app that calculates the CGPA based on user input for grades and credits." },
        { name: "Notes Taking App", description: "A Django application to save, organize, and manage personal notes effectively." },
        { name: "Calorie Calculator", description: "A Django app that calculates daily calorie intake based on user input and goals." }
    ];

    return (
        <section id="projects">
            <div className="column_back">
                <h2 id='projects_head'>Projects</h2>
                <div className="column">
                    <div className='card'>
                        <div className="javascript_box">
                            <h3>JavaScript</h3>
                            {javascript.map((project, index) => (
                                <div key={index} className="project-card">
                                    <h5>{project.name}</h5>
                                    <p>&nbsp; &nbsp;{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='card'>
                        <div className="react_js_box">
                            <h3>React Js</h3>
                            {react_js.map((project, index) => (
                                <div key={index} className="project-card">
                                    <h5>{project.name}</h5>
                                    <p>&nbsp; &nbsp;{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='card'>
                        <div className="python_django_box">
                            <h3>Python Django</h3>
                            {python_django.map((project, index) => (
                                <div key={index} className="project-card">
                                    <h5>{project.name}</h5>
                                   <p>&nbsp; &nbsp;{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
