import React from 'react'
import { useForm } from "react-hook-form"

const DesktopContact = ({ showMobileMenu, toggleMobileMenu }) => {

    function importAll(r) {
        let images = {}
        r.keys().map((item, index) => images[item.replace('./', '')] = r(item))
        return images
    }

    const images = importAll(require.context('../../icons', false, /\.(png|jpe?g|svg)$/))

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data)

    return (
        <main className='bg-lightGray -mb-32 pb-32'>
            <section className=''>
                <div className='h-28 pb-1.5 bg-mediumBlue'></div>
                <div className='w-4/5 max-w-screen-xl flex flex-col items-center text-center mx-auto pb-36 2xl:w-full'>
                    <div className='mt-20'>
                        <h1 className='mb-6 ml-3 text-mediumBlue text-4xl font-semibold'>Contact us</h1>
                        <h3 className='w-2/3 text-gray font-semibold mx-auto mb-12'>
                            Whether you have a question, want to know more about Manus or just want to say hello,
                            we’re happy to hear from you.
                        </h3>
                    </div>
                    <img alt='' className='w-56 h-3 mb-14' src={images['greenBlueLines.svg'].default} />
                    <div className='w-full flex flex-row'>
                        <div className='w-1/2 flex flex-col items-end pr-6 border-r border-mediumGray'>
                            <h1 className='text-mediumBlue text-3xl my-5'>General Enquiries</h1>
                            <h3 className='text-gray mb-2'>For any general enquiries</h3>
                            <div className='flex flex-row'>
                                <img alt='' src={images['emailLogo.svg'].default} />
                                <span className='text-mediumBlue ml-2 cursor-pointer'>hello@manusapp.com</span>
                            </div>
                            <h1 className='text-mediumBlue text-3xl mt-7 mb-5'>Help</h1>
                            <h3 className='text-gray mb-2'>For support please contact</h3>
                            <div className='flex flex-row'>
                                <img alt='' src={images['emailLogo.svg'].default} />
                                <span className='text-mediumBlue ml-2 cursor-pointer'>help@manusapp.com</span>
                            </div>
                        </div>
                        <form className='w-1/2 flex flex-col items-start text-left text-sm text-formGray pl-6 mt-1' onSubmit={handleSubmit(onSubmit)}>
                            <textarea className='w-full rounded-3xl ring-1 ring-mediumGray mb-4 py-10 px-6 outline-none focus-within:ring-mediumBlue' {...register("message", { required: true })} rows='6' placeholder='Your message...' />
                            {errors.message && <h3 className='text-red'>This field is required</h3>}
                            <select className='w-full rounded-3xl ring-1 ring-mediumGray mt-14 mb-4 py-2 px-4 outline-none focus-within:ring-mediumBlue' {...register("industry", { required: true })}>
                                <option hidden value="">Tell us about yourself...</option>
                                <option value="lime">Lime</option>
                                <option value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                            {errors.industry && <h3 className='text-red'>This field is required</h3>}
                            <div className='w-full flex flex-row justify-between mt-5'>
                                <div className='w-5/12 flex flex-col'>
                                    <input className='rounded-3xl ring-1 ring-mediumGray py-2 px-4 mb-4 outline-none focus-within:ring-mediumBlue' {...register("firstName", { required: true, pattern: { value: /^[a-zA-Z ]+$/ } })} placeholder='First name' />
                                    {errors.firstName && <h3 className='text-red'>This field is required</h3>}
                                </div>
                                <div className='w-5/12 flex flex-col'>
                                    <input className='rounded-3xl ring-1 ring-mediumGray py-2 px-4 mb-4 outline-none focus-within:ring-mediumBlue' {...register("lastName", { required: true, pattern: { value: /^[a-zA-Z ]+$/ } })} placeholder='Last name' />
                                    {errors.lastName && <h3 className='text-red'>This field is required</h3>}

                                </div>
                            </div>
                            <div className='w-full flex flex-row justify-between mt-4'>
                                <div className='w-5/12  flex flex-col'>
                                    <input className='rounded-3xl ring-1 ring-mediumGray py-2 px-4 mb-4 outline-none focus-within:ring-mediumBlue' {...register("email", { required: true, pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ } })} placeholder='Email' />
                                    {errors.email && <h3 className='text-red'>Email address not valid</h3>}
                                </div>
                                <div className='w-5/12 flex flex-col'>
                                    <input className='rounded-3xl ring-1 ring-mediumGray py-2 px-4 mb-4 outline-none focus-within:ring-mediumBlue' {...register("phoneNumber", { required: true, pattern: { value: /^[+]*[0-9]{1,4}[0-9]{7}$/ } })} placeholder='Phone' />
                                    {errors.phoneNumber && <h3 className='text-red'>Phone number not valid</h3>}

                                </div>
                            </div>
                            <input className='w-2/5 rounded-3xl bg-lightBlue text-white ring-1 ring-mediumGray p-3.5 px-4 mt-5 cursor-pointer' type="submit" value='Send message' />
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DesktopContact