import React from 'react'

import MobileLogo from '../../icons/mobileLogoImg.png'
import MobileUser from '../../icons/mobileUser.svg'
import Hamburger from '../../icons/mobileHamburger.svg'


const Header = ({ showMobileMenu, toggleMobileMenu }) => {
    return (
        <header className='flex flex-row justify-between items-center bg-mediumBlue'>
            <div className='p-4 ml-6'>
                <img src={MobileLogo} alt='' />
            </div>
            <div className='flex flex-row'>
                <div className='p-4'>
                    <img src={MobileUser} alt='' />
                </div>
                <div className='p-4 mr-6' onClick={toggleMobileMenu}>
                    <img src={Hamburger} alt='' />
                </div>
            </div>
        </header>
    )
}

export default Header