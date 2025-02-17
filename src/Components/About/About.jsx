import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_pic_react_portfolio.jpg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img className='about-profile-img' src={profile_img} alt="Profile image of website owner Chris" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>As a Full-Stack Developer, I lead projects from start to finish, ensuring deadlines and goals are met. I build responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and React. On the backend, I develop server-side applications with Node.js and Express, improving performance with optimized database schemas. I also mentor peers on best practices for version control and continuous integration using GitHub and Git Actions.</p>
                        <p></p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "90%" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "80%" }} /></div>
                        <div className="about-skill"><p>Node JS</p><hr style={{ width: "70%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>years of web development experience</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>20+</h1>
                    <p>projects completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>7+</h1>
                    <p>years of excellent customer service</p>
                </div>
            </div>
        </div>
    )
}

export default About
