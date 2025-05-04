import React from 'react';
import { PROJECTS } from '../../data/projects';
import './projects.css';

export const Projects = () => {
    return (
        <div className='main'>
            <h2>My Projects</h2>
            <div className='projects-scroll-container'>
                {
                    PROJECTS.map((item, index) => (
                        <div key={index} className='project-card'>
                            <img src={item.img} alt={item.projectName} className='project-image' />
                            <h4 className='project-title'>{item.projectName}</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
