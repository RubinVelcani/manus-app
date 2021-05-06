import React, { useState } from 'react'

const SkillUnit = ({ skillName }) => {

    const [exist, setExist] = useState(true)

    function importAll(r) {
        let images = {}
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); })
        return images
    }

    function toggleExist() {
        setExist(false)
    }

    const images = importAll(require.context('../../icons', false, /\.(png|jpe?g|svg)$/))
    return (
        <div className={exist ? 'block' : 'hidden'}>
            <div className='relative'>
                <img onClick={toggleExist} className='absolute right-3 -top-3.5 cursor-pointer' src={images['skillRemover.svg'].default} />
                <h3 className='ring-2 ring-mediumBlue text-mediumBlue font-semibold rounded-full py-2 px-4 mr-3'>{skillName}</h3>
            </div>
        </div>
    )
}

export default SkillUnit