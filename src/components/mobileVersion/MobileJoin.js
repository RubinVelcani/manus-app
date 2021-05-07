import React, { useLayoutEffect } from 'react'
import MobileForm from './mobileForm/MobileForm'
import MobileMenu from './MobileMenuHome'

const MobileJoin = ({ showMobileMenu, toggleMobileMenu }) => {

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
        <main className='bg-lightGray -mb-20 pb-20'>
            <aside className={showMobileMenu ? 'block' : 'hidden'}>
                <MobileMenu showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />
            </aside>
            <section className={showMobileMenu ? 'hidden' : 'block'}>
                <div className='flex flex-col w-4/5 items-center text-center mx-auto mb-6'>
                    <div className='mt-7 pb-4'>
                        <h1 className='mb-5 ml-3 -mt-1 text-deepBlue text-4xl font-semibold'>Become a Manus tradesman</h1>
                        <h3 className='text-lightBlue font-bold leading-5'>
                            Register online now providing the informations requested below.
                            We”ll get in touch with you shortly with the next steps
                        </h3>
                    </div>
                    <MobileForm />
                    <img alt='' className='mb-40' src={images['greenBlueLines.svg'].default} />
                </div>
            </section>
        </main>
    )
}
export default MobileJoin