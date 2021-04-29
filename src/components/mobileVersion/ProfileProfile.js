import React from 'react'

const ProfileProfile = ({ showProfile }) => {

    function importAll(r) {
        let images = {}
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); })
        return images
    }

    const images = importAll(require.context('../../icons', false, /\.(png|jpe?g|svg)$/))

    return (
        <div className={showProfile ? 'text-darkGray bg-white h-screen block' : 'h-screen hidden'}>
            <img className='absolute right-5' src={images['chatLogo.svg'].default} />
            <div className='w-full flex flex-col items-center mb-12'>
                <h3 className='py-12'><strong>Edit</strong> Profile</h3>
                <form className='w-11/12 flex flex-col items-start'>
                    Description
                        <textarea className='w-full rounded-3xl bg-profileGray mb-6 mt-3 py-3 px-6' rows='6'
                        placeholder='I am an experienced domestic plumber, gas engineer. Fast, clean and reliable. 
                        I can find solutions for your plumbing issues. I am based in Fitzrovia, London but work everywhere in North London' />
                        Based in
                        <input className='w-full rounded-3xl bg-profileGray py-4 px-8 my-3' type='text' placeholder='Fitzovia, London' />
                        Top Skills
                        <div className='flex flex-row mt-3'>
                        <div className='relative'>
                            <img className='absolute right-3 -top-3.5' src={images['skillRemover.svg'].default} />
                            <h3 className='ring-2 ring-mediumBlue text-mediumBlue font-semibold rounded-full py-2 px-4 mr-3'>Waterworks</h3>
                        </div>
                        <div className='relative'>
                            <img className='absolute right-3 -top-3.5' src={images['skillRemover.svg'].default} />
                            <h3 className='ring-2 ring-mediumBlue text-mediumBlue font-semibold rounded-full py-2 px-4 mr-3'>Pipes</h3>
                        </div>
                        <div className='relative'>
                            <img className='absolute right-3 -top-3.5' src={images['skillRemover.svg'].default} />
                            <h3 className='ring-2 ring-mediumBlue text-mediumBlue font-semibold rounded-full py-2 px-4'>Pressure Tests</h3>
                        </div>
                    </div>
                    <input className='w-full rounded-3xl bg-profileGray py-4 px-8 my-4 mb-10' type='text' placeholder='Enter Top Skill...' />
                    <input className=' w-5/12 rounded-3xl bg-lightBlue text-white ring-1 ring-mediumGray mx-auto p-2' type="submit" value="Update" />
                </form>
            </div>
        </div>
    )
}

export default ProfileProfile