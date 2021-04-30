import React from 'react'
import { Link } from 'react-router-dom'

const MobileMenuProfile = ({ toggleMobileMenu, toggleAccount, togglePayment, toggleProfile, showAccount, showPayment, }) => {
    return (
        <div className='bg-mediumBlue h-screen'>
            <ul className='list-none text-white text-xl pb-12'>
                <li className='px-10 py-2 hover:bg-menuBlue' onClick={() => { toggleAccount(); toggleMobileMenu(); }}>Account Details</li>
                <li className='px-10 py-2 hover:bg-menuBlue' onClick={() => { togglePayment(); toggleMobileMenu(); }}>Payment Information</li>
                <li className='px-10 py-2 hover:bg-menuBlue' onClick={() => { toggleProfile(); toggleMobileMenu(); }}>Edit Profile</li>
            </ul>
        </div>
    )
}

export default MobileMenuProfile