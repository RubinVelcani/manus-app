import React from 'react'

const Footer = () => {
    return (
        <footer className='flex flex-row justify-between items-center text-white'>
            <img className='absolute w-full' src='./icons/footerBackground.svg' />
            <div className='relative'>
                <ul className='list-none px-11 text-xxs mt-12'>
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