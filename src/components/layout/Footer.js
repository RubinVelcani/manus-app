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
                        <li className='w-full border-b border-lightBlue mt-2 pb-1.5'>
                            <Link to='/vision'>
                                Our Vision
                            </Link>
                        </li>
                        <li className='w-full border-b border-lightBlue mt-2 pb-1.5'>
                            <Link to='/how'>
                                How it works
                            </Link>
                        </li>
                        <li className='w-full border-b border-lightBlue mt-2 pb-1.5'>
                            <Link to='/contact'>
                                Contact Us
                            </Link>
                        </li>
                        <li className='w-full border-b border-lightBlue mt-2 pb-1.5'>
                            <Link to='/'>
                                Media Enquiries
                            </Link>
                        </li>
                        <li className='w-full border-b border-lightBlue mt-2 pb-1.5'>
                            <Link to='/'>
                                terms of Use
                            </Link>
                        </li>
                        <li className='w-full border-b border-lightBlue mt-2 pb-1.5'>
                            <Link to='/'>
                                Privacy Policy
                            </Link>
                        </li>
                        <li className='w-full border-b border-lightBlue mt-2 pb-1.5'>
                            <Link to='/'>
                                Cookies Policy
                            </Link>
                        </li>
                    </ul>
                    <h4 className='text-xxs pl-11 mt-8'>
                        &#169; 2017 MANUS. All rights &amp; Copyrights Reserved
                </h4>
                </div>
            </div>
            <div className='hidden md:block'>
                <div className={style.desktopFooter}>
                    <div className=' max-w-screen-lg relative flex flex-col items-center text-white mx-auto'>
                        <img src={images['desktopFooterLogo.png'].default} />
                        <div className='w-11/12 flex flex-row items-center text-sm justify-between mt-9 2xl:text-base'>
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