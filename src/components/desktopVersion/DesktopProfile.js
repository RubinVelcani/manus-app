import React, { useState, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'

const DesktopProfile = ({ showMobileMenu, toggleMobileMenu }) => {

    // N E E D  T O  C H A N G E  S T A T E  A F T E R  T O G G L I N G  M O B I L E  M E N U

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    function importAll(r) {
        let images = {}
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); })
        return images
    }

    const images = importAll(require.context('../../icons', false, /\.(png|jpe?g|svg)$/))

    const [showAccount, setShowAccount] = useState(true)
    const [showPayment, setShowPayment] = useState(false)
    const [showProfile, setShowProfile] = useState(false)

    function toggleAccount() {
        setShowAccount(true)
        setShowPayment(false)
        setShowProfile(false)
    }

    function togglePayment() {
        setShowAccount(false)
        setShowPayment(true)
        setShowProfile(false)
    }

    function toggleProfile() {
        setShowAccount(false)
        setShowPayment(false)
        setShowProfile(true)
    }

    return (
        <main>
            <div className='h-28 pb-1.5 bg-mediumBlue'></div>
            <div className='flex flex-row bg-lightGray'>
                <div className='w-2/5 pt-20'>
                    <div className='w-full flex flex-col items-center mx-auto lg:w-max lg:ml-auto lg:mr-0 lg:pr-5'>
                        <img src={images['userLogo.svg'].default} />
                        <h1 className='text-darkGray text-3xl mt-6 mb-7'><span className='font-bold'>Kristi</span> Kumria</h1>
                        <img src={images['reviewStars.svg'].default} />
                        <div className='w-full flex flex-col justify-around mt-10'>
                            <div onClick={toggleAccount} className={showAccount ? 'flex flex-row items-center bg-white p-3 cursor-pointer border-b border-t border-mediumGray' : 'flex flex-row items-center bg-lightGray p-3 cursor-pointer border-b border-t border-lightGray'}>
                                <img src={showAccount ? images['homeActiveLogo.svg'].default : images['homeInactiveLogo.svg'].default} />
                                <h3 className={showAccount ? 'text-mediumBlue ml-5 font-medium' : 'text-gray font-medium ml-5'}>Account Details</h3>
                            </div>
                            <div onClick={togglePayment} className={showPayment ? 'flex flex-row items-center bg-white p-3 cursor-pointer border-b border-t border-mediumGray' : 'flex flex-row items-center bg-lightGray p-3 cursor-pointer border-b border-t border-lightGray'}>
                                <img src={showPayment ? images['creditCardActiveLogo.svg'].default : images['creditCardInactiveLogo.svg'].default} />
                                <h3 className={showPayment ? 'text-mediumBlue font-medium ml-5' : 'text-gray font-medium ml-5'}>Payment Information</h3>
                            </div>
                            <div onClick={toggleProfile} className={showProfile ? 'flex flex-row items-center bg-white p-3 cursor-pointer border-b border-t border-mediumGray' : 'flex flex-row items-center bg-lightGray p-3 cursor-pointer border-b border-t border-lightGray'}>
                                <img src={showProfile ? images['userSmallActiveLogo.svg'].default : images['userSmallInactiveLogo.svg'].default} />
                                <h3 className={showProfile ? 'text-mediumBlue font-medium ml-5' : 'text-gray font-medium ml-5'}>Edit Profile</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-3/5 bg-white pt-20'>
                    <div className='w-4/5 flex flex-col mx-auto'>
                        <h1 className='mb-3 text-mediumBlue text-5xl font-semibold'>Welcome back, Kristi</h1>
                        <h3 className='text-gray text-sm font-medium border-b border-mediumGray pb-16'>
                            This is your personal space. Here you can edit your profile,
                            update your payment details and also review the details of your registration form.
                        </h3>
                        {/* A C C O U N T */}
                        <div className={showAccount ? 'text-darkGray bg-white h-screen block' : 'h-screen hidden'}>
                            <Link to='/contact'>
                                <img className='absolute right-20 cursor-pointer' src={images['chatLogo.svg'].default} />
                            </Link>
                            <div className='w-full flex flex-col mb-12'>
                                <h3 className='py-12'><strong>Account</strong> Details</h3>
                            </div>
                        </div>
                        {/* P A Y M E N T */}
                        <div className={showPayment ? 'text-darkGray bg-white h-screen block' : 'h-screen hidden'}>
                            <Link to='/contact'>
                                <img className='absolute right-20 cursor-pointer' src={images['chatLogo.svg'].default} />
                            </Link>
                            <div className='w-full flex flex-col mb-12'>
                                <h3 className='py-12'><strong>Payment</strong> Information</h3>
                                <div className='w-4/5 text-white bg-lightBlue py-4 mx-auto'>
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
                            <Link to='/contact'>
                                <img className='absolute right-20 cursor-pointer' src={images['chatLogo.svg'].default} />
                            </Link>
                            <div className='w-full flex flex-col mb-12'>
                                <h3 className='py-12'><strong>Edit</strong> Profile</h3>
                                <form className='w-11/12 flex flex-col items-start'>
                                    Description
                        <textarea className='w-full rounded-3xl bg-profileGray my-6 py-3 px-6' rows='6'
                                        placeholder='I am an experienced domestic plumber, gas engineer. Fast, clean and reliable. 
                        I can find solutions for your plumbing issues. I am based in Fitzrovia, London but work everywhere in North London' />
                        Based in
                        <input className='w-full rounded-3xl bg-profileGray py-4 px-8 my-6' type='text' placeholder='Fitzovia, London' />
                        Top Skills
                        <div className='flex flex-row my-6'>
                                        <div className='relative'>
                                            <img className='absolute right-3 -top-3.5' src={images['skillRemover.svg'].default} />
                                            <h3 className='ring-2 ring-mediumBlue text-mediumBlue font-semibold rounded-full py-2 px-4 mr-6'>Waterworks</h3>
                                        </div>
                                        <div className='relative'>
                                            <img className='absolute right-3 -top-3.5' src={images['skillRemover.svg'].default} />
                                            <h3 className='ring-2 ring-mediumBlue text-mediumBlue font-semibold rounded-full py-2 px-4 mr-6'>Pipes</h3>
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
                    </div>
                </div>
            </div>
        </main>
    )
}

export default DesktopProfile