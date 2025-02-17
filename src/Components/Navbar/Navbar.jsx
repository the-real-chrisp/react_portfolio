import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/dropdown_menu.svg'
import menu_close from '../../assets/dropdown_close.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="Logo Dev w/Chris" />
      <img src={menu_open} alt="" className='nav-mob-open'/>
      <ul className="nav-menu">
        <img src={menu_close} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link' offset={50} href='#home'><p>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p>About Me</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p>Services</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p>Portfolio</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p>Contact</p></AnchorLink></li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar

