import React, { useState } from 'react'
import MobileMenu from './MobileMenu'
import PhoneCarousel from '../helpers/PhoneCarousel'
import WorkerCarousel from '../helpers/WorkerCarousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Home = ({ showMobileMenu, toggleMobileMenu }) => {


    return (
        <main>
            <aside className={showMobileMenu ? 'block' : 'hidden'}>
                <MobileMenu />
            </aside>
            <section className={showMobileMenu ? 'hidden' : 'block'}>
                <img className='absolute w-full' src='./icons/mobilePhonesBackground.svg' />
                <img className='relative w-full pt-12' src='./icons/mobile3Phones.png' />
                <div className='flex flex-col w-4/5 items-center text-center mx-auto'>
                    <div className='flex mt-5'>
                        <img src='./icons/mobileAppleLogo.svg' />
                        <span className='ml-2 text-lightBlue text-xxs font-bold'>Comming soon on the Apple Store</span>
                    </div>
                    <img className='mt-5' src='./icons/lines/greenBlueLines.svg' />
                    <div className='mt-7 pb-1'>
                        <div className='flex'>
                            <h1 className='mb-3 ml-3 -mt-1 text-deepBlue text-4xl font-semibold'> <img className='absolute' src='./icons/lines/smallGreenDiagonalLine.svg' />On-Demand Local Tradesment
                        </h1>
                        </div>
                        <h3 className='text-lightBlue font-bold leading-5'>
                            Get those everyday jobs done fast. One tap and a tradesman comes directly to you.
                            From broken boilers and burst pipes, to leaks and blocked drains...
                        </h3>
                    </div>
                    <button className='mt-20 mb-3
                            py-4 px-20 text-white bg-lightBlue font-bold rounded-full'>Send</button>
                    <img src='./icons/lines/smallOrangeLine.svg' />
                    <div>
                        <img className='absolute right-5' src='./icons/chatLogo.svg' />
                    </div>
                    <div className='flex flex-col items-center'>
                        <h1 className='mb-5 text-deepBlue text-4xl font-semibold mt-8'>Well qualified &amp; Vetted Tradesmen</h1>
                        <p className='text-lightBlue font-bold leading-5'>
                            It’s difficult finding a tradesman you can trust.
                            Manus on-demand platform offers fully vetted tradesmen within your vocal vicinity,
                            meanaing you can choose the right local person for your project with confidence.
                        </p>
                        <PhoneCarousel />
                        <img className='mt-10 mb-6' src='./icons/magnifyingGlassLogo.svg' />
                        <h1 className='mb-4 text-mediumBlue text-lg font-bold'>Find a Tradesman</h1>
                        <p className='mb-10 text-gray text-sm leading-5 font-medium'>
                            Find a tradesmen for every job. From light fittings and loft conversions,
                            to leaky taps and a lick of paint. Choose from local tradespeople available in your area.
                            Contact details are shared only when you send a request.
                            </p>
                        <img className='mb-6' src='./icons/starLogo.svg' />
                        <h1 className='mb-4 text-mediumBlue text-lg font-bold'>Rate and Review</h1>
                        <p className='text-gray text-sm leading-5 font-medium'>
                            After your project is successfully completed,
                            you can leave a review for your tradesmen to let others know the quality of work done by the trader.
                            This review helps you and future Manu’s users.
                            It also encourages a continued high standard and helps others to find tradespeople they can trust.
                            </p>
                        <button className='w-full mt-16 mb-3
                     py-4 text-white bg-mediumBlue rounded-full font-medium'>Notify me when the app is ready!</button>
                        <img className='mb-6' src='./icons/lines/orangeLine.svg' />
                    </div>
                </div>
                <img className='absolute w-full' src='./icons/middlePicture.svg' />
                <div className='relative flex flex-col mx-9 mt-64 items-center text-white text-center'>
                    <h1 className='text-4xl font-semibold mb-2 top-1/2 left-1/2'>Want extra work?</h1>
                    <p className='mb-5 text-sm leading-5 font-medium'>
                        Are you a tradesperson looking for a work?
                        Let us cinnect you to clients in your area!
                        Whether you’re plumber, an electrician,
                        a painter, a carpenter or a roofer, we have jobs for you!
                    </p>
                    <button className='bg-white rounded-full text-lightBlue font-semibold py-2 px-7'>Let's get started!</button>
                    <div>
                        <h4 className='text-xs font-light mt-2'>Register now as a Tradesman on Manus</h4>
                        <img className='ml-auto' src='./icons/lines/smallOrangeDiagonalLine.svg' />
                    </div>
                </div>
                <div className='flex flex-col w-4/5 items-center text-center mx-auto mt-20'>
                    <h1 className='text-mediumBlue text-4xl font-semibold mb-3'>Make Money When You Want</h1>
                    <p className='text-mediumBlue text-sm leading-5 font-semibold mb-6'>
                        There’s plenty of local work, but finding it is easier said than done.
                        On Manus, you set a custom working area
                        so every lead you receive is exatly where you want to work
                    </p>
                    <img src='./icons/scheduleLogo.svg' />
                    <h1 className='mb-3 text-mediumBlue text-xl font-semibold'>Set your own schedule</h1>
                    <p className='mb-10 text-gray text-sm leading-5 font-medium'>
                        Excellent to fill the gaps between jobs or because of cancellations.
                        You work on the Manus app anytime, day or night.
                        You’ve got complete flexibility to set your schedule around your life.
                    </p>
                    <img src='./icons/moneyLogo.svg' />
                    <h1 className='mb-3 text-mediumBlue text-xl font-semibold'>Make money on your terms</h1>
                    <p className='mb-10 text-gray text-sm leading-5 font-medium'>
                        Find homeowners in your local area that are looking for a tradesman.
                        Only choose the jobs that suit your skills and preferences!
                        Once it’s all complete, the homeowner can rate you on quality, reliability and value.
                        Get some reviews under your belt to grow the reputation you need to win bigger projects.
                    </p>
                    <img src='./icons/businessLogo.svg' />
                    <h1 className='mb-3 text-mediumBlue text-xl font-semibold'>Make your business shine</h1>
                    <p className='mb-12 text-gray text-sm leading-5 font-medium'>
                        Get your own profile page where you can showcase your business, skills and all the reviews you get.
                        This is like a mini website that makes your business really shine.
                        It appears in Google searches too, so it is a great way to advertise yourself.
                    </p>
                    <button className='mb-3 py-4 px-6 text-white bg-mediumBlue rounded-full'>Become a Manus Tradesman</button>
                    <img src='./icons/lines/orangeLine.svg' />
                    <h1 className='mt-16 mb-8 text-mediumBlue text-4xl font-semibold'>Meet our Manus Tradesman</h1>
                </div>
                <div className='w-full h-100 mb-12'>
                    <img className='absolute w-full' src='./icons/carouselBackground.svg' />
                    <WorkerCarousel />
                </div>
                <div className='flex flex-col w-4/5 items-center text-center mx-auto mb-8'>
                    <h1 className='mb-4 text-mediumBlue text-4xl font-semibold'>It's easy to Get Started</h1>
                    <p className='mb-8 text-mediumBlue leading-5 font-semibold'>
                        The Manus offering is provided as a two-part mobile app;
                        one for consumers, the other for traders professionals.
                        Through the Manus mobile app,
                        we simplify and bridge the gap between availability of tradesman
                        and urgency of consumer’s DIY tasks, 24/7 and 365 years
                        </p>
                    <button className=' mb-3
                     py-4 px-10 text-white bg-mediumBlue rounded-full font-semibold'>Register online now</button>
                    <img src='./icons/lines/orangeLine.svg' />
                </div>
            </section>
        </main>
    )
}

export default Home