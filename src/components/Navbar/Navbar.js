import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    return (  
       <nav>
           <a href="#" className='logo'>
               UI Expert
           </a>

           <input className="menu-btn" type='checkbox' id="menu-btn"/>
           <label className='menu-icon' for="menu-btn">
               <span className="nav-icon"></span>
           </label>

           <ul className="menu">
            <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={1000}>Home</Link></li>
            <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={1000}>About</Link></li>
            <li><Link activeClass="active" to="services" spy={true} smooth={true} offset={-70} duration={1000}>Services</Link></li>
            <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={1000}>Contact</Link></li>
            <li><a href="#portfolio">Portfolio</a></li>
           </ul>
           <a href="#" className="Hey">Hey!</a>
       </nav>
    );
}
 
export default Navbar;