import React from 'react'
import './Hero.css'
import hero_image from '../../assets/profile_pic_react_portfolio.jpg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img className='hero-img' src={hero_image} alt="Hero image displaying photo of website owner" />
      <h1><span>I'm Chris Purcell,</span> software developer based in the US.</h1>
      <p>I'm a front-end and back-end developer from California ready to help you build your dream web application!</p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
