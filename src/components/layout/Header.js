import React from 'react'
import { Link } from 'react-router-dom'

import MobileLogo from '../../icons/mobileLogoImg.png'
import MobileUser from '../../icons/mobileUser.svg'
import Hamburger from '../../icons/mobileHamburger.svg'
import DesktopLogo from '../../icons/desktopLogo.png'
import DesktopUser from '../../icons/desktopUser.svg'


const Header = ({ showMobileMenu, toggleMobileMenu }) => {
    return (
        <header>
            {/* M O B I L E */}
            <div className='flex flex-row justify-between items-center bg-mediumBlue md:hidden'>
                < div className='p-4 ml-6 cursor-pointer' >
                    <Link to='/'>
                        <img alt='' src={MobileLogo} />
                    </Link>
                </div >
                <div className='flex flex-row'>
                    <div className='p-4 cursor-pointer'>
                        <Link to='/profile'>
                            <img alt='' src={MobileUser} />
                        </Link>
                    </div>
                    <div className='p-4 mr-6 cursor-pointer' onClick={toggleMobileMenu}>
                        <img alt='' src={Hamburger} />
                    </div>
                </div>
            </div >
            {/* D E S K T O P */}
            <div className='w-full hidden bg-opacity-0 absolute z-50 md:block'>
                < div className='max-w-screen-xl flex flex-row justify-around items-start text-white py-7 mx-auto' >
                    <div className='ml-6 cursor-pointer'>
                        <Link to='/'>
                            <img alt='' src={DesktopLogo} />
                        </Link>
                    </div>
                    <div className='flex flex-row items-center text-lg font-semibold'>
                        <Link to='/vision'>
                            <h4 className='mx-5'>Our vision</h4>
                        </Link>
                        <Link to='/how'>
                            <h4 className='mx-5'>How it works</h4>
                        </Link>
                        <Link to='/join'>
                            <div className='flex flex-row bg-white text-lightBlue text-base p-3 mx-5 rounded-full'>
                                <img alt='' className='mr-2' src={DesktopUser} />
                                <h4>Become a Tradesman</h4>
                            </div>
                        </Link>
                    </div>
                </div >
            </div>
        </header >
    )
}

export default Header