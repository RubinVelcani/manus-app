import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'

const MobileMenuHome = ({ showMobileMenu, toggleMobileMenu }) => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div className='bg-mediumBlue h-screen'>
            <ul className='list-none text-white text-xl pb-12'>
                <li className='px-10 py-2 hover:bg-menuBlue'>
                    <Link to='/vision' onClick={toggleMobileMenu}>
                        Our vision
                    </Link>
                </li>
                <li className='px-10 py-2 hover:bg-menuBlue'>
                    <Link to='/how' onClick={toggleMobileMenu}>
                        How it works
                    </Link>
                </li>
                <li className='px-10 py-2 hover:bg-menuBlue'>
                    <Link to='/contact' onClick={toggleMobileMenu}>
                        Contact Us
                    </Link>
                </li>
            </ul>
        </div >
    )
}

export default MobileMenuHome