import React from 'react'
import { Carousel } from 'react-responsive-carousel';

import PhoneScreen from '../../icons/carouselPhone.png'

const PhoneCarousel = () => {
    return (
        <Carousel showThumbs={false} showArrows={false} showStatus={false} autoPlay={false}>
            <div>
                <img className='w-44' src={PhoneScreen} />
            </div>
            <div>
                <img className='w-44' src={PhoneScreen} />
            </div>
            <div>
                <img className='w-44' src={PhoneScreen} />
            </div>
        </Carousel >
    )
}

export default PhoneCarousel

