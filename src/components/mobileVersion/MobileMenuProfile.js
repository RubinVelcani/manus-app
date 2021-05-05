import React from 'react'
import { Link } from 'react-router-dom'

const MobileMenuProfile = ({ toggleMobileMenu, toggleAccount, togglePayment, toggleProfile }) => {

    function accountHandler() {
        toggleMobileMenu()
        toggleAccount()
    }

    function paymentHandler() {
        toggleMobileMenu()
        togglePayment()
    }

    function profileHandler() {
        toggleMobileMenu()
        toggleProfile()
    }
    return (
        <div className='bg-mediumBlue h-screen'>
            <ul className='list-none text-white text-xl pb-12'>
                <li className='px-10 py-2 hover:bg-menuBlue' onClick={accountHandler}>Account Details</li>
                <li className='px-10 py-2 hover:bg-menuBlue' onClick={paymentHandler}>Payment Information</li>
                <li className='px-10 py-2 hover:bg-menuBlue' onClick={profileHandler}>Edit Profile</li>
            </ul>
        </div>
    )
}

export default MobileMenuProfile

//<li className='px-10 py-2 hover:bg-menuBlue' onClick={() => { toggleProfile(); toggleMobileMenu(); }}>Edit Profile</li>