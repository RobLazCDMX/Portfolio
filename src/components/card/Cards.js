import React from 'react';

const Cards = (props) => {
    return ( 
        <div className="service-box">
            <div className="service-box-img">
                <div className="service-type">{props.stype}</div>
                <img src={props.simage} alt="service-image"/>
            </div>
            <div className="service-box-text">
                <a href='' onClick={()=> window.open(`${props.slink}`)} >{props.sdescription}</a>
            </div>
        </div>
    );
}
 
export default Cards;