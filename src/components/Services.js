import React, { useEffect } from 'react';
import ImageSlider from './Slider/Slider'
// import Cards from './card/Cards';
// import Data from './card/Data';
// import image3 from '../assets/s1.png';
// import image2 from '../assets/guess.png';
// import image1 from '../assets/s3.jpg';
import Aos from "aos";
import 'aos/dist/aos.css';
import './card/Card.css';


const Services = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    }, []);
    return ( 
        <div data-aos="fade-up">
            <div  className="services" id="services">
                <div className="service-heading">
                    <h1>Skills</h1>
                    <p>These are the Skills I Provide You.</p>
                    
                </div>
                <div>
                    <ImageSlider/>
                </div>
                
            </div>
        </div>
        
    );
}
 
export default Services;