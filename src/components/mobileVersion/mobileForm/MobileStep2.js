import React from 'react'
import style from '../MobileStyle.module.css'

const MobileStep2 = ({ pageOne, togglePageOne, pageTwo, togglePageTwo, pageThree, togglePageThree }) => {

    function importAll(r) {
        let images = {}
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); })
        return images
    }

    const images = importAll(require.context('../../../icons', false, /\.(png|jpe?g|svg)$/))

    return (
        <section className='w-11/12 flex flex-col items-center text-xs text-gray rounded-3xl bg-white mx-auto py-8'>
            <h2 className='font-bold tracking-tight text-darkGray uppercase mx-auto mb-5'>Personal information</h2>
            <div className='w-20 flex flex-row items-center justify-around mb-12 mx-auto'>
                <span onClick={togglePageOne} className={pageOne ? style.formDotSelected_border : style.formDotUnSelected_border}>
                    <span className={pageOne ? style.formDotSelected : style.formDot} />
                </span>
                <span onClick={togglePageTwo} className={pageTwo ? style.formDotSelected_border : style.formDotUnSelected_border}>
                    <span className={pageTwo ? style.formDotSelected : style.formDot} />
                </span>
                <span onClick={togglePageThree} className={pageThree ? style.formDotSelected_border : style.formDotUnSelected_border}>
                    <span className={pageThree ? style.formDotSelected : style.formDot} />
                </span>
            </div>
            <form className='w-4/5 flex flex-col text-formGray mt-4 mb-16 mx-auto'>
                <div className='flex flex-row justify-between mb-4'>
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
                <label className='mr-auto mb-2'>First Name</label>
                <input className=' rounded-3xl ring-1 ring-mediumGray mb-4 py-2 px-4' type="text" />

                <label className='mr-auto mb-2'>Surname</label>
                <input className=' rounded-3xl ring-1 ring-mediumGray mb-4 py-2 px-4' type="text" />

                <p className='mb-4'>
                    <span className='font-bold'>Upload profile image: </span>
                        Add a personal touch to your profile page by adding a photo of yourself taken against a white wall/background.
                        Max siwe 500KB (Ideal Dimensions 500x500 px).
                    </p>
                <div className='flex flex-row justify-between items-baseline mb-4'>
                    <input className='rounded-3xl ring-1 ring-mediumGray mb-4 mr-2 py-2 px-4' type="file" />
                    <input className='w-24 rounded-3xl bg-lightBlue text-white ring-1 ring-mediumGray mx-auto p-2 px-4' type='submit' value="Send" />
                </div>

                <label className='mr-auto mb-2'>Home Address</label>
                <input className=' rounded-3xl ring-1 ring-mediumGray mb-4 py-2 px-4' type="text" />

                <label className='mr-auto mb-2'>Mobile Number</label>
                <input className=' rounded-3xl ring-1 ring-mediumGray mb-4 py-2 px-4' type="text" />

                <label className='mr-auto mb-2'>Date of Birth</label>
                <input className=' rounded-3xl ring-1 ring-mediumGray mb-4 py-2 px-4' type="text" />

                <label className='mr-auto mb-2'>Postcode</label>
                <input className=' rounded-3xl ring-1 ring-mediumGray mb-4 py-2 px-4' type="text" />

                <label className='mr-auto mb-2'>Place of Birth</label>
                <input className=' rounded-3xl ring-1 ring-mediumGray mb-4 py-2 px-4' type="text" />

                <label className='mr-auto mb-2'>Please provide a copy of your driver’s license</label>
                <input className='mb-4 mr-2 py-2 px-4' type="file" />

                <label className='mr-auto mb-2'>Please provide a copy of the details page of your passport</label>
                <input className='mb-4 mr-2 py-2 px-4' type="file" />

                <div className='flex flex-row justify-around'>
                    <input className=' w-5/12 rounded-3xl bg-white text-lightBlue ring-1 ring-mediumGray mx-auto p-2' type="submit" value="Save it for later" />
                    <input className=' w-5/12 rounded-3xl bg-lightBlue text-white ring-1 ring-mediumGray mx-auto p-2' type="submit" value="Continue" />
                </div>
            </form>
            <div>
                <img className='absolute right-5' src={images['chatLogo.svg'].default} />
            </div>
        </section>
    )
}
export default MobileStep2