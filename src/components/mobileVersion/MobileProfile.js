import React, { useState } from 'react'
import MobileMenuProfile from './MobileMenuProfile';

const MobileProfile = ({ showMobileMenu, toggleMobileMenu }) => {

    function importAll(r) {
        let images = {}
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); })
        return images
    }

    const [showAccount, setShowAccount] = useState(true)
    const [showPayment, setShowPayment] = useState(false)
    const [showProfile, setShowProfile] = useState(false)

    function toggleAccount() {
        setShowAccount(!showAccount)
        setShowPayment(false)
        setShowProfile(false)
    }

    function togglePayment() {
        setShowAccount(false)
        setShowPayment(!showPayment)
        setShowProfile(false)
    }

    function toggleProfile() {
        setShowAccount(false)
        setShowPayment(false)
        setShowProfile(!showProfile)
        console.log('yay')
    }

    const images = importAll(require.context('../../icons', false, /\.(png|jpe?g|svg)$/))

    return (
        <main className='bg-lightGray'>
            <aside className={showMobileMenu ? 'block' : 'hidden'}>
                <MobileMenuProfile toggleMobileMenu={toggleMobileMenu} toggleAccount={toggleAccount} togglePayment={togglePayment} toggleProfile={toggleProfile} showAccount={showAccount} showPayment={showPayment} showProfile={showProfile} />
            </aside>
            <section className={showMobileMenu ? 'hidden' : 'block'}>
                <div className='w-4/5 flex flex-col items-center mx-auto pt-16'>
                    <h1 className='mb-3 text-mediumBlue text-2xl font-semibold'>Welcome back, Kristi</h1>
                    <h3 className='text-mediumBlue text-sm font-medium mb-10'>
                        This is your personal space. Here you can edit your profile,
                        update your payment details and also review the details of your registration form.
                        </h3>
                    <img src={images['userLogo.svg'].default} />
                    <h1 className='text-darkGray text-2xl mt-6 mb-2.5'><span className='font-bold'>Kristi</span> Kumria</h1>
                    <img src={images['reviewStars.svg'].default} />
                    <div className='w-full flex flex-row justify-around mt-12'>
                        <img onClick={toggleAccount} className={showAccount ? 'bg-white p-2 cursor-pointer' : 'p-2 cursor-pointer'} src={showAccount ? images['homeActiveLogo.svg'].default : images['homeInactiveLogo.svg'].default} />
                        <img onClick={togglePayment} className={showPayment ? 'bg-white p-2 cursor-pointer' : 'p-2 cursor-pointer'} src={showPayment ? images['creditCardActiveLogo.svg'].default : images['creditCardInactiveLogo.svg'].default} />
                        <img onClick={toggleProfile} className={showProfile ? 'bg-white p-2 cursor-pointer' : 'p-2 cursor-pointer'} src={showProfile ? images['userSmallActiveLogo.svg'].default : images['userSmallInactiveLogo.svg'].default} />
                    </div>
                </div>
                {/* A C C O U N T */}
                <div className={showAccount ? 'text-darkGray bg-white h-screen block' : 'h-screen hidden'}>
                    <img className='absolute right-5' src={images['chatLogo.svg'].default} />
                    <div className='w-full flex flex-col items-center mb-12'>
                        <h3 className='py-12'><strong>Account</strong> Details</h3>
                    </div>
                </div>
                {/* P A Y M E N T */}
                <div className={showPayment ? 'text-darkGray bg-white h-screen block' : 'h-screen hidden'}>
                    <img className='absolute right-5' src={images['chatLogo.svg'].default} />
                    <div className='w-full flex flex-col items-center mb-12'>
                        <h3 className='py-12'><strong>Payment</strong> Information</h3>
                        <div className='w-4/5 text-center text-white bg-lightBlue py-4'>
                            <div className='w-4/5 flex flex-col items-center mx-auto'>
                                <img src={images['creditCardWhite.svg'].default} />
                                <h1 className='bold text-2xl my-2'>Stripe is not connected</h1>
                                <p className='text-sm mb-6'>
                                    You will not be able to take any jobs without connecting
                        </p>
                                <input className=' w-5/12 rounded-3xl bg-white text-lightBlue font-medium mx-auto p-2' type="submit" value="Connect" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* P R O F I L E */}
                <div className={showProfile ? 'text-darkGray bg-white h-screen block' : 'h-screen hidden'}>
                    <img className='absolute right-5' src={images['chatLogo.svg'].default} />
                    <div className='w-full flex flex-col items-center mb-12'>
                        <h3 className='py-12'><strong>Edit</strong> Profile</h3>
                        <form className='w-11/12 flex flex-col items-start'>
                            Description
                        <textarea className='w-full rounded-3xl bg-profileGray mb-6 mt-3 py-3 px-6' rows='6'
                                placeholder='I am an experienced domestic plumber, gas engineer. Fast, clean and reliable. 
                        I can find solutions for your plumbing issues. I am based in Fitzrovia, London but work everywhere in North London' />
                        Based in
                        <input className='w-full rounded-3xl bg-profileGray py-4 px-8 my-3' type='text' placeholder='Fitzovia, London' />
                        Top Skills
                        <div className='flex flex-row mt-3'>
                                <div className='relative'>
                                    <img className='absolute right-3 -top-3.5' src={images['skillRemover.svg'].default} />
                                    <h3 className='ring-2 ring-mediumBlue text-mediumBlue font-semibold rounded-full py-2 px-4 mr-3'>Waterworks</h3>
                                </div>
                                <div className='relative'>
                                    <img className='absolute right-3 -top-3.5' src={images['skillRemover.svg'].default} />
                                    <h3 className='ring-2 ring-mediumBlue text-mediumBlue font-semibold rounded-full py-2 px-4 mr-3'>Pipes</h3>
                                </div>
                                <div className='relative'>
                                    <img className='absolute right-3 -top-3.5' src={images['skillRemover.svg'].default} />
                                    <h3 className='ring-2 ring-mediumBlue text-mediumBlue font-semibold rounded-full py-2 px-4'>Pressure Tests</h3>
                                </div>
                            </div>
                            <input className='w-full rounded-3xl bg-profileGray py-4 px-8 my-4 mb-10' type='text' placeholder='Enter Top Skill...' />
                            <input className=' w-5/12 rounded-3xl bg-lightBlue text-white ring-1 ring-mediumGray mx-auto p-2' type="submit" value="Update" />
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default MobileProfile