import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

import MobileMenuProfile from './MobileMenuProfile';
import SkillUnit from '../helpers/SkillUnit';

const MobileProfile = ({ showMobileMenu, toggleMobileMenu, profileMenuSelect, setProfileMenuSelect }) => {

    // N E E D  T O  C H A N G E  S T A T E  A F T E R  T O G G L I N G  M O B I L E  M E N U

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    function importAll(r) {
        let images = {}
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); })
        return images
    }

    const images = importAll(require.context('../../icons', false, /\.(png|jpe?g|svg)$/))

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data)

    function menuSelector() {
        switch (profileMenuSelect) {
            case 'account':
                setProfileMenuSelect('account')
                break;
            case 'payment':
                setProfileMenuSelect('payment')
                break;
            case 'profile':
                setProfileMenuSelect('profile')
                break;
            default:
                setProfileMenuSelect('account')
                break;
        }
    }

    useEffect(() => {
        menuSelector()
    })


    return (
        <main className='bg-lightGray'>
            <aside className={showMobileMenu ? 'block' : 'hidden'}>
                <MobileMenuProfile toggleMobileMenu={toggleMobileMenu} setProfileMenuSelect={setProfileMenuSelect} />
            </aside>
            <section className={showMobileMenu ? 'hidden' : 'block'}>
                <div className='w-4/5 flex flex-col items-center mx-auto pt-16'>
                    <h1 className='mb-3 text-mediumBlue text-2xl font-semibold'>Welcome back, Kristi</h1>
                    <h3 className='text-mediumBlue text-sm text-center font-medium mb-10'>
                        This is your personal space. Here you can edit your profile,
                        update your payment details and also review the details of your registration form.
                        </h3>
                    <img src={images['userLogo.svg'].default} />
                    <h1 className='text-darkGray text-2xl mt-6 mb-2.5'><span className='font-bold'>Kristi</span> Kumria</h1>
                    <img src={images['reviewStars.svg'].default} />
                    <div className='w-full flex flex-row justify-around mt-12'>
                        <img onClick={() => { setProfileMenuSelect('account'); }} className={profileMenuSelect === 'account' ? 'bg-white p-2 cursor-pointer' : 'p-2 cursor-pointer'} src={profileMenuSelect === 'account' ? images['homeActiveLogo.svg'].default : images['homeInactiveLogo.svg'].default} />
                        <img onClick={() => { setProfileMenuSelect('payment'); }} className={profileMenuSelect === 'payment' ? 'bg-white p-2 cursor-pointer' : 'p-2 cursor-pointer'} src={profileMenuSelect === 'payment' ? images['creditCardActiveLogo.svg'].default : images['creditCardInactiveLogo.svg'].default} />
                        <img onClick={() => { setProfileMenuSelect('profile'); }} className={profileMenuSelect === 'profile' ? 'bg-white p-2 cursor-pointer' : 'p-2 cursor-pointer'} src={profileMenuSelect === 'profile' ? images['userSmallActiveLogo.svg'].default : images['userSmallInactiveLogo.svg'].default} />
                    </div>
                </div>
                {/* A C C O U N T */}
                <div className={profileMenuSelect === 'account' ? 'text-darkGray bg-white h-screen block' : 'h-screen hidden'}>
                    <Link to='/contact'>
                        <img className='absolute right-20 cursor-pointer' src={images['chatLogo.svg'].default} />
                    </Link>
                    <div className='w-full flex flex-col items-center mb-12'>
                        <h3 className='py-12'><strong>Account</strong> Details</h3>
                    </div>
                </div>
                {/* P A Y M E N T */}
                <div className={profileMenuSelect === 'payment' ? 'text-darkGray bg-white h-screen block' : 'h-screen hidden'}>
                    <Link to='/contact'>
                        <img className='absolute right-20 cursor-pointer' src={images['chatLogo.svg'].default} />
                    </Link>
                    <div className='w-full flex flex-col items-center mb-12'>
                        <h3 className='py-12'><strong>Payment</strong> Information</h3>
                        <div className='w-4/5 text-center text-white bg-lightBlue py-4'>
                            <div className='w-4/5 flex flex-col items-center mx-auto'>
                                <img src={images['creditCardWhite.svg'].default} />
                                <h1 className='bold text-2xl my-2'>Stripe is not connected</h1>
                                <p className='text-sm mb-6'>
                                    You will not be able to take any jobs without connecting
                        </p>
                                <button className=' w-5/12 rounded-3xl bg-white text-lightBlue font-medium mx-auto p-2'>Connect</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* P R O F I L E */}
                <div className={profileMenuSelect === 'profile' ? 'text-darkGray bg-white h-screen block' : 'h-screen hidden'}>
                    <Link to='/contact'>
                        <img className='absolute right-20 cursor-pointer' src={images['chatLogo.svg'].default} />
                    </Link>
                    <div className='w-full flex flex-col items-center mb-12'>
                        <h3 className='py-12'><strong>Edit</strong> Profile</h3>
                        <form className='w-11/12 flex flex-col items-start' onSubmit={handleSubmit(onSubmit)}>
                            Description
                        <textarea className='w-full rounded-3xl bg-profileGray mb-6 mt-3 py-3 px-6 ring-1 ring-mediumGray outline-none focus-within:ring-mediumBlue' {...register("description")} rows='6'
                                placeholder='I am an experienced domestic plumber, gas engineer. Fast, clean and reliable. 
                        I can find solutions for your plumbing issues. I am based in Fitzrovia, London but work everywhere in North London' />
                        Based in
                        <input className='w-full rounded-3xl bg-profileGray py-4 px-8 my-3 ring-1 ring-mediumGray outline-none focus-within:ring-mediumBlue' {...register("location")} placeholder='Fitzovia, London' />
                        Top Skills
                        <div className='flex flex-row mt-3'>
                                <SkillUnit skillName='Waterworks' />
                                <SkillUnit skillName='Pipes' />
                                <SkillUnit skillName='Pressure tests' />
                            </div>
                            <input className='w-full rounded-3xl bg-profileGray py-4 px-8 my-4 mb-10 ring-1 ring-mediumGray outline-none focus-within:ring-mediumBlue' {...register("skills", { required: true, pattern: { value: /^[a-zA-Z ]+$/ } })} placeholder='Enter Top Skill...' />
                            <div className='w-full flex flex-row justify-between'>
                                <button className=' w-5/12 rounded-3xl bg-lightBlue text-white ring-1 ring-mediumGray outline-none text-center p-2 cursor-pointer'>Add skill</button>
                                <input className=' w-5/12 rounded-3xl bg-lightBlue text-white ring-1 ring-mediumGray mx-auto p-2 cursor-pointer' type='submit' value='Update' />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default MobileProfile