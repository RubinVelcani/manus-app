import React from 'react'
import style from './LayoutStyle.module.css'

import MobileLogo from '../../icons/mobileLogoImg.png'
import MobileUser from '../../icons/mobileUser.svg'
import Hamburger from '../../icons/mobileHamburger.svg'
import DesktopLogo from '../../icons/desktopLogo.png'
import DesktopUser from '../../icons/desktopUser.svg'


const Header = ({ showMobileMenu, toggleMobileMenu }) => {
    return (
        <header className='bg-mediumBlue'>
            {/* M O B I L E */}
            <div className='flex flex-row justify-between items-center md:hidden'>
                <div className='p-4 ml-6 cursor-pointer'>
                    <img src={MobileLogo} alt='' />
                </div>
                <div className='flex flex-row'>
                    <div className='p-4 cursor-pointer'>
                        <img src={MobileUser} alt='' />
                    </div>
                    <div className='p-4 mr-6 cursor-pointer' onClick={toggleMobileMenu}>
                        <img src={Hamburger} alt='' />
                    </div>
                </div>
            </div>
            {/* D E S K T O P */}
            <div className='max-w-screen-xl flex-row justify-around items-start text-white py-9 mx-auto hidden md:flex'>
                <div className='ml-6 cursor-pointer'>
                    <img src={DesktopLogo} alt='' />
                </div>
                <div className='flex flex-row items-center text-lg font-semibold'>
                    <h4 className='mx-5'>Our vision</h4>
                    <h4 className='mx-5'>How it works</h4>
                    <div className='flex flex-row bg-white text-lightBlue text-base p-3 mx-5 rounded-full'>
                        <img className='mr-2' src={DesktopUser} />
                        <h4>Become a Tradesman</h4>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header