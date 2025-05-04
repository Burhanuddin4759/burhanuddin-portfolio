import React from 'react'
import { SKILLS } from '../../data/skills'

export const Skills = () => {
    return (
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
    )
}
