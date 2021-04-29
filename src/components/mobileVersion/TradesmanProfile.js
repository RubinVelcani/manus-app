import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Route, Switch, } from 'react-router-dom'
import MobileMenuProfile from './MobileMenuProfile';
import ProfileAccount from './ProfileAccount';
import ProfilePayment from './ProfilePayment';
import ProfileProfile from './ProfileProfile'

const TradesmanProfile = ({ showMobileMenu, toggleMobileMenu }) => {

    function importAll(r) {
        let images = {}
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); })
        return images
    }

    const images = importAll(require.context('../../icons', false, /\.(png|jpe?g|svg)$/))

    const [showAccount, setShowAccount] = useState(true)
    const [showPayment, setShowPayment] = useState()
    const [showProfile, setShowProfile] = useState()

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

    return (
        <main className='bg-lightGray'>
            <Router>
                <aside className={showMobileMenu ? 'block' : 'hidden'}>
                    <MobileMenuProfile toggleMobileMenu={toggleMobileMenu} toggleAccount={toggleAccount} togglePayment={togglePayment} toggleProfile={toggleProfile} showAccount={showAccount} showPayment={showPayment} showProfile={showProfile} />
                </aside>
                <section className=''>
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
                            <img className={showAccount ? 'bg-white p-2' : 'p-2'} onClick={toggleAccount} src={showAccount ? images['homeActiveLogo.svg'].default : images['homeInactiveLogo.svg'].default} />
                            <Link to='/profile/payment' onClick={togglePayment}>
                                <img className={showPayment ? 'bg-white p-2' : 'p-2'} src={showPayment ? images['creditCardActiveLogo.svg'].default : images['creditCardInactiveLogo.svg'].default} />
                            </Link>
                            <Link to='/profile/profile' onClick={toggleProfile}>
                                <img className={showProfile ? 'bg-white p-2' : 'p-2'} src={showProfile ? images['userSmallActiveLogo.svg'].default : images['userSmallInactiveLogo.svg'].default} />
                            </Link>
                        </div>
                    </div>
                    <div className={showAccount ? 'text-darkGray bg-white h-screen block' : 'h-screen hidden'}>
                        <img className='absolute right-5' src={images['chatLogo.svg'].default} />
                        <div className='w-full flex flex-col items-center mb-12'>
                            <h3 className='py-12'><strong>Account</strong> Details</h3>
                        </div>
                    </div>
                    <Switch>
                        <Route path='/profile/payment'>
                            <ProfilePayment showPayment={showPayment} />
                        </Route>
                        <Route path='/profile/profile'>
                            <ProfileProfile showProfile={showProfile} />
                        </Route>
                    </Switch>
                </section>
            </Router>
        </main >
    )
}

export default TradesmanProfile