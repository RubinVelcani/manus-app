import React from 'react'
import { Link } from 'react-router-dom'

const MobileMenuProfile = ({ toggleMobileMenu, toggleAccount, togglePayment, toggleProfile, showAccount, showPayment, }) => {
    return (
        <div className='bg-mediumBlue h-screen'>
            <ul className='list-none text-white text-xl pb-12'>
                <Link to='/profile' onClick={() => { toggleMobileMenu(); toggleAccount() }}>
                    <li className='px-10 py-2 hover:bg-menuBlue'>Account Details</li>
                </Link>
                <Link to='/profile' onClick={() => { toggleMobileMenu(); togglePayment() }}>
                    <li className='px-10 py-2 hover:bg-menuBlue'>Payment Information</li>
                </Link>
                <Link to='/profile' onClick={() => { toggleProfile(); toggleMobileMenu(); }}>
                    <li className='px-10 py-2 hover:bg-menuBlue'>Edit Profile</li>
                </Link>
            </ul>
        </div>
    )
}

export default MobileMenuProfile