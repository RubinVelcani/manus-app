import React from 'react'
import { useForm } from "react-hook-form"


const DesktopStep1 = ({ togglePageTwo }) => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='w-4/5 flex flex-col font-medium text-formGray mt-4 mb-16 mx-auto'>
                <h2 className='uppercase text-lg font-semibold text-darkGray mb-14'>About you</h2>
                <div className='w-full flex flex-col mb-10'>
                    <div className='flex flex-row items-center justify-between mb-5'>
                        <h3 className='text-lg'>Gender</h3>
                        <label>
                            <input type="radio" value="Male" name="gender" {...register("gender", { required: true })} /> Male
                            </label>
                        <label>
                            <input type="radio" value="Female" name="gender" {...register("gender", { required: true })} /> Female
                            </label>
                        <label>
                            <input type="radio" value="Other" name="gender" {...register("gender", { required: true })} /> Other
                            </label>

                    </div>
                    {errors.gender && <h3 className='text-mediumBlue'>Please select an option</h3>}
                </div>
                <div className='w-full flex flex-row justify-between'>
                    <div className='w-5/12 flex flex-col mb-10'>
                        <label className='text-lg mb-5'>First Name</label>
                        <div className='flex flex-col'>
                            <input className='rounded-3xl ring-1 ring-mediumGray mb-5 py-2 px-4 outline-none focus-within:ring-mediumBlue' {...register("firstName", { required: true, pattern: { value: /^[a-zA-Z ]+$/ } })} />
                            {errors.firstName && <h3 className='text-mediumBlue'>This field is required</h3>}
                        </div>
                    </div>
                    <div className='w-5/12 flex flex-col mb-10'>
                        <label className='text-lg mb-5'>Last Name</label>
                        <div className='flex flex-col'>
                            <input className='rounded-3xl ring-1 ring-mediumGray mb-5 py-2 px-4 outline-none focus-within:ring-mediumBlue' {...register("lastName", { required: true, pattern: { value: /^[a-zA-Z ]+$/ } })} />
                            {errors.lastName && <h3 className='text-mediumBlue'>This field is required</h3>}
                        </div>
                    </div>
                </div>
                <p className='font-normal mb-5'>
                    <span className='text-lg font-bold tracking-wide'>Upload a profile image: </span>
                        Add a personal touch to your profile page by adding a photo of yourself taken against a white wall/background.
                        Max siwe 500KB (Ideal Dimensions 500x500 px).
                    </p>
                <div className='flex flex-row justify-between items-baseline mb-10'>
                    <div className='flex flex-col'>
                        <input className='rounded-3xl ring-1 ring-mediumGray mb-5 mr-2 py-2 px-4 outline-none focus-within:ring-mediumBlue' type="file" {...register("imageUpload", { required: true })} />
                        {errors.imageUpload && <h3 className='text-mediumBlue'>Please upload a picture</h3>}
                    </div>
                </div>
                <div className='w-full flex flex-col'>
                    <div className='w-full flex flex-row justify-between'>
                        <div className='w-5/12 flex flex-col mb-10'>
                            <label className='text-lg mr-auto mb-5'>Home Address</label>
                            <div className='flex flex-col'>
                                <input className=' rounded-3xl ring-1 ring-mediumGray mb-5 py-2 px-4 outline-none focus-within:ring-mediumBlue' {...register("address", { required: true, pattern: { value: /^[a-zA-Z ]+$/ } })} />
                                {errors.address && <h3 className='text-mediumBlue'>This field is required</h3>}
                            </div>
                        </div>
                        <div className='w-5/12 flex flex-col mb-10'>
                            <label className='text-lg mr-auto mb-5'>Mobile Number</label>
                            <div className='flex flex-col'>
                                <input className=' rounded-3xl ring-1 ring-mediumGray mb-5 py-2 px-4 outline-none focus-within:ring-mediumBlue' {...register("phoneNumber", { required: true, pattern: { value: /^[+]*[0-9]{1,4}[0-9]{7}$/ } })} />
                                {errors.phoneNumber && <h3 className='text-mediumBlue'>This field is required</h3>}
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-row justify-between'>
                        <div className='w-5/12 flex flex-col mb-10'>
                            <label className='text-lg mr-auto mb-5'>Date of Birth</label>
                            <div className='flex flex-col'>
                                <input className=' rounded-3xl ring-1 ring-mediumGray mb-5 py-2 px-4 outline-none focus-within:ring-mediumBlue' {...register("birthday", { required: true, pattern: { value: /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ } })} />
                                {errors.birthday && <h3 className='text-mediumBlue'>This field is required</h3>}
                            </div>
                        </div>
                        <div className='w-5/12 flex flex-col mb-10'>
                            <label className='text-lg mr-auto mb-5'>Postcode</label>
                            <div className='flex flex-col'>
                                <input className=' rounded-3xl ring-1 ring-mediumGray mb-5 py-2 px-4 outline-none focus-within:ring-mediumBlue' {...register("postCode", { required: true, pattern: { value: /^([0-9]{5})([-]{1}[0-9]{4})?$/ } })} />
                                {errors.postCode && <h3 className='text-mediumBlue'>This field is required</h3>}
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-row justify-between'>
                        <div className='w-5/12 flex flex-col mb-10'>
                            <label className='text-lg mr-auto mb-5'>Place of Birth</label>
                            <div className='flex flex-col'>
                                <input className=' rounded-3xl ring-1 ring-mediumGray mb-5 py-2 px-4 outline-none focus-within:ring-mediumBlue' {...register("birthPlace", { required: true, pattern: { value: /^[a-zA-Z ]+$/ } })} />
                                {errors.birthPlace && <h3 className='text-mediumBlue'>This field is required</h3>}
                            </div>
                        </div>
                        <div className='w-5/12 flex flex-col mb-10'>
                            <label className='text-lg mr-auto mb-5'>ID</label>
                            <div className='flex flex-col'>
                                <input className=' rounded-3xl ring-1 ring-mediumGray mb-5 py-2 px-4 outline-none focus-within:ring-mediumBlue' {...register("id", { required: true, pattern: { value: /^(?=.*[a-z])[a-z0-9]{8,20}$/i } })} />
                                {errors.id && <h3 className='text-mediumBlue'>This field is required</h3>}
                            </div>
                        </div>
                    </div>
                </div>
                <label className='text-lg tracking-wide mr-auto mb-5 mt-0.5'>Please provide a copy of your driver’s license</label>
                <div className='flex flex-col mb-10'>
                    <input className='pl-6 mb-5 outline-none focus-within:ring-mediumBlue' type="file" {...register("licenceUpload", { required: true })} />
                    {errors.licenceUpload && <h3 className='text-mediumBlue'>Please upload a valid copy of your driver's licence</h3>}
                </div>
                <label className='text-lg tracking-wide mb-5 mr-auto'>Please provide a copy of the details page of your passport</label>
                <div className='flex flex-col mb-10'>
                    <input className='pl-6 mb-5 outline-none focus-within:ring-mediumBlue' type="file" {...register("passportUpload", { required: true })} />
                    {errors.passportUpload && <h3 className='text-mediumBlue'>Please upload a valid copy of your passport</h3>}
                </div>
                <div className='flex flex-col mb-10'>
                    <label className='text-lg tracking-wide mr-auto mb-5'>Nationality</label>
                    <select className='w-5/12 rounded-3xl ring-1 ring-mediumGray mt-2 mb-9 py-2 px-4 outline-none focus-within:ring-mediumBlue' {...register("nationality", { required: true })}>
                        <option hidden value="">Select your nationality</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    {errors.nationality && <h3 className='text-mediumBlue'>This field is required</h3>}
                </div>

                <div className='flex flex-row mt-10'>
                    <input className=' w-1/4 rounded-3xl bg-white text-mediumBlue font-semibold ring-2 ring-mediumBlue mr-5 p-2 cursor-pointer focus:outline-none' type='submit' value='Save it for later' />
                    <button onClick={() => { onSubmit(); togglePageTwo() }} className=' w-1/4 rounded-3xl bg-mediumBlue text-white ring-2 ring-mediumBlue p-2 cursor-pointer focus:outline-none'>Continue</button>
                </div>
            </div>
        </form>
    )
}

export default DesktopStep1