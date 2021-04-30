import React from 'react'
import style from '../DesktopStyle.module.css'

const DesktopStep2 = ({ pageOne, pageTwo, pageThree, togglePageOne, togglePageTwo, togglePageThree }) => {

    function importAll(r) {
        let images = {}
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); })
        return images
    }

    const images = importAll(require.context('../../../icons', false, /\.(png|jpe?g|svg)$/))

    return (
        <section>
            <div className='w-4/5 flex flex-row items-center justify-between font-medium tracking-tight mb-12 mx-auto 2xl:justify-around'>
                <div onClick={togglePageOne} className='w-36 flex flex-col items-center'>
                    <h4 className='uppercase mb-2.5'>
                        Personal Information
                        </h4>
                    <div>
                        <img className='absolute right-5' src={images['chatLogo.svg'].default} />
                    </div>
                    <span className={pageOne ? style.formDotSelected_border : style.formDotUnSelected_border}>
                        <span className={pageOne ? style.formDotSelected : style.formDot} />
                    </span>
                </div>
                <div onClick={togglePageTwo} className='w-36 flex flex-col items-center'>
                    <h4 className='uppercase mb-2.5'>
                        Professional
                        </h4>
                    <span className={pageTwo ? style.formDotSelected_border : style.formDotUnSelected_border}>
                        <span className={pageTwo ? style.formDotSelected : style.formDot} />
                    </span>
                </div>
                <div onClick={togglePageThree} className='w-36 flex flex-col items-center'>
                    <h4 className='uppercase mb-2.5'>
                        Declarations
                        </h4>
                    <span className={pageThree ? style.formDotSelected_border : style.formDotUnSelected_border}>
                        <span className={pageThree ? style.formDotSelected : style.formDot} />
                    </span>
                </div>
            </div>
            <div className='w-4/5 flex flex-col font-medium text-formGray mt-4 mb-16 mx-auto'>
                <h2 className='uppercase text-lg font-semibold text-darkGray'>About you</h2>
                <div className='flex flex-row justify-between mb-7 mt-10'>
                    <h3>Gender</h3>
                    <div className='w-2/3 flex flex-row justify-around'>
                        <label>
                            <input type="radio" value="Male" name="gender" /> Male
                            </label>
                        <label>
                            <input type="radio" value="Female" name="gender" /> Female
                            </label>
                        <label>
                            <input type="radio" value="Other" name="gender" /> Other
                            </label>
                    </div>
                </div>
                <div className='w-full flex flex-row justify-between mt-0.5 mb-7'>
                    <div className='w-5/12 flex flex-col'>
                        <label className='mb-5'>First Name</label>
                        <input className=' rounded-3xl ring-1 ring-mediumGray mb-4 py-2 px-4' type="text" />
                    </div>
                    <div className='w-5/12 flex flex-col'>
                        <label className='mb-5'>Surname</label>
                        <input className=' rounded-3xl ring-1 ring-mediumGray mb-4 py-2 px-4' type="text" />
                    </div>
                </div>
                <p className='font-normal mt-0.5 mb-9'>
                    <span className='font-bold tracking-wide '>Upload profile image: </span>
                        Add a personal touch to your profile page by adding a photo of yourself taken against a white wall/background.
                        Max siwe 500KB (Ideal Dimensions 500x500 px).
                    </p>
                <div className='flex flex-row justify-between items-baseline mb-11 mt-0.5'>
                    <input className='rounded-3xl ring-1 ring-mediumGray mr-2 py-2 px-4' type="file" />
                </div>
                <div className='w-full flex flex-col mt-0.5'>
                    <div className='w-full flex flex-row justify-between mb-5'>
                        <div className='w-5/12 flex flex-col'>
                            <label className='mr-auto mb-5'>Home Address</label>
                            <input className=' rounded-3xl ring-1 ring-mediumGray py-2 px-4' type="text" />
                        </div>
                        <div className='w-5/12 flex flex-col'>
                            <label className='mr-auto mb-5'>Mobile Number</label>
                            <input className=' rounded-3xl ring-1 ring-mediumGray py-2 px-4' type="text" />
                        </div>
                    </div>
                    <div className='w-full flex flex-row justify-between mb-5'>
                        <div className='w-5/12 flex flex-col'>
                            <label className='mr-auto mb-5'>Date of Birth</label>
                            <input className=' rounded-3xl ring-1 ring-mediumGray py-2 px-4' type="text" />
                        </div>
                        <div className='w-5/12 flex flex-col'>
                            <label className='mr-auto mb-5'>Postcode</label>
                            <input className=' rounded-3xl ring-1 ring-mediumGray py-2 px-4' type="text" />
                        </div>
                    </div>
                    <div className='w-full flex flex-row justify-between mb-7'>
                        <div className='w-5/12 flex flex-col'>
                            <label className='mr-auto mb-5'>Place of Birth</label>
                            <input className=' rounded-3xl ring-1 ring-mediumGray py-2 px-4' type="text" />
                        </div>
                        <div className='w-5/12 flex flex-col'>
                            <label className='mr-auto mb-5'>Place of Birth</label>
                            <input className=' rounded-3xl ring-1 ring-mediumGray py-2 px-4' type="text" />
                        </div>
                    </div>
                </div>
                <label className='tracking-wide mr-auto mb-5 mt-0.5'>Please provide a copy of your driver’s license</label>
                <input className='pl-6 mb-4' type="file" />

                <label className='tracking-wide mb-5 mr-auto'>Please provide a copy of the details page of your passport</label>
                <input className='pl-6 mb-9' type="file" />
                <div className='flex flex-col mt-0.5'>
                    <label className='tracking-wide mr-auto mb-5'>Nationality</label>
                    <select className='w-5/12 rounded-3xl ring-1 ring-mediumGray mt-2 mb-9 py-2 px-4 outline-none'>
                        <option hidden value="">Select your nationality</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </div>

                <div className='flex flex-row'>
                    <input className=' w-1/4 rounded-3xl bg-white text-mediumBlue font-semibold ring-2 ring-mediumBlue mr-5 p-2' type="submit" value="Save it for later" />
                    <button onClick={togglePageThree} className=' w-1/4 rounded-3xl bg-mediumBlue text-white ring-2 ring-mediumBlue p-2'>Continue</button>
                </div>
            </div>
        </section>
    )
}

export default DesktopStep2