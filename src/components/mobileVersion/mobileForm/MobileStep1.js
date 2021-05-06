import React from 'react'
import { useForm } from "react-hook-form";


const MobileStep1 = ({ togglePageTwo }) => {

    function importAll(r) {
        let images = {}
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); })
        return images
    }

    const images = importAll(require.context('../../../icons', false, /\.(png|jpe?g|svg)$/))

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <section className='w-11/12 flex flex-col items-center text-xs text-gray mx-auto py-8'>
                <div className='w-4/5 flex flex-col text-left text-formGray mt-4 mb-16 mx-auto'>
                    <div className='w-full flex flex-col mb-10'>
                        <div className='flex flex-row justify-between items-center mb-5'>
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
                        {errors.gender && <h3 className='text-mediumBlue border-b border-mediumBlue'>Please select an option</h3>}
                    </div>
                    <label className='text-lg mr-auto mb-5'>First Name</label>
                    <input className=' rounded-3xl ring-1 ring-mediumGray mb-4 py-2 px-4 outline-none focus-within:ring-mediumBlue' {...register("firstName", { required: true, pattern: { value: /^[a-zA-Z ]+$/ } })} />
                    {errors.firstName && <h3 className='text-mediumBlue border-b border-mediumBlue mb-10'>This field is required</h3>}

                    <label className='text-lg mr-auto mb-5'>Last Name</label>
                    <input className=' rounded-3xl ring-1 ring-mediumGray mb-4 py-2 px-4 outline-none focus-within:ring-mediumBlue' {...register("lastName", { required: true, pattern: { value: /^[a-zA-Z ]+$/ } })} />
                    {errors.lastName && <h3 className='text-mediumBlue mb-10 border-b border-mediumBlue'>This field is required</h3>}

                    <p className='mb-4'>
                        <span className='font-bold'>Upload profile image: </span>
                        Add a personal touch to your profile page by adding a photo of yourself taken against a white wall/background.
                        Max siwe 500KB (Ideal Dimensions 500x500 px).
                    </p>
                    <input className='rounded-3xl ring-1 ring-mediumGray mb-4 mr-2 py-2 px-4 outline-none focus-within:ring-mediumBlue' type="file" {...register("imageUpload", { required: true })} />
                    {errors.imageUpload && <h3 className='text-mediumBlue border-b border-mediumBlue mb-10'>Please select an option</h3>}

                    <label className='text-lg mr-auto mb-5'>Home Address</label>
                    <input className=' rounded-3xl ring-1 ring-mediumGray mb-4 py-2 px-4 outline-none focus-within:ring-mediumBlue' {...register("address", { required: true, pattern: { value: /^[a-zA-Z ]+$/ } })} />
                    {errors.address && <h3 className='text-mediumBlue border-b border-mediumBlue mb-10'>This field is required</h3>}

                    <label className='text-lg mr-auto mb-5'>Mobile Number</label>
                    <input className=' rounded-3xl ring-1 ring-mediumGray mb-4 py-2 px-4 outline-none focus-within:ring-mediumBlue' {...register("phoneNumber", { required: true, pattern: { value: /^[+]*[0-9]{1,4}[0-9]{7}$/ } })} />
                    {errors.phoneNumber && <h3 className='text-mediumBlue border-b border-mediumBlue mb-10'>This field is required</h3>}

                    <label className='text-lg mr-auto mb-5'>Date of Birth</label>
                    <input className=' rounded-3xl ring-1 ring-mediumGray mb-4 py-2 px-4 outline-none focus-within:ring-mediumBlue' {...register("birthday", { required: true, pattern: { value: /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/ } })} />
                    {errors.birthDay && <h3 className='text-mediumBlue border-b border-mediumBlue mb-10'>This field is required</h3>}

                    <label className='text-lg mr-auto mb-5'>Postcode</label>
                    <input className=' rounded-3xl ring-1 ring-mediumGray mb-4 py-2 px-4 outline-none focus-within:ring-mediumBlue' {...register("postCode", { required: true, pattern: { value: /^([0-9]{5})([\-]{1}[0-9]{4})?$/ } })} />
                    {errors.postCode && <h3 className='text-mediumBlue border-b border-mediumBlue mb-10'>This field is required</h3>}

                    <label className='text-lg mr-auto mb-5'>Place of Birth</label>
                    <input className=' rounded-3xl ring-1 ring-mediumGray mb-4 py-2 px-4 outline-none focus-within:ring-mediumBlue' {...register("birthPlace", { required: true, pattern: { value: /^[a-zA-Z ]+$/ } })} />
                    {errors.birthPlace && <h3 className='text-mediumBlue border-b border-mediumBlue mb-10'>This field is required</h3>}

                    <label className='text-lg mr-auto mb-5'>Id</label>
                    <input className=' rounded-3xl ring-1 ring-mediumGray mb-4 py-2 px-4 outline-none focus-within:ring-mediumBlue' {...register("id", { required: true, pattern: { value: /^(?=.*[a-z])[a-z0-9]{8,20}$/i } })} />
                    {errors.id && <h3 className='text-mediumBlue border-b border-mediumBlue mb-10'>This field is required</h3>}

                    <label className='text-lg mr-auto mb-5'>Please provide a copy of your driver’s license</label>
                    <input className='mb-4 mr-2 py-2 px-4 outline-none focus-within:ring-mediumBlue' type="file" {...register("licenceUpload", { required: true })} />
                    {errors.licenceUpload && <h3 className='text-mediumBlue border-b border-mediumBlue mb-10'>Please upload a valid copy of your driver's licence</h3>}

                    <label className='text-lg mr-auto mb-5'>Please provide a copy of the details page of your passport</label>
                    <input className='mb-4 mr-2 py-2 px-4 outline-none focus-within:ring-mediumBlue' type="file" {...register("passportUpload", { required: true })} />
                    {errors.passportUpload && <h3 className='text-mediumBlue border-b border-mediumBlue mb-10'>Please upload a valid copy of your passport</h3>}

                    <div className='flex flex-col mb-10'>
                        <label className='text-lg tracking-wide mr-auto mb-5'>Nationality</label>
                        <select className='w-1/2 rounded-3xl ring-1 ring-mediumGray mt-2 mb-9 py-2 px-4 outline-none focus-within:ring-mediumBlue' {...register("nationality", { required: true })}>
                            <option hidden value="">Select your nationality</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                        {errors.nationality && <h3 className='text-mediumBlue border-b border-mediumBlue'>Please select an option</h3>}
                    </div>

                    <div className='flex flex-row justify-around mt-10'>
                        <input className=' w-5/12 rounded-3xl bg-white text-lightBlue ring-1 ring-mediumGray mx-auto p-2 cursor-pointer outline-none focus-within:ring-mediumBlue' type='submit' value='Save it for later' />
                        <button onClick={() => { onSubmit(); togglePageTwo() }} className=' w-5/12 rounded-3xl bg-lightBlue text-white ring-1 ring-mediumGray mx-auto p-2 cursor-pointer outline-none focus-within:ring-mediumBlue'>Continue </button>
                    </div>
                </div>
            </section>
        </form>
    )
}
export default MobileStep1