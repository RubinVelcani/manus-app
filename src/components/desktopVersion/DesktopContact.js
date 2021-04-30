import React, { useLayoutEffect } from 'react'

const DesktopContact = ({ showMobileMenu, toggleMobileMenu }) => {

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
            <section className=''>
                <div className='flex flex-col w-4/5 items-center text-center mx-auto pb-36'>
                    <div className='mt-20'>
                        <h1 className='mb-6 ml-3 text-mediumBlue text-4xl font-semibold'>Contact us</h1>
                        <h3 className='w-2/3 text-gray font-semibold mx-auto mb-12'>
                            Whether you have a question, want to know more about Manus or just want to say hello,
                            we’re happy to hear from you.
                        </h3>
                    </div>
                    <img className='w-56 h-3 mb-14' src={images['greenBlueLines.svg'].default} />
                    <div className='w-full flex flex-row'>
                        <div className='w-1/2 flex flex-col items-end pr-6 border-r border-mediumGray'>
                            <h1 className='text-mediumBlue text-3xl my-5'>General Enquiries</h1>
                            <h3 className='text-gray mb-2'>For any general enquiries</h3>
                            <div className='flex flex-row'>
                                <img src={images['emailLogo.svg'].default} />
                                <span className='text-mediumBlue ml-2'>hello@manusapp.com</span>
                            </div>
                            <h1 className='text-mediumBlue text-3xl mt-7 mb-5'>Help</h1>
                            <h3 className='text-gray mb-2'>For support please contact</h3>
                            <div className='flex flex-row'>
                                <img src={images['emailLogo.svg'].default} />
                                <span className='text-mediumBlue ml-2'>help@manusapp.com</span>
                            </div>
                        </div>
                        <div>
                            <img className='absolute right-5' src={images['chatLogo.svg'].default} />
                        </div>
                        <form className='w-1/2 flex flex-col items-start text-sm text-formGray pl-6 mt-1'>
                            <textarea className='w-full rounded-3xl ring-1 ring-mediumGray mb-16 py-10 px-6 outline-none focus-within:ring-mediumBlue' rows='6' placeholder='Your message...' />
                            <select className='w-full rounded-3xl ring-1 ring-mediumGray mt-2 mb-9 py-2 px-4 outline-none'>
                                <option hidden value="">Tell us about yourself...</option>
                                <option value="lime">Lime</option>
                                <option value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                            <div className='w-full flex flex-row justify-between mb-9'>
                                <input className='w-5/12 rounded-3xl ring-1 ring-mediumGray py-2 px-4 outline-none focus-within:ring-mediumBlue' type="text" placeholder='First name' />
                                <input className='w-5/12 rounded-3xl ring-1 ring-mediumGray py-2 px-4 outline-none focus-within:ring-mediumBlue' type="text" placeholder='Last name' />
                            </div>
                            <div className='w-full flex flex-row justify-between mb-9'>
                                <input className='w-5/12 rounded-3xl ring-1 ring-mediumGray py-2 px-4 outline-none focus-within:ring-mediumBlue' type="text" placeholder='Email' />
                                <input className='w-5/12 rounded-3xl ring-1 ring-mediumGray py-2 px-4 outline-none focus-within:ring-mediumBlue' type="text" placeholder='Phone' />
                            </div>
                            <input className='w-2/5 rounded-3xl bg-lightBlue text-white ring-1 ring-mediumGray p-3.5 px-4' type="submit" value="Send message" />
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DesktopContact