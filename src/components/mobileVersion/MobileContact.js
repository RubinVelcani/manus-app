import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import MobileMenuHome from './MobileMenuHome'

const MobileContact = ({ showMobileMenu, toggleMobileMenu }) => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    function importAll(r) {
        let images = {}
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); })
        return images
    }

    const images = importAll(require.context('../../icons', false, /\.(png|jpe?g|svg)$/))

    return (
        <main className='bg-lightGray'>
            <aside className={showMobileMenu ? 'block' : 'hidden'}>
                <MobileMenuHome showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />
            </aside>
            <section className={showMobileMenu ? 'hidden' : 'block'}>
                <div className='flex flex-col w-4/5 items-center text-center mx-auto pb-36'>
                    <div className='mt-7 pb-4'>
                        <h1 className='mb-3 ml-3 -mt-1 text-deepBlue text-4xl font-semibold'>Contact us</h1>
                        <h3 className='text-lightBlue font-bold leading-5'>
                            Whether you have a question, want to know more about Manus or just want to say hello,
                            we’re happy to hear from you.
                        </h3>
                    </div>
                    <img src={images['greenBlueLines.svg'].default} />
                    <form className='w-full flex flex-col text-sm text-formGray mt-4 mb-16'>
                        <textarea className=' rounded-3xl ring-1 ring-mediumGray mb-5 py-3 px-6' rows='6' placeholder='Your message...' />
                        <select className=' rounded-3xl ring-1 ring-mediumGray mb-5 py-2 px-4'>
                            <option hidden value="">Tell us about yourself...</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                        <input className=' rounded-3xl ring-1 ring-mediumGray mb-5 py-2 px-4' type="text" placeholder='First name' />
                        <input className=' rounded-3xl ring-1 ring-mediumGray mb-5 py-2 px-4' type="text" placeholder='Phone' />
                        <input className=' rounded-3xl ring-1 ring-mediumGray mb-5 py-2 px-4' type="text" placeholder='Last name' />
                        <input className=' rounded-3xl ring-1 ring-mediumGray mb-8 py-2 px-4' type="text" placeholder='Email' />
                        <button className=' w-3/5 rounded-3xl bg-lightBlue text-white ring-1 ring-mediumGray mx-auto p-3.5 px-4'>Send message</button>
                    </form>
                    <Link to='/contact'>
                        <img className='absolute right-20 cursor-pointer' src={images['chatLogo.svg'].default} />
                    </Link>
                    <div className='flex flex-col items-center text-center'>
                        <h1 className='mb-4 text-mediumBlue text-2xl font-bold'>Immediate Solutions</h1>
                        <p className='text-gray leading-5 font-medium mb-2.5'>
                            For any general enquiries
                            </p>
                        <div className='flex flex-row mb-10'>
                            <img src={images['emailLogo.svg'].default} />
                            <span className='text-mediumBlue ml-2 cursor-pointer'>hello@manusapp.com</span>
                        </div>
                        <h1 className='mb-4 text-mediumBlue text-2xl font-bold'>Help</h1>
                        <p className='text-gray leading-5 font-medium mb-2.5'>
                            For support please contact
                            </p>
                        <div className='flex flex-row'>
                            <img src={images['emailLogo.svg'].default} />
                            <span className='text-mediumBlue ml-2 cursor-pointer'>help@manusapp.com</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default MobileContact