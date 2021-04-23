import React from 'react'
import { Carousel } from 'react-responsive-carousel';

import PhoneScreen from '../../icons/phoneScreen1.svg'

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

