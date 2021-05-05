import React from 'react'
import SwiperCore, { Scrollbar, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import CarpenterImage from '../../icons/carpenter.jpg'
import CarpenterLogo from '../../icons/carpenterLogo.svg'
import PainterImage from '../../icons/painter.jpg'
import PainterLogo from '../../icons/painterLogo.svg'

import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Scrollbar, Navigation]);

const WorkerCarousel = () => {

    function importAll(r) {
        let images = {}
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); })
        return images
    }

    const images = importAll(require.context('../../icons', false, /\.(png|jpe?g|svg)$/))

    return (
        <div className='w-full max-w-screen-lg mx-auto lg:w-4/5 xl:w-3/5'>
            <div className='flex flex-row items-start ml-6 mt-28'>
                <img className='h-14' src={images['smallGreenDiagonalLine.svg'].default} />
                <h1 className='ml-2 text-white text-4xl font-semibold'>Meet our Manus Tradesmen</h1>
                <img className='ml-auto mr-20' src={images['carouselNextLogo.svg'].default} />
            </div>
            <div className='block sm:hidden'>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={1.5}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className='w-4/5 flex flex-col h-4/6 mt-24 mb-12 mx-auto bg-white text-xxs shadow-md'>
                            <img className='h-28' src={CarpenterImage} />
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-4/5 flex flex-col h-4/6 mt-24 mb-12 mx-auto bg-white text-xxs shadow-md'>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-4/5 flex flex-col h-4/6 mt-24 mb-12 mx-auto bg-white text-xxs shadow-md'>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-4/5 flex flex-col min-w-min h-4/6 mt-24 mb-12 mx-auto bg-white text-xxs shadow-md'>
                            <img className='h-28' src={CarpenterImage} />
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-4/5 flex flex-col h-4/6 mt-24 mb-12 mx-auto bg-white text-xxs shadow-md'>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-4/5 flex flex-col min-w-min h-4/6 mt-24 mb-12 mx-auto bg-white text-xxs shadow-md'>
                            <img className='h-28' src={CarpenterImage} />
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-4/5 flex flex-col h-4/6 mt-24 mb-12 mx-auto bg-white text-xxs shadow-md'>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-4/5 flex flex-col min-w-min h-4/6 mt-24 mb-12 mx-auto bg-white text-xxs shadow-md'>
                            <img className='h-28' src={CarpenterImage} />
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
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='hidden sm:block lg:hidden'>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={2.5}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className='w-4/5 flex flex-col h-4/6 mt-24 mb-12 mx-auto bg-white text-xxs shadow-md'>
                            <img className='h-28' src={CarpenterImage} />
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-4/5 flex flex-col h-4/6 mt-24 mb-12 mx-auto bg-white text-xxs shadow-md'>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-4/5 flex flex-col h-4/6 mt-24 mb-12 mx-auto bg-white text-xxs shadow-md'>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-4/5 flex flex-col min-w-min h-4/6 mt-24 mb-12 mx-auto bg-white text-xxs shadow-md'>
                            <img className='h-28' src={CarpenterImage} />
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-4/5 flex flex-col h-4/6 mt-24 mb-12 mx-auto bg-white text-xxs shadow-md'>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-4/5 flex flex-col min-w-min h-4/6 mt-24 mb-12 mx-auto bg-white text-xxs shadow-md'>
                            <img className='h-28' src={CarpenterImage} />
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-4/5 flex flex-col h-4/6 mt-24 mb-12 mx-auto bg-white text-xxs shadow-md'>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-4/5 flex flex-col min-w-min h-4/6 mt-24 mb-12 mx-auto bg-white text-xxs shadow-md'>
                            <img className='h-28' src={CarpenterImage} />
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
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='hidden lg:block'>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={3}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className='w-4/5 flex flex-col h-4/6 mt-24 mb-12 mx-auto bg-white text-xxs shadow-md'>
                            <img className='h-28' src={CarpenterImage} />
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-4/5 flex flex-col h-4/6 mt-24 mb-12 mx-auto bg-white text-xxs shadow-md'>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-4/5 flex flex-col h-4/6 mt-24 mb-12 mx-auto bg-white text-xxs shadow-md'>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-4/5 flex flex-col min-w-min h-4/6 mt-24 mb-12 mx-auto bg-white text-xxs shadow-md'>
                            <img className='h-28' src={CarpenterImage} />
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-4/5 flex flex-col h-4/6 mt-24 mb-12 mx-auto bg-white text-xxs shadow-md'>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-4/5 flex flex-col min-w-min h-4/6 mt-24 mb-12 mx-auto bg-white text-xxs shadow-md'>
                            <img className='h-28' src={CarpenterImage} />
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-4/5 flex flex-col h-4/6 mt-24 mb-12 mx-auto bg-white text-xxs shadow-md'>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-4/5 flex flex-col min-w-min h-4/6 mt-24 mb-12 mx-auto bg-white text-xxs shadow-md'>
                            <img className='h-28' src={CarpenterImage} />
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
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    )
}

export default WorkerCarousel