import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About Me</h1>

      </div>
      <div className="about-sections">
        <div className="about-left">

        </div>
        <div className="about-right">
            <div className="about-para">
                <p></p>
                <p></p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"90%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"80%"}}/></div>
                <div className="about-skill"><p>Node JS</p><hr style={{width:"70%"}}/></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
