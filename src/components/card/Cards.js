import React from 'react';
import './Card.css';

const Cards = (props) => {
    return ( 
        <div className="service-box">
            <a href='' onClick={()=> window.open(`${props.slink}`)} >
            <div className="service-box-img">
                <div className="service-type">{props.stype}</div>
                <img src={props.simage} alt="service-image"/>
            </div>
            <div className="service-box-text">
                {props.sdescription}
            </div>
            </a>
        </div>
        
    );
}
 
export default Cards;