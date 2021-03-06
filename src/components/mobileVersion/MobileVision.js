import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import MobileMenuHome from './MobileMenuHome'

const MobileVision = ({ showMobileMenu, toggleMobileMenu }) => {

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
        <main className='bg-lightGray'>
            <aside className={showMobileMenu ? 'block' : 'hidden'}>
                <MobileMenuHome showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />
            </aside>
            <section className={showMobileMenu ? 'hidden' : 'block'}>
                <div className='bg-white pb-7'>
                    <img alt='' className='w-full' src={images['visionCarpenter.jpg'].default} />
                    <div className='w-full flex flex-col h-96 -mt-24 pt-12 items-center text-center text-white bg-mediumBlue' style={{ clipPath: 'polygon(0 16%, 100% 5%, 100% 95%, 0 84%)' }}>
                        <h1 className='text-4xl w-4/5 font-semibold mb-2 mt-7'>Here to help</h1>
                        <p className='mb-5 text-sm w-4/5 leading-5 font-medium'>
                            We offer fairly-priced home services to homeowners,
                            tenants and property management companies across the UK,
                            delivered by professional, local tradespeople.
                    </p>
                        <Link to='/join'>
                            <button className='bg-white rounded-full text-lightBlue font-semibold py-2 px-7 focus:outline-none'>Let's get started!</button>
                        </Link>
                        <div>
                            <h4 className='text-xs font-light mt-2'>Register now as a Tradesman on Manus</h4>
                            <img alt='' className='ml-auto' src={images['smallOrangeDiagonalLine.svg'].default} />
                        </div>
                    </div>
                    <div className='flex flex-col w-4/5 items-center text-center mx-auto'>
                        <div className='flex flex-row'>
                        <img alt='' src={images['greenBlueLines.svg'].default} />
                        <Link to='/contact'>
                            <img alt='' className='absolute right-10 cursor-pointer -mt-5' src={images['chatLogo.svg'].default} />
                        </Link>
                        </div>
                        <div className='mt-7 pb-1'>
                            <h1 className='mb-3 ml-3 -mt-1 text-deepBlue text-4xl font-semibold'>Our Vision</h1>
                            <h3 className='text-lightBlue font-bold leading-5'>
                                Manus was founded by a construction specialist who understands first-hand the challenges
                                and limitations within the traditionals trades industry.
                        </h3>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img alt='' className='mt-10 mb-6' src={images['visionPhone1.jpg'].default} />
                            <h1 className='mb-4 text-mediumBlue text-lg font-bold'>Immediate Solutions</h1>
                            <p className='mb-10 text-gray text-sm leading-5 font-medium'>
                                Find a tradesmen for every job. From light fittings and loft conversions,
                                to leaky taps and a lick of paint. Choose from local tradespeople available in your area.
                                Contact details are shared only when you send a request. Find a tradesmen for every job.
                                From light fittings and loft conversions, to leaky taps and a lick of paint.
                                Choose from local tradespeople available in your area. Contact details are shared only when you send a request.
                            </p>
                            <img alt='' className='mb-6' src={images['visionPhone2.jpg'].default} />
                            <h1 className='mb-4 text-mediumBlue text-lg font-bold'>An Innovative Platform</h1>
                            <p className='text-gray text-sm leading-5 font-medium'>
                                Find a tradesmen for every job. From light fittings and loft conversions, to leaky taps and a lick of paint.
                                Choose from local tradespeople available in your area. Contact details are shared only when you send a request.
                                Find a tradesmen for every job. From light fittings and loft conversions, to leaky taps and a lick of paint.
                                Choose from local tradespeople available in your area. Contact details are shared only when you send a request.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col mx-auto text-center w-4/5'>
                        <h1 className='mb-3 mt-8 text-mediumBlue text-4xl font-semibold'>Manus is here to Revolutionise, Innovate and Disrupt the DIY Market.</h1>
                        <button className='w-full mt-16 mb-3
                     py-4 text-white bg-mediumBlue rounded-full font-medium'>Notify me when the app is ready!</button>
                        <img alt='' className='w-20 mx-auto mb-60' src={images['orangeLine.svg'].default} />
                    </div>
                </div>
            </section>
        </main >
    )
}

export default MobileVision