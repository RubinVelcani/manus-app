import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

import PhoneScreen from '../../icons/carouselPhone.png'

SwiperCore.use([Pagination, Autoplay])

const PhoneCarousel = () => {
    return (
        <div className='max-w-sm mx-auto md:mr-10'>
            <Swiper
                spaceBetween={1}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                <SwiperSlide><img alt='' className='mx-auto' src={PhoneScreen} /></SwiperSlide>
                <SwiperSlide><img alt='' className='mx-auto' src={PhoneScreen} /></SwiperSlide>
                <SwiperSlide><img alt='' className='mx-auto' src={PhoneScreen} /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default PhoneCarousel

