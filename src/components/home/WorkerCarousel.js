import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const WorkerCarousel = () => {
    return (
        <Carousel autoPlay={false} showThumbs={false} showStatus={false} showArrows={false} centerMode={true} centerSlidePercentage='70' autoFocus={false}>
            <div className='flex flex-col min-w-min h-4/6 mt-24 mb-12 ml-6 bg-white text-xxs shadow-md'>
                <img className='w-3/5 h-28' src="./icons/carpenter.jpg" />
                <p className='px-3 py-2 text-left text-gray'>
                    “I started working with Manus because I regurlarly had gaps in my schedule
                    and I also often develop some availability at short notice.
                    I wanted to find small jobs to fill those void periods.
                    After just about a couple weeks,
                    I saw that this was something I wanted to do permanently.”
                    </p>
                <div className='flex flex-row justify-between items-center px-3 py-2 mt-auto'>
                    <img className='w-3 h-3' src='./icons/carpenterLogo.svg' />
                    <h4>
                        Olivia, <span className='text-mediumBlue'>Carpenter in Manchester</span>
                    </h4>
                </div>
            </div>
            <div className='flex flex-col h-4/6 mt-24 mb-12 mx-2 bg-white text-xxs shadow-md'>
                <img className='w-3/5 h-28' src="./icons/painter.jpg" />
                <p className='px-3 py-2 text-left text-gray'>
                    “I started working with Manus because I regurlarly had gaps in my schedule
                    and I also often develop some availability at short notice.
                    I wanted to find small jobs to fill those void periods.
                    After just about a couple weeks,
                    I saw that this was something I wanted to do permanently.”
                    </p>
                <div className='flex flex-row justify-between items-center px-3 py-2 mt-auto'>
                    <img className='w-3 h-3' src='./icons/painterLogo.svg' />
                    <h4>
                        Conrad, <span className='text-mediumBlue'>Painter in London</span>
                    </h4>
                </div>
            </div>
            <div className='flex flex-col h-4/6 mt-24 mb-12 mx-2 bg-white text-xxs shadow-md'>
                <img className='w-3/5 h-28' src="./icons/painter.jpg" />
                <p className='px-3 py-2 text-left text-gray'>
                    “I started working with Manus because I regurlarly had gaps in my schedule
                    and I also often develop some availability at short notice.
                    I wanted to find small jobs to fill those void periods.
                    After just about a couple weeks,
                    I saw that this was something I wanted to do permanently.”
                    </p>
                <div className='flex flex-row justify-between items-center px-3 py-2 mt-auto'>
                    <img className='w-3 h-3' src='./icons/painterLogo.svg' />
                    <h4>
                        Conrad, <span className='text-mediumBlue'>Painter in London</span>
                    </h4>
                </div>
            </div>
            <div className='flex flex-col min-w-min h-4/6 mt-24 mb-12 mr-6 bg-white text-xxs shadow-md'>
                <img className='w-3/5 h-28' src="./icons/carpenter.jpg" />
                <p className='px-3 py-2 text-left text-gray'>
                    “I started working with Manus because I regurlarly had gaps in my schedule
                    and I also often develop some availability at short notice.
                    I wanted to find small jobs to fill those void periods.
                    After just about a couple weeks,
                    I saw that this was something I wanted to do permanently.”
                    </p>
                <div className='flex flex-row justify-between items-center px-3 py-2 mt-auto'>
                    <img className='w-3 h-3' src='./icons/carpenterLogo.svg' />
                    <h4>
                        Olivia, <span className='text-mediumBlue'>Carpenter in Manchester</span>
                    </h4>
                </div>
            </div>

        </Carousel >
    )
}

export default WorkerCarousel