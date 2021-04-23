import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div>
                <ul className='list-none px-11 text-xxs'>
                    <li className='border-b border-lightBlue mt-2 pr-52'>
                        Our Vision
                    </li>
                    <li className='border-b border-lightBlue mt-2 pr-52'>
                        How it works
                    </li>
                    <li className='border-b border-lightBlue mt-2 pr-52'>
                        Contact Us
                    </li>
                    <li className='border-b border-lightBlue mt-2 pr-52'>
                        Media Enquiries
                    </li>
                    <li className='border-b border-lightBlue mt-2 pr-52'>
                        terms of Use
                    </li>
                    <li className='border-b border-lightBlue mt-2 pr-52'>
                        Privacy Policy
                    </li>
                    <li className='border-b border-lightBlue mt-2 pr-52'>
                        Cookies Policy
                    </li>
                </ul>
                <h4 className='text-xxs pl-11 mt-8'>
                    &#169; 2017 MANUS. All rights &amp; Copyrights Reserved
                </h4>
            </div>
        </footer>
    )
}

export default Footer