import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

const MobileMenuProfile = ({ toggleMobileMenu, toggleAccount, togglePayment, toggleProfile, showAccount, showPayment, showProfile }) => {
    return (
        <div className='bg-mediumBlue h-screen'>
            <ul className='list-none text-white text-xl pb-12'>
                <Router>
                    <Link to='/profile/account' onClick={() => { toggleMobileMenu(); toggleAccount() }}>
                        <li className='px-10 py-2 hover:bg-menuBlue'>Account Details</li>
                    </Link>
                    <Link to='/profile/payment' onClick={() => { toggleMobileMenu(); togglePayment() }}>
                        <li className='px-10 py-2 hover:bg-menuBlue'>Payment Information</li>
                    </Link>
                    <Link to='/profile/profile' onClick={() => { toggleProfile(); toggleMobileMenu(); }}>
                        <li className='px-10 py-2 hover:bg-menuBlue'>Edit Profile</li>
                    </Link>
                </Router>
            </ul>
        </div>
    )
}

export default MobileMenuProfile