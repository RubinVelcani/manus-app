import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import style from './WorkerCarousel.module.css'

import CarpenterImage from '../../icons/carpenter.jpg'
import CarpenterLogo from '../../icons/carpenterLogo.svg'
import PainterImage from '../../icons/painter.jpg'
import PainterLogo from '../../icons/painterLogo.svg'

const WorkerCarousel = () => {
    return (
        <div>
            <div className={style.carouselBackground}></div>
            <Carousel showThumbs={false} showStatus={false} showArrows={false} centerMode={true} centerSlidePercentage='60' autoFocus={false} autoPlay={false}>
                <div className='flex flex-col h-4/6 mt-24 mb-12 ml-6 mr-3 bg-white text-xxs shadow-md'>
                    <img className='w-2/5 h-28' src={CarpenterImage} />
                    <p className='px-3 py-2 text-left text-gray'>
                        “I started working with Manus because I regurlarly had gaps in my schedule
                        and I also often develop some availability at short notice.
                        I wanted to find small jobs to fill those void periods.
                        After just about a couple weeks,
                        I saw that this was something I wanted to do permanently.”
                    </p>
                    <div className='flex flex-row justify-between items-center px-3 py-2 mt-auto'>
                        <img className='w-3 h-3' src={CarpenterLogo} alt='' />
                        <h4>
                            Olivia, <span className='text-mediumBlue'>Carpenter in Manchester</span>
                        </h4>
                    </div>
                </div>
                <div className='flex flex-col h-4/6 mt-24 mb-12 mx-3 bg-white text-xxs shadow-md'>
                    <img className='h-28' src={PainterImage} />
                    <p className='px-3 py-2 text-left text-gray'>
                        “I started working with Manus because I regurlarly had gaps in my schedule
                        and I also often develop some availability at short notice.
                        I wanted to find small jobs to fill those void periods.
                        After just about a couple weeks,
                        I saw that this was something I wanted to do permanently.”
                    </p>
                    <div className='flex flex-row justify-between items-center px-3 py-2 mt-auto'>
                        <img className='w-3 h-3' src={PainterLogo} alt='' />
                        <h4>
                            Conrad, <span className='text-mediumBlue'>Painter in London</span>
                        </h4>
                    </div>
                </div>
                <div className='flex flex-col h-4/6 mt-24 mb-12 mx-3 bg-white text-xxs shadow-md'>
                    <img className='w-3/5 h-28' src={PainterImage} />
                    <p className='px-3 py-2 text-left text-gray'>
                        “I started working with Manus because I regurlarly had gaps in my schedule
                        and I also often develop some availability at short notice.
                        I wanted to find small jobs to fill those void periods.
                        After just about a couple weeks,
                        I saw that this was something I wanted to do permanently.”
                    </p>
                    <div className='flex flex-row justify-between items-center px-3 py-2 mt-auto'>
                        <img className='w-3 h-3' src={PainterLogo} alt='' />
                        <h4>
                            Conrad, <span className='text-mediumBlue'>Painter in London</span>
                        </h4>
                    </div>
                </div>
                <div className='flex flex-col min-w-min h-4/6 mt-24 mb-12 mr-6 ml-3 bg-white text-xxs shadow-md'>
                    <img className='w-3/5 h-28' src={CarpenterImage} />
                    <p className='px-3 py-2 text-left text-gray'>
                        “I started working with Manus because I regurlarly had gaps in my schedule
                        and I also often develop some availability at short notice.
                        I wanted to find small jobs to fill those void periods.
                        After just about a couple weeks,
                        I saw that this was something I wanted to do permanently.”
                    </p>
                    <div className='flex flex-row justify-between items-center px-3 py-2 mt-auto'>
                        <img className='w-3 h-3' src={CarpenterLogo} alt='' />
                        <h4>
                            Olivia, <span className='text-mediumBlue'>Carpenter in Manchester</span>
                        </h4>
                    </div>
                </div>
            </Carousel >
        </div>
    )
}

export default WorkerCarousel