import React from 'react'

const Header = () => {
    return (
        <header className='flex flex-row justify-between items-center bg-mediumBlue'>
            <div className='p-4 ml-6'>
                <img src='./icons/mobileLogoImg.png' />
            </div>
            <div className='flex flex-row'>
                <div className='p-4'>
                    <img src='./icons/mobileUser.svg' />
                </div>
                <div className='p-4 mr-6'>
                    <img src='./icons/mobileHamburger.svg' />
                </div>
            </div>
        </header>
    )
}

export default Header