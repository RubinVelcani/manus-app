import React, { useState, useLayoutEffect } from 'react'
import MobileForm from './mobileForm/MobileForm'
import MobileMenu from './MobileMenuHome'
import style from './MobileStyle.module.css'

const MobileJoin = ({ showMobileMenu, toggleMobileMenu }) => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    function importAll(r) {
        let images = {}
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); })
        return images
    }

    const images = importAll(require.context('../../icons', false, /\.(png|jpe?g|svg)$/))

    const [pageOne, setPageOne] = useState(false)
    const [pageTwo, setPageTwo] = useState(false)
    const [pageThree, setPageThree] = useState(false)

    function togglePageOne() {
        setPageOne(!pageOne)
        setPageTwo(false)
        setPageThree(false)
    }

    function togglePageTwo() {
        setPageOne(false)
        setPageTwo(!pageTwo)
        setPageThree(false)
    }

    function togglePageThree() {
        setPageOne(false)
        setPageTwo(false)
        setPageThree(!pageThree)
    }

    return (
        <main className='bg-lightGray'>
            <section className={showMobileMenu ? 'hidden' : 'block'}>
                <aside className={showMobileMenu ? 'block' : 'hidden'}>
                    <MobileMenu />
                </aside>
                <div className='flex flex-col w-4/5 items-center text-center mx-auto mb-6'>
                    <div className='mt-7 pb-4'>
                        <h1 className='mb-3 ml-3 -mt-1 text-deepBlue text-4xl font-semibold'>Become a Manus tradesman</h1>
                        <h3 className='text-lightBlue font-bold leading-5'>
                            Register online now providing the informations requested below.
                            We”ll get in touch with you shortly with the next steps
                        </h3>
                    </div>
                    <MobileForm pageOne={pageOne} togglePageOne={togglePageOne} pageTwo={pageTwo} togglePageTwo={togglePageTwo} pageThree={pageThree} togglePageThree={togglePageThree} />
                    <img src={images['greenBlueLines.svg'].default} />
                </div>
            </section>
        </main>
    )
}
export default MobileJoin