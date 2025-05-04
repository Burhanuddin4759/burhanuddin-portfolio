import React from 'react'
import { SKILLS } from '../../data/skills'
import AnimatedSection from '../global/AnimatedSection'

export const Skills = () => {
    return (
        <AnimatedSection animation="slide-right" className="skills-section">
        <div className='main'>
            <h2>Skills</h2>
            <div className='skills-container'>
            {
                SKILLS.map((item) => {
                    return (
                        <div className='skillsItem' 
                         key={item}
                         >
                            {item}
                        </div>
                    )
                })
            }
            </div>
        </div>
        </AnimatedSection>
    )
}
