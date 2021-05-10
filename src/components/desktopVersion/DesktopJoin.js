import React from 'react'
import { Link } from 'react-router-dom'
import DesktopForm from './desktopForm/DesktopForm'

const DesktopJoin = ({ showMobileMenu, toggleMobileMenu }) => {

    function importAll(r) {
        let images = {}
        r.keys().map((item, index) => images[item.replace('./', '')] = r(item))
        return images
    }

    const images = importAll(require.context('../../icons', false, /\.(png|jpe?g|svg)$/))

    return (
        <main className='bg-lightGray pb-32 -mb-32'>
            <section className=''>
                <div className='h-28 pb-1.5 bg-mediumBlue'></div>
                <div className='flex flex-col w-4/5 items-center text-center mx-auto mb-24'>
                    <div className='text-center mt-16'>
                        <h1 className='text-mediumBlue text-5xl font-bold mb-7 ml-3'>Become a Manus tradesman</h1>
                        <h3 className='w-4/5 text-gray font-lg font-bold leading-5 mx-auto mt-0.5'>
                            Register online now providing the informations requested below.
                            We”ll get in touch with you shortly with the next steps
                        </h3>
                        <div className='flex flex-row mt-5'>
                        <Link to='/contact'>
                                        <img alt='' className='absolute right-1/4 cursor-pointer' src={images['chatLogo.svg'].default} />
                                    </Link>
                                    </div>
                    </div>
                </div>
                <div className='w-4/5 max-w-screen-lg flex flex-col items-center text-xs text-gray rounded-3xl bg-white py-8 mx-auto 2xl:w-full'>
                    <DesktopForm />
                </div>
            </section>
        </main >
    )
}
export default DesktopJoin