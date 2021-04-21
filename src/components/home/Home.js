import React from 'react'
import PhoneCarousel from './PhoneCarousel'
import WorkerCarousel from './WorkerCarousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
    return (
        <main>
            <section>
                <img className='absolute' src='./icons/mobilePhonesBackground.svg' />
                <img className='relative pt-12' src='./icons/mobile3Phones.png' />
                <div className='flex flex-col w-4/5 items-center text-center mx-auto'>
                    <div className='flex mt-5'>
                        <img src='./icons/mobileAppleLogo.svg' />
                        <span className='ml-2 text-lightBlue'>Comming soon on the Apple Store</span>
                    </div>
                    <img className='mt-5' src='./icons/lines/greenBlueLines.svg' />
                    <div className='mt-9 pb-1'>
                        <div className='flex items-center'>
                            <img src='./icons/lines/smallGreenDiagonalLine.svg' />
                            <h1 className='mb-5 text-deepBlue'>
                                On-Demand Local Tradesment
                        </h1>
                        </div>
                        <h3 className='mt-5 text-mediumBlue'>
                            Get those everyday jobs done fast. One tap and a tradesman comes directly to you.
                            From broken boilers and burst pipes, to leaks and blocked drains...
                        </h3>
                    </div>
                    <button className='mt-20 mb-3
                     py-4 px-20 text-white bg-lightBlue rounded-full'>Send</button>
                    <img src='./icons/lines/smallOrangeLine.svg' />
                    <div>
                        <img className='absolute right-5' src='./icons/chatLogo.svg' />
                    </div>
                    <div className='flex flex-col items-center'>
                        <h1 className='mb-5 text-deepBlue'>Well qualified &amp; Vetted Tradesmen</h1>
                        <p className='text-lightBlue'>
                            It’s difficult finding a tradesman you can trust.
                            Manus on-demand platform offers fully vetted tradesmen within your vocal vicinity,
                            meanaing you can choose the right local person for your project with confidence.
                        </p>
                        <PhoneCarousel />
                        <img className='mt-10 mb-6' src='./icons/magnifyingGlassLogo.svg' />
                        <h1 className='mb-4 text-mediumBlue'>Find a Tradesman</h1>
                        <p className='mb-10 text-gray'>
                            Find a tradesmen for every job. From light fittings and loft conversions,
                            to leaky taps and a lick of paint. Choose from local tradespeople available in your area.
                            Contact details are shared only when you send a request.
                            </p>
                        <img className='mb-6' src='./icons/starLogo.svg' />
                        <h1 className='mb-4 text-mediumBlue'>Rate and Review</h1>
                        <p className='text-gray'>
                            After your project is successfully completed,
                            you can leave a review for your tradesmen to let others know the quality of work done by the trader.
                            This review helps you and future Manu’s users.
                            It also encourages a continued high standard and helps others to find tradespeople they can trust.
                            </p>
                        <button className='mt-16 mb-3
                     py-4 px-6 text-white bg-mediumBlue rounded-full'>Notify me when the app is ready!</button>
                        <img src='./icons/lines/orangeLine.svg' />
                    </div>

                </div>
                <img className='absolute' src='./icons/middlePicture.svg' />
                <div className='relative flex flex-col mx-9 mt-64 items-center text-white'>
                    <h1 className='mb-2'>Want extra work?</h1>
                    <p className='mb-5'>
                        Are you a tradesperson looking for a work?
                        Let us cinnect you to clients in your area!
                        Whether you’re plumber, an electrician,
                        a painter, a carpenter or a roofer, we have jobs for you!
                    </p>
                    <button className='bg-white rounded-full text-lightBlue py-4 px-8'>Let's get started!</button>
                    <h4>Register now as a Tradesman on Manus</h4>
                    <img className='ml-auto' src='./icons/lines/smallOrangeDiagonalLine.svg' />
                </div>
                <div className='flex flex-col w-4/5 items-center text-center mx-auto mt-10'>
                    <h1 className='text-mediumBlue'>Make Money When You Want</h1>
                    <p className='text-mediumBlue'>
                        There’s plenty of local work, but finding it is easier said than done.
                        On Manus, you set a custom working area
                        so every lead you receive is exatly where you want to work
                    </p>
                    <img src='./icons/scheduleLogo.svg' />
                    <h1 className='mb-3 text-mediumBlue'>Set your own schedule</h1>
                    <p className='mb-8 text-gray'>
                        Excellent to fill the gaps between jobs or because of cancellations.
                        You work on the Manus app anytime, day or night.
                        You’ve got complete flexibility to set your schedule around your life.
                    </p>
                    <img src='./icons/moneyLogo.svg' />
                    <h1 className='mb-3 mt-5 text-mediumBlue'>Make money on your terms</h1>
                    <p className='mb-8 text-gray'>
                        Find homeowners in your local area that are looking for a tradesman.
                        Only choose the jobs that suit your skills and preferences!
                        Once it’s all complete, the homeowner can rate you on quality, reliability and value.
                        Get some reviews under your belt to grow the reputation you need to win bigger projects.
                    </p>
                    <img src='./icons/businessLogo.svg' />
                    <h1 className='mb-3 mt-5 text-mediumBlue'>Make your business shine</h1>
                    <p className='mb-8 text-gray'>
                        Get your own profile page where you can showcase your business, skills and all the reviews you get.
                        This is like a mini website that makes your business really shine.
                        It appears in Google searches too, so it is a great way to advertise yourself.
                    </p>
                    <button className='mt-6 mb-3
                     py-4 px-6 text-white bg-mediumBlue rounded-full'>Become a Manus Tradesman</button>
                    <img src='./icons/lines/orangeLine.svg' />
                    <h1 className='mt-16 mb-8 text-mediumBlue'>Meet our Manus Tradesman</h1>
                </div>
                <div className='w-full h-100 mb-12'>
                    <img className='absolute' src='./icons/carouselBackground.svg' />
                    <WorkerCarousel />
                </div>
                <div className='flex flex-col w-4/5 items-center text-center mx-auto mb-8'>
                    <h1 className='mb-4 text-mediumBlue'>It's easy to Get Started</h1>
                    <p className='mb-8 text-mediumBlue'>
                        The Manus offering is provided as a two-part mobile app;
                        one for consumers, the other for traders professionals.
                        Through the Manus mobile app,
                        we simplify and bridge the gap between availability of tradesman
                        and urgency of consumer’s DIY tasks, 24/7 and 365 years
                        </p>
                    <button className=' mb-3
                     py-4 px-6 text-white bg-mediumBlue rounded-full'>Notify me when the app is ready!</button>
                    <img src='./icons/lines/orangeLine.svg' />
                </div>
            </section>
        </main>
    )
}

export default Home