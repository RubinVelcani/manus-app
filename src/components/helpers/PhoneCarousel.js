import React from 'react'
import { Carousel } from 'react-responsive-carousel';

const PhoneCarousel = () => {
    return (
        <Carousel autoPlay={false} showThumbs={false} showArrows={false} showStatus={false}>
            <div>
                <img className='w-44' src="./icons/phoneScreen1.svg" />
            </div>
            <div>
                <img className='w-44' src="./icons/phoneScreen1.svg" />
            </div>
            <div>
                <img className='w-44' src="./icons/phoneScreen1.svg" />
            </div>
        </Carousel >
    )
}

export default PhoneCarousel

