import React , { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';


const Contact = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    }, [])
    return ( 
        <div data-aos="fade-up" className="contact" id="contact">
            <h3>Get In Touch</h3>
            <div className="contact-input">
                <input type="email" placeholder="Example@email.com"/>
                <a href="#">Continue</a>
            </div>
            
        </div>
    );
}
 
export default Contact;