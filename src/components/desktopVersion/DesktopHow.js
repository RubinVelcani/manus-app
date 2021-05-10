import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'

const DesktopHow = () => {

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
        <main className=''>
            <section className=''>
                <div className='h-28 pb-1.5 bg-mediumBlue'></div>
                <div className='w-4/5 max-w-screen-xl flex flex-col items-center text-center mx-auto mt-28 mb-28 xl:w-full'>
                    <div className='mb-12'>
                        <h1 className='mb-5 ml-3 -mt-1 text-mediumBlue text-4xl font-semibold'>How it works</h1>
                        <h3 className='w-2/3 text-gray font-semibold leading-5 mx-auto'>
                            If you’re looking to get a job done properly,
                            you want to find a trader you can trust to do a good job for fair price.
                        </h3>
                    </div>
                    <div className='flex flex-row items-center'>
                    <img alt='' className='w-36' src={images['greenBlueLines.svg'].default} />
                    <Link to='/contact'>
                                        <img alt='' className='absolute right-1/4 cursor-pointer -mt-5' src={images['chatLogo.svg'].default} />
                                    </Link>
                                    </div>
                    <div className='flex flex-row items-start justify-between mb-10 mt-4'>
                        <div className='w-1/2 flex flex-col'>
                            <img alt='' className='mb-6' src={images['officePlayer.png'].default} />
                            <h1 className='mb-4 text-mediumBlue text-lg font-bold'>Immediate Solutions</h1>
                            <p className='text-gray text-sm leading-5 font-medium'>
                                Manus allows you to quickly find a tradesperson in your area
                                who can be trusted to provide a high standard of work. Easy!
                            </p>
                        </div>
                        <div className='w-1/2 flex flex-col'>
                            <img alt='' className='mb-6' src={images['carpenterPlayer.png'].default} />
                            <h1 className='mb-4 text-mediumBlue text-lg font-bold'>Immediate Solutions</h1>
                            <p className='text-gray text-sm leading-5 font-medium'>
                                Get quality work, all year round. Choose where and when you want to work
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full max-w-screen-2xl flex flex-row items-end mx-auto -mb-24'>
                    <div className='w-10/12 z-20 -mr-32 pl-6 p-4 pb-20 pt-4 bg-lightBlue' style={{ clipPath: 'polygon(0 0, 86% 17%, 100% 100%, 0% 100%)' }}>
                        <div className='w-4/5 text-white pb-3 ml-8 mt-8 lg:ml-16 lg:pr-20 xl:2/3 xl:mx-auto'>
                            <div className='flex '>
                                <img alt='' className='absolute h-10' src={images['smallGreenDiagonalLine.svg'].default} />
                                <h1 className='mb-4 -mt-1 ml-4 text-4xl font-semibold'>
                                    Get started now!
                                    </h1>
                            </div>
                            <p className='w-4/5 mb-8 ml-4 text-sm leading-5 font-medium'>
                                Register online now with the city you’d like to
                                work in and the type of work you do.
                                We’ll get in touch with you shortly with the next steps.
                    </p>
                            <Link to='/join'>
                                <button className='w-2/3 bg-white rounded-full text-lightBlue font-semibold py-2 px-7 ml-4 focus:outline-none'>Register Online</button>
                            </Link>
                            <div className='w-max ml-4'>
                                <h4 className='text-xs text-underscoreBlue font-light mt-2'>Register now as a Tradesman on Manus</h4>
                                <img alt='' className='ml-auto' src={images['smallOrangeDiagonalLine.svg'].default} />
                            </div>
                        </div>
                    </div>
                    <img alt='' className='w-3/4 max-h-how z-30 -mb-10' src={images['desktopHowSmile.png'].default} />
                </div>
            </section>
        </main>
    )
}

export default DesktopHow