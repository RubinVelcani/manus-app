import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'

const DesktopVision = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    function importAll(r) {
        let images = {}
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); })
        return images
    }

    const images = importAll(require.context('../../icons', false, /\.(png|jpe?g|svg)$/))

    return (
        <main>
            <section className=''>
                <div className='bg-white'>
                    <div className='h-28 pb-1.5 bg-mediumBlue'></div>
                    <div className='flex flex-row'>
                        <img className='w-7/12 z-30 max-h-shape' style={{ clipPath: 'polygon(0 0, 100% 0, 90% 85%, 0% 100%)' }} src={images['visionCarpenter.jpg'].default} />
                        <div className='w-3/5 max-h-shape z-20 bg-lightBlue p-4 pl-32 pb-16 -mt-px -ml-28' style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 93%, 0 82%)' }}>
                            <div className='relative flex flex-col text-white xl:w-4/5'>
                                <div className='flex xl:mt-4 2xl:w-1/2'>
                                    <img className='absolute h-10' src={images['smallGreenDiagonalLine.svg'].default} />
                                    <h1 className='w-4/5 mb-6 ml-6 -mt-1 text-4xl font-semibold lg:mb-12'>
                                        Here to help
                                    </h1>
                                </div>
                                <p className='mb-5 text-sm w-4/5 leading-5 font-medium'>
                                    We offer fairly-priced home services to homeowners,
                                    tenants and property management companies across the UK,
                                    delivered by professional, local tradespeople.
                                    </p>
                            </div>
                            <div className='w-4/5'>
                                <Link to='/join'>
                                    <button className='bg-white rounded-full text-lightBlue font-semibold py-2 px-7 focus:outline-none'>Let's get started!</button>
                                </Link>
                                <div className=' w-max'>
                                    <h4 className='text-xs text-underscoreBlue font-light mt-2'>Register now as a Tradesman on Manus</h4>
                                    <img className='ml-auto' src={images['smallOrangeDiagonalLine.svg'].default} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-3/4 items-center text-center mx-auto mb-28'>
                    <div className='flex flex-col items-center pb-1 mb-24'>
                        <div className='w-max'>
                            <img className='w-full h-2 mb-16' src={images['greenBlueLines.svg'].default} />
                            <h1 className='mb-3 ml-3 -mt-1 text-deepBlue text-4xl font-semibold'>Our Vision</h1>
                        </div>
                        <h3 className='font-medium leading-5'>
                            Manus was founded by a construction specialist who understands first-hand the challenges
                            and limitations within the traditionals trades industry.
                        </h3>
                    </div>
                    <Link to='/contact'>
                        <img className='absolute right-20 cursor-pointer' src={images['chatLogo.svg'].default} />
                    </Link>
                    <div className='flex flex-row items-center'>
                        <img className='w-1/2 mb-6 mr-5' src={images['visionPhone1.jpg'].default} />
                        <div className='w-1/2 flex flex-col text-left ml-5'>
                            <h1 className='mb-4 text-mediumBlue text-lg font-bold'>Immediate Solutions</h1>
                            <p className='mb-10 text-gray text-sm leading-5 font-medium'>
                                Find a tradesmen for every job. From light fittings and loft conversions,
                                to leaky taps and a lick of paint. Choose from local tradespeople available in your area.
                                Contact details are shared only when you send a request. Find a tradesmen for every job.
                                From light fittings and loft conversions, to leaky taps and a lick of paint.
                                Choose from local tradespeople available in your area. Contact details are shared only when you send a request.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row-reverse items-center'>
                        <img className='w-1/2 mb-6 ml-5' src={images['visionPhone2.jpg'].default} />
                        <div className='w-1/2 flex flex-col text-right mr-5'>
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
                <div className='bg-lightGray'>
                    <div className='w-3/5 flex flex-col mx-auto text-center pt-14'>
                        <h1 className='mb-3 text-mediumBlue text-4xl font-semibold'>Manus is here to Revolutionise, Innovate and Disrupt the DIY Market.</h1>
                        <button className='w-1/2 mt-16 mb-3 mx-auto
                     py-4 text-white bg-mediumBlue rounded-full font-medium focus:outline-none cursor-pointer'>Notify me when the app is ready!</button>
                        <img className='mb-6 w-20 mx-auto' src={images['orangeLine.svg'].default} />
                    </div>
                </div>
            </section>
        </main >
    )
}

export default DesktopVision