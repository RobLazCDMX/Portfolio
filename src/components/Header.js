import React , { useEffect }  from 'react';
import Navbar from './Navbar/Navbar';
import Aos from "aos";
import 'aos/dist/aos.css';

const Header = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    }, [])
    return ( 
        <div className="main" id="home">
            <Navbar/>
        
           <div data-aos="fade-up" className="name" >
                <p className="heading">Looking For A Developer!</p>
                <h1>I'm <span>Roberto</span> Lazcano </h1>
                <p className="details">Obviously I'm a Web Designer. Web Developer with over 3 years of experience. Experience with all stages of the development cycle for dynamic web projects</p>

                <div className="header-btns">
                    <a href="#" className="hire-me-btn">Hire Me</a>
                    <a href="#" className="cv-btn">Download CV</a>
                </div>
           </div>
           <div className="arrow"></div>
        </div>
    );
}
 
export default Header;