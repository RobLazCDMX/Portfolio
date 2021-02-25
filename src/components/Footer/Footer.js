import React from "react";
import GitHub from '../../assets/github-10-32.ico';
import LinkedIn from '../../assets/linkedin-2-32.ico';
import Logo from "../../assets/Logo.png";
import "./Footer.css";
// import { Link, animateScroll as scroll } from "react-scroll";

const footer = () => {
  return (
    <div className="Footer">
      <p>
        <a href=""><img src={LinkedIn} alt=" cannot be found" onClick={()=> window.open("https://www.linkedin.com/in/roberto-lazcano-6546301a7/", "_blank")} /></a>
        
        <a className='icon' href=''> <img src={GitHub} alt=" cannot be found" onClick={()=> window.open("https://github.com/RobLazCDMX")} /></a>
        Copyright &copy; 2020, Roberto Lazcano
        <img src={Logo} alt=" cannot be found" />
        
      </p>
    </div>
  );
};

export default footer;
