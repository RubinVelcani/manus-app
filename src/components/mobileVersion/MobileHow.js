import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import MobileMenuHome from './MobileMenuHome'

const MobileHow = ({ showMobileMenu, toggleMobileMenu }) => {

    // F O O T E R  N E E D S  T O  B E  A B O V E  L A S T  I M A G E

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
            <aside className={showMobileMenu ? 'block' : 'hidden'}>
                <MobileMenuHome showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />
            </aside>
            <section className={showMobileMenu ? 'hidden' : 'block'}>
                <div className='flex flex-col w-4/5 items-center text-center mx-auto'>
                    <div className='mt-7 pb-4'>
                        <h1 className='mb-3 ml-3 -mt-1 text-deepBlue text-4xl font-semibold'>How it works</h1>
                        <h3 className='text-lightBlue font-bold leading-5'>
                            If you’re looking to get a job done properly,
                            you want to find a trader you can trust to do a good job for fair price.
                        </h3>
                    </div>
                    <img alt='' src={images['greenBlueLines.svg'].default} />
                    <div className='flex flex-col items-center'>
                        <img alt='' className='mt-10 mb-6' src={images['officePlayer.png'].default} />
                        <h1 className='mb-4 text-mediumBlue text-lg font-bold'>Immediate Solutions</h1>
                        <p className='mb-10 text-gray text-sm leading-5 font-medium'>
                            Manus allows you to quickly find a tradesperson in your area
                            who can be trusted to provide a high standard of work. Easy!
                            </p>
                        <img alt='' className='mb-6' src={images['carpenterPlayer.png'].default} />
                        <Link to='/contact'>
                            <img alt='' className='absolute right-20 cursor-pointer' src={images['chatLogo.svg'].default} />
                        </Link>
                        <h1 className='mb-4 text-mediumBlue text-lg font-bold'>Immediate Solutions</h1>
                        <p className='text-gray text-sm leading-5 font-medium'>
                            Get quality work, all year round. Choose where and when you want to work
                            </p>
                    </div>
                </div>
                <div>
                    <div className='w-full relative z-40 flex flex-col h-96 -mb-28 pt-12 items-center text-center text-white bg-mediumBlue' style={{ clipPath: 'polygon(0 16%, 100% 5%, 100% 95%, 0 84%)' }}>
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
                    <img alt='' className='w-full z-30 relative -mb-10' src={images['mobileHowSmile.jpg'].default} />
                </div>
            </section>
        </main>
    )
}

export default MobileHow