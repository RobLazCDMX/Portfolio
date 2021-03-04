import React, { useEffect } from 'react';
import image from '../assets/Para 1-min.jpg';
import Aos from "aos";
import 'aos/dist/aos.css';

const About = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    }, [])
    return ( 
        <div  className="about" id="about">
            <div data-aos="fade-up" className="about-model">
                <img src={image} alt="model1"/>
            </div>
            <div className="about-text">
                <h2>About Me</h2>
                <h3>I'm a Passionate <span>Developer</span></h3>
                <p>Up-and-coming software engineer with knowledge in backend and frontend languages. Seeking to become a full-stack developer and to contribute to an organization that is seeking to grow and challenge the status quo. I also enjoy skydiving, running, bicycling, and reading </p>
                <button onClick={()=> window.open("https://www.linkedin.com/in/roberto-lazcano-6546301a7/", "_blank")}>View More Details</button>
            </div>
        </div>
    );
}
 
export default About;