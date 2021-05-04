import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import style from './DesktopStyle.module.css'

const DesktopHow = ({ }) => {

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
        <main className=''>
            <section className=''>
                <div className='h-28 pb-1.5 bg-mediumBlue'></div>
                <div className='flex flex-col w-4/5 items-center text-center mx-auto mt-28'>
                    <div className='mb-12'>
                        <h1 className='mb-5 ml-3 -mt-1 text-mediumBlue text-4xl font-semibold'>How it works</h1>
                        <h3 className='text-gray font-semibold leading-5'>
                            If you’re looking to get a job done properly,
                            you want to find a trader you can trust to do a good job for fair price.
                        </h3>
                    </div>
                    <Link to='/contact'>
                        <img className='absolute right-20 cursor-pointer' src={images['chatLogo.svg'].default} />
                    </Link>
                    <img className='w-36' src={images['greenBlueLines.svg'].default} />
                    <div className='flex flex-row items-start justify-between mb-10 mt-4'>
                        <div className='w-1/2 flex flex-col'>
                            <img className='mb-6' src={images['officePlayer.png'].default} />
                            <h1 className='mb-4 text-mediumBlue text-lg font-bold'>Immediate Solutions</h1>
                            <p className='text-gray text-sm leading-5 font-medium'>
                                Manus allows you to quickly find a tradesperson in your area
                                who can be trusted to provide a high standard of work. Easy!
                            </p>
                        </div>
                        <div className='w-1/2 flex flex-col'>
                            <img className='mb-6' src={images['carpenterPlayer.png'].default} />
                            <h1 className='mb-4 text-mediumBlue text-lg font-bold'>Immediate Solutions</h1>
                            <p className='text-gray text-sm leading-5 font-medium'>
                                Get quality work, all year round. Choose where and when you want to work
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row items-end'>
                    <div className={style.blueShapeHow}>
                        <div className='w-1/2 text-white pb-3 ml-8 mt-4 lg:ml-16 lg:w-2/5 xl:ml-24 xl:w-1/3'>
                            <div className='flex '>
                                <img className='absolute h-10' src={images['smallGreenDiagonalLine.svg'].default} />
                                <h1 className='mb-4 -mt-1 ml-4 text-4xl font-semibold'>
                                    Get started now!
                                    </h1>
                            </div>
                            <p className='mb-8 ml-4 text-sm w-4/5 leading-5 font-medium'>
                                Register online now with the city you’d like to
                                work in and the type of work you do.
                                We’ll get in touch with you shortly with the next steps.
                    </p>
                            <button className='w-1/2 bg-white rounded-full text-lightBlue font-semibold py-2 px-7 ml-4'>Register Online</button>
                            <div className='w-max ml-4'>
                                <h4 className='text-xs text-underscoreBlue font-light mt-2'>Register now as a Tradesman on Manus</h4>
                                <img className='ml-auto' src={images['smallOrangeDiagonalLine.svg'].default} />
                            </div>
                        </div>
                    </div>
                    <img className={style.howMechanic} src={images['desktopHowSmile.png'].default} />
                </div>
            </section>
        </main>
    )
}

export default DesktopHow