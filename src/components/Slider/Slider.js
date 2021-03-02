import React from 'react';
import Carousel from "react-elastic-carousel";
import Cards from '../card/Cards';
import Data from '../card/Data';
import image1 from '../../assets/s3.jpg';
import image3 from '../../assets/s1.png';
import image2 from '../../assets/guess.png';




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
                        stype={Data[0].stype}
                        simage={image1}
                        sdescription={Data[0].sdescription}
                        slink={Data[0].slink}
                    />
                    <Cards
                        stype={Data[1].stype}
                        simage={image2}
                        sdescription={Data[1].sdescription}
                        slink={Data[1].slink}
                    />
                    <Cards
                        stype={Data[2].stype}
                        simage={image3}
                        sdescription={Data[2].sdescription}
                        slink={Data[2].slink}
                    />
                    <Cards
                        stype={Data[1].stype}
                        simage={image2}
                        sdescription={Data[1].sdescription}
                        slink={Data[1].slink}
                    />
                    <Cards
                        stype={Data[2].stype}
                        simage={image3}
                        sdescription={Data[2].sdescription}
                        slink={Data[2].slink}
                    />

                </Carousel>
           
        </div>
        
    );
}
 
export default ImageSlider;