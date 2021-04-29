import React from 'react'

const ProfilePayment = ({ showPayment }) => {

    function importAll(r) {
        let images = {}
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); })
        return images
    }

    const images = importAll(require.context('../../icons', false, /\.(png|jpe?g|svg)$/))

    return (
        <div className={showPayment ? 'text-darkGray bg-white h-screen block' : 'h-screen hidden'}>
            <img className='absolute right-5' src={images['chatLogo.svg'].default} />
            <div className='w-full flex flex-col items-center mb-12'>
                <h3 className='py-12'><strong>Payment</strong> Information</h3>
                <div className='w-4/5 text-center text-white bg-lightBlue py-4'>
                    <div className='w-4/5 flex flex-col items-center mx-auto'>
                        <img src={images['creditCardWhite.svg'].default} />
                        <h1 className='bold text-2xl my-2'>Stripe is not connected</h1>
                        <p className='text-sm mb-6'>
                            You will not be able to take any jobs without connecting
                        </p>
                        <input className=' w-5/12 rounded-3xl bg-white text-lightBlue font-medium mx-auto p-2' type="submit" value="Connect" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePayment