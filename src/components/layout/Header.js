import React from 'react'

const Header = ({ showMobileMenu, toggleMobileMenu }) => {
    return (
        <header className='flex flex-row justify-between items-center bg-mediumBlue'>
            <div className='p-4 ml-6'>
                <img src='./icons/mobileLogoImg.png' alt='' />
            </div>
            <div className='flex flex-row'>
                <div className='p-4'>
                    <img src='./icons/mobileUser.svg' alt='' />
                </div>
                <div className='p-4 mr-6' onClick={toggleMobileMenu}>
                    <img src='./icons/mobileHamburger.svg' alt='' />
                </div>
            </div>
        </header>
    )
}

export default Header