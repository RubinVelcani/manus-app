import React from 'react'
import { Link } from 'react-router-dom'
import style from './LayoutStyle.module.css'

const Footer = () => {

    function importAll(r) {
        let images = {}
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); })
        return images
    }

    const images = importAll(require.context('../../icons', false, /\.(png|jpe?g|svg)$/))

    return (
        <footer>
            <div className='block md:hidden'>
                <div className={style.mobileFooter}>
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
            </div>
            <div className='hidden md:block'>
                <div className={style.footerDesktop}>
                    <div className=' max-w-screen-lg relative flex flex-col items-center text-white mx-auto'>
                        <img src={images['desktopFooterLogo.png'].default} />
                        <div className='w-11/12 flex flex-row items-center justify-between mt-9'>
                            <Link to='./vision'>
                                <h4>Our Vision</h4>
                            </Link>
                            <img src={images['desktopFooterCircle.svg'].default} />
                            <Link to='./how'>
                                <h4>How it works</h4>
                            </Link>
                            <img src={images['desktopFooterCircle.svg'].default} />
                            <Link to='./contact'>
                                <h4>Contact US</h4>
                            </Link>
                            <img src={images['desktopFooterCircle.svg'].default} />
                            <Link to='./'>
                                <h4>Media Enquiries</h4>
                            </Link>
                            <img src={images['desktopFooterCircle.svg'].default} />
                            <Link to='./'>
                                <h4>Terms of Use</h4>
                            </Link>
                            <img src={images['desktopFooterCircle.svg'].default} />
                            <Link to='./'>
                                <h4>Privacy Policy</h4>
                            </Link>
                            <img src={images['desktopFooterCircle.svg'].default} />
                            <Link to='./'>
                                <h4>Cookies Privacy</h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer