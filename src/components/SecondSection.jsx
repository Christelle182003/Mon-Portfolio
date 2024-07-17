import React from 'react';
import "../styles/SecondSection.css"
import ProjectsCard from "./ProjectsCard";
import Project1Image from "../assets/work.svg";
import Project2Image from "../assets/image 10.svg";
import Project3Image from "../assets/image 9.svg"
import flèche from "../assets/arrow.svg"
import Github from "../assets/Vector.svg"

function SecondSection(){
  let project1Images = [Project1Image];
  let project2Images = [Project2Image];
  let project3Images =[Project3Image];


  return (
    <div className="second-section">
      <div className="second-section-title">
        <h1>FEATURED PROJECTS</h1>
        <p>Voici quelques-uns des projets sélectionnés qui mettent en valeur ma passion pour le développement front-end.</p>
      </div>
      <div className="projects">
        <div className="project-items">
        <div className='project-1-img'>
          <ProjectsCard images={project1Images} />
        </div>
        <div className='project-text'>
            <div className='text-top'>
                <h3>Promotional landing page for our favorite show</h3>
                <p>Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
            </div>
            <div className='text-center'>
                <h5>PROJECT INFO</h5>
                <hr/>
                <div className='year'>
                <h5>YEAR</h5>
                <p>2024</p>
                </div>
                <hr/>
                <div className='year'>
                <h5>RÔLE</h5>
                <p>Front-end développeur</p>
                </div>
                <hr/>
            </div>
            <div className='text-bottom'>
                <div className='live-demo'>
                <a href='#'>Live Demo <img id='flèche' src={flèche}/></a>
                <hr/>
                </div>
                <div className='see-one'>
                <a href='#'>See on Github <img id='git' src={Github}/></a>
                <hr/>
                </div>
            </div>
        </div>
        </div>
        <div className="project-items">
        <div className='project-2-img'>
          <ProjectsCard images={project2Images} />
        </div>
          <div className='project-2-text'>
            <div className='text-top'>
                <h3>Blog sites for world news</h3>
                <p>Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
            </div>
            <div className='text-center'>
                <div className='project-info'>
                <h5>PROJECT INFO</h5>
                <hr/>
                </div>
                <div className='year'>
                <h5>CLIENT</h5>
                <p>World news</p>
                </div>
                <hr/>
                <div className='year'>
                <h5>YEAR</h5>
                <p>2024</p>
                </div>
                <hr/>
                <div className='year'>
                <h5>RÔLE</h5>
                <p>Front-end développeur</p>
                </div>
                <hr/>
            </div>
            <div className='text-bottom'>
                <div className='live-demo'>
                <a href='#'>View project <img id='flèche' src={flèche}/></a>
                <hr/>
                </div>
            </div>
        </div>
        </div>
        <div className='project-items'>
        <div className='project-3-img'>
          <ProjectsCard images={project3Images} />
        </div>
          <div className='project-text'>
            <div className='text-top'>
                <h3>E-Commerce Product Page</h3>
                <p>Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
            </div>
            <div className='text-center'>
                <h5>PROJECT INFO</h5>
                <hr/>
                <div className='year'>
                <h5>YEAR</h5>
                <p>2024</p>
                </div>
                <hr/>
                <div className='year'>
                <h5>RÔLE</h5>
                <p>Front-end développeur</p>
                </div>
                <hr/>
            </div>
            <div className='text-bottom'>
                <div className='live-demo'>
                <a href='#'>Live Demo <img id='flèche' src={flèche}/></a>
                <hr/>
                </div>
                <div className='see-one'>
                <a href='#'>See on Github <img id='git' src={Github}/></a>
                <hr/>
                </div>
            </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default SecondSection;
