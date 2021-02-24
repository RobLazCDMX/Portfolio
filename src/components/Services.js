import React, { useEffect } from 'react';
import Cards from './card/Cards';
import Data from './card/Data';
import image1 from '../assets/s1.png';
import image2 from '../assets/s2.png';
import image3 from '../assets/s3.jpg';
import Aos from "aos";
import 'aos/dist/aos.css';

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
                <div className="b-container">
                    <Cards
                    stype={Data[0].stype}
                    simage={image1}
                    sdescription={Data[0].sdescription}
                    />
                    <Cards
                    stype={Data[1].stype}
                    simage={image2}
                    sdescription={Data[1].sdescription}
                    />
                    <Cards
                    stype={Data[2].stype}
                    simage={image3}
                    sdescription={Data[2].sdescription}
                    />
                </div>
            </div>
        </div>
        
    );
}
 
export default Services;