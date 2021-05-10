import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import PhoneCarousel from '../helpers/PhoneCarousel'
import WorkerCarousel from '../helpers/WorkerCarousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

// TO-DO list
//  Profile form to store the data inside the fields
//  Registration form to store the data inside the Account Details component
//  On both Homepages, the arrow button should slide the swiper 1 page to the right
//  
//
//
//
//

const DesktopHome = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    function importAll(r) {
        let images = {}
        r.keys().map((item, index) => images[item.replace('./', '')] = r(item))
        return images
    }

    const images = importAll(require.context('../../icons', false, /\.(png|jpe?g|svg)$/))

    return (
        <main>
            <section className='-mb-32 pb-32'>
                <img alt='' className='w-full absolute' src={images['mobilePhonesBackground.svg'].default} />
                <div className='max-w-screen-xl flex flex-row justify-around z-20 text-white pt-36 mb-20 mx-auto'>
                    <img alt='' className='w-1/2 relative pt-12' src={images['desktop3Phones.png'].default} />
                    <div className='w-1/2 relative mt-10 ml-8 pb-1 lg:mt-20'>
                        <div className='flex'>
                            <img alt='' className='h-20' src={images['smallGreenDiagonalLine.svg'].default} />
                            <h1 className='mb-2 ml-5 -mt-1 text-3xl font-semibold lg:mb-12 lg:text-5xl'>
                                On-Demand Local Tradesmen
                            </h1>
                        </div>
                        <h3 className='w-4/5 mb-5 ml-5 font-semibold text-lg leading-5 lg:w-2/3 lg:mb-20'>
                            Get those everyday jobs done fast. One tap and a tradesman comes directly to you.
                            From broken boilers and burst pipes, to leaks and blocked drains...
                        </h3>
                        <input className='w-2/3 rounded-3xl ring-1 ring-mediumGray ml-5 mb-4 py-2 px-4 lg:mb-8' type="text" placeholder='Notify me when the app is ready!' />
                        <div className='flex flex-row justify-evenly items-center ml-5 mb-10 lg:w-2/3 lg:justify-around lg:mb-20'>
                            <h4 className='font-semibold'>Coming soon</h4>
                            <img alt='' className='cursor-pointer' src={images['comingApple.svg'].default} />
                            <img alt='' className='cursor-pointer' src={images['comingGoogle.svg'].default} />
                        </div>
                    </div>
                </div>
                <div className='w-full relative bg-white'>
                    <div className='w-4/5 max-w-screen-xl flex flex-col z-10 items-center text-center pt-20 mt-15 mx-auto lg:mt-30 xl:mt-40'>
                        <div className='flex flex-row items-center'>
                        <img alt='' className='w-56' src={images['greenBlueLines.svg'].default} />
                        <Link to='/contact'>
                                        <img alt='' className='absolute right-1/4 cursor-pointer -mt-5' src={images['chatLogo.svg'].default} />
                                    </Link>
                                    </div>
                        <div className='flex flex-col items-center'>
                            <h1 className='mb-5 text-mediumBlue text-5xl font-semibold mt-14'>Well qualified &amp; Vetted Tradesmen</h1>
                            <p className='text-gray font-semibold leading-5 w-4/5'>
                                It’s difficult finding a tradesman you can trust.
                                Manus on-demand platform offers fully vetted tradesmen within your vocal vicinity,
                                meanaing you can choose the right local person for your project with confidence.
                        </p>
                            <div className='w-full flex flex-row items-center'>
                                <div className='w-1/2 '>
                                    <PhoneCarousel />
                                </div>
                                <div className='w-1/2 flex flex-col items-start text-left ml-10'>
                                    <div className='mb-3.5'>
                                        <img alt='' className='w-7 inline-block' src={images['magnifyingGlassLogo.svg'].default} />
                                        <h1 className='inline-block text-mediumBlue text-2xl font-bold ml-4'>Find a Tradesman</h1>
                                    </div>
                                    <p className='mb-14 text-gray text-sm leading-5 font-medium lg:w-96'>
                                        Find a tradesmen for every job. From light fittings and loft conversions,
                                        to leaky taps and a lick of paint. Choose from local tradespeople available in your area.
                                        Contact details are shared only when you send a request.
                            </p>
                                    <div className='mb-3.5 lg:w-96'>
                                        <img alt='' className='w-7 inline-block -mt-2' src={images['starLogo.svg'].default} />
                                        <h1 className='inline-block text-mediumBlue text-2xl font-bold ml-4'>Rate and Review</h1>
                                    </div>
                                    <p className='text-gray text-sm leading-5 font-medium lg:w-96'>
                                        After your project is successfully completed,
                                        you can leave a review for your tradesmen to let others know the quality of work done by the trader.
                                        This review helps you and future Manu’s users.
                                        It also encourages a continued high standard and helps others to find tradespeople they can trust.
                            </p>
                                    <div className='w-full lg:w-96'>
                                        <button className='w-full mt-16 mb-3
                                py-4 text-white bg-mediumBlue rounded-full font-medium focus:outline-none cursor-pointer'>Notify me when the app is ready!</button>
                                        <img alt='' className='mb-6 mx-auto' src={images['orangeLine.svg'].default} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full max-w-screen-2xl flex flex-row items-center mx-auto mt-20'>
                        <div className='w-4/5 h-sideway-phone z-30 flex flex-col items-center text-white text-center bg-mediumBlue pt-12 -mr-28 xl:z-20' style={{ clipPath: "polygon(0 0, 97% 11%, 100% 83%, 0 100%)" }}>
                            <div className='w-3/4 flex flex-col text-left xl:w-1/2'>
                                <div className='flex flex-row items-start mt-7'>
                                    <img alt='' className='h-16' src={images['smallGreenDiagonalLine.svg'].default} />
                                    <h1 className='text-3xl font-semibold mb-2 ml-2 mr-auto lg:text-4xl xl:mb-8'>Want extra work?</h1>
                                </div>
                                <p className='w-4/5 mb-5 text-sm leading-5 font-medium ml-2 lg:mb-14'>
                                    Are you a tradesperson looking for a work?
                                    Let us connect you to clients in your area!
                                    Whether you’re plumber, an electrician,
                                    a painter, a carpenter or a roofer, we have jobs for you!
                    </p>
                                <Link to='/join'>
                                    <button className='bg-white rounded-full text-lightBlue font-semibold py-2 px-7 ml-2 mr-auto focus:outline-none'>Let's get started!</button>
                                </Link>
                                <div className='mr-auto'>
                                    <h4 className='text-xs font-light ml-2 mt-2'>Register now as a Tradesman on Manus</h4>
                                    <img alt='' className='ml-auto' src={images['smallOrangeDiagonalLine.svg'].default} />
                                </div>
                            </div>
                        </div>
                        <img alt='' className='w-auto min-w-max left-0 right-0 absolute h-sideway-phone z-40 mx-auto' src={images['sidewayPhone.png'].default} />
                        <img alt='' className='w-7/12 min-h-smiler z-20 xl:z-30 xl:w-1/2' src={images['smiler.jpg'].default} style={{ clipPath: "polygon(0 15%, 100% 0, 100% 92%, 0 85%)" }} />
                    </div>
                    <div className='w-10/12 max-w-screen-xl relative flex flex-col items-center text-center mx-auto mt-16'>
                        <h1 className='text-mediumBlue text-4xl font-semibold mb-8'>Make Money When You Want</h1>
                        <p className='w-2/3 text-gray text-xl leading-5 font-semibold mb-20'>
                            There’s plenty of local work, but finding it is easier said than done.
                            On Manus, you set a custom working area
                            so every lead you receive is exatly where you want to work
                    </p>
                        <div className='flex flex-row justify-around text-mediumBlue text-xl font-semibold mb-32'>
                            <div className='w-1/4 flex flex-col items-center'>
                                <img alt='' src={images['scheduleLogo.svg'].default} />
                                <h1 className=''>Set your own schedule</h1>
                                <p className='text-gray  text-sm leading-5 font-medium mt-3'>
                                    Excellent to fill the gaps between jobs or because of cancellations.
                                    You work on the Manus app anytime, day or night.
                                    You’ve got complete flexibility to set your schedule around your life.
                    </p>
                            </div>
                            <div className='w-1/4 flex flex-col items-center'>
                                <img alt='' src={images['moneyLogo.svg'].default} />
                                <h1 className=''>Make money on your terms</h1>
                                <p className='text-gray text-sm leading-5 font-medium mt-3'>
                                    Find homeowners in your local area that are looking for a tradesman.
                                    Only choose the jobs that suit your skills and preferences!
                                    Once it’s all complete, the homeowner can rate you on quality, reliability and value.
                                    Get some reviews under your belt to grow the reputation you need to win bigger projects.
                    </p>
                            </div>
                            <div className='w-1/4 flex flex-col items-center'>
                                <img alt='' src={images['businessLogo.svg'].default} />
                                <h1 className=''>Make your business shine</h1>
                                <p className='text-gray text-sm leading-5 font-medium mt-3'>
                                    Get your own profile page where you can showcase your business, skills and all the reviews you get.
                                    This is like a mini website that makes your business really shine.
                                    It appears in Google searches too, so it is a great way to advertise yourself.
                    </p>
                            </div>
                        </div>
                        <Link to='/join'>
                            <button className='mb-3 py-4 px-6 text-white bg-mediumBlue rounded-full focus:outline-none'>Become a Manus Tradesman</button>
                        </Link>
                        <img alt='' src={images['orangeLine.svg'].default} />
                    </div>
                    <div className='w-full max-w-screen-2xl bg-carousel-background bg-cover pt-10 mx-auto'>
                        <WorkerCarousel />
                    </div>
                    <div className='flex flex-col w-4/5 items-center text-center mx-auto mt-36 mb-20'>
                        <h1 className='mb-4 text-mediumBlue text-4xl font-semibold'>It's easy to Get Started</h1>
                        <p className='w-2/3 mb-10 text-gray leading-5 font-semibold'>
                            The Manus offering is provided as a two-part mobile app;
                            one for consumers, the other for traders professionals.
                            Through the Manus mobile app,
                            we simplify and bridge the gap between availability of tradesman
                            and urgency of consumer’s DIY tasks, 24/7 and 365 years
                        </p>
                        <Link to='/join'>
                            <button className=' mb-3
                     py-4 px-10 text-white bg-mediumBlue rounded-full font-semibold focus:outline-none'>Register online now</button>
                        </Link>
                        <img alt='' src={images['orangeLine.svg'].default} />
                    </div>
                </div>
            </section>
        </main >
    )
}

export default DesktopHome