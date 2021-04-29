import React from 'react'

const ProfileAccount = ({ showAccount }) => {

    function importAll(r) {
        let images = {}
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); })
        return images
    }

    const images = importAll(require.context('../../icons', false, /\.(png|jpe?g|svg)$/))

    return (
        <div className={showAccount ? 'text-darkGray bg-white h-screen block' : 'h-screen hidden'}>
            <img className='absolute right-5' src={images['chatLogo.svg'].default} />
            <div className='w-full flex flex-col items-center mb-12'>
                <h3 className='py-12'><strong>Account</strong> Details</h3>
            </div>
        </div>
    )
}

export default ProfileAccount