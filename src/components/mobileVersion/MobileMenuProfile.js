import React from 'react'

const MobileMenuProfile = ({ toggleMobileMenu, setProfileMenuSelect }) => {

    return (
        <div className='bg-mediumBlue h-screen'>
            <ul className='list-none text-white text-xl pb-12'>
                <li className='px-10 py-2 hover:bg-menuBlue cursor-pointer' onClick={() => { toggleMobileMenu(); setProfileMenuSelect('account') }}>Account Details</li>
                <li className='px-10 py-2 hover:bg-menuBlue cursor-pointer' onClick={() => { toggleMobileMenu(); setProfileMenuSelect('payment') }}>Payment Information</li>
                <li className='px-10 py-2 hover:bg-menuBlue cursor-pointer' onClick={() => { toggleMobileMenu(); setProfileMenuSelect('profile') }}>Edit Profile</li>
            </ul>
        </div>
    )
}

export default MobileMenuProfile