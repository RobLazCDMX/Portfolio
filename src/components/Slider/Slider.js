import React from 'react';
import Carousel from "react-elastic-carousel";
import Cards from '../card/Cards';
import Data from '../card/Data';
import image1 from '../../assets/s3.jpg';
import image3 from '../../assets/s1.png';
import image2 from '../../assets/guess.png';
import image4 from '../../assets/tesla.png';
import image5 from '../../assets/hopeP.png';



const ImageSlider = () => {

    const breakProints=[
        {width:1, itemsToShow:1},
        {width:500, itemsToShow:2},
        {width:768, itemsToShow:3},
        {width:1800, itemsToShow:4}
    ]

    return (
                
        <div >
                <Carousel breakPoints={breakProints}>
                    <Cards 
                        // stype={Data[0].stype}
                        simage={image1}
                        sdescription={Data[0].sdescription}
                        slink={Data[0].slink}
                    />
                    <Cards
                        // stype={Data[1].stype}
                        simage={image5}
                        sdescription={Data[4].sdescription}
                        slink={Data[4].slink}
                    />
                    <Cards
                        // stype={Data[2].stype}
                        simage={image3}
                        sdescription={Data[2].sdescription}
                        slink={Data[2].slink}
                    />
                    <Cards
                        // stype={Data[1].stype}
                        simage={image4}
                        sdescription={Data[3].sdescription}
                        slink={Data[3].slink}
                    />
                    <Cards
                        // stype={Data[2].stype}
                        simage={image2}
                        sdescription={Data[1].sdescription}
                        slink={Data[1].slink}
                    />

                </Carousel>
           
        </div>
        
    );
}
 
export default ImageSlider;