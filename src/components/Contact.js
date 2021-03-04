import React , {  useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
import MePic from '../assets/Me.png';



const Contact = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    }, [])
    return ( 
        <div data-aos="fade-up" className="contact" id="contact">
            <h3>Get In Touch</h3>
            <div className="contact-input">
                <input type="email" id="email" placeholder="Example@email.com"/>
                <input type='text' id='Name' placeholder="Full Name" />
                <input type='text' id='Phone#' placeholder="Phone Number"/>
            </div>
            <div className='fName'>
            
            </div>
            <div className="cv-btn-contact" >
                <a href='home'>Continue</a> 
            </div>
            <div className="cv-btn-contact" >
                <a href="" onClick={()=> window.open("https://slack-files.com/T5VCY49B3-F01MY9M27U3-3bbdfe3f2a", "_blank")}>Download CV</a>
            </div>
            <br/>
            <br/>
            <img src={MePic} alt="Not available"/>
            
            
        </div>
    );
}
 
export default Contact;