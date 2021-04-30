import React from 'react'
import MobileStep1 from './MobileStep1'
import MobileStep2 from './MobileStep2'
import MobileStep3 from './MobileStep3'
import style from '../MobileStyle.module.css'

const MobileForm = ({ pageOne, togglePageOne, pageTwo, togglePageTwo, pageThree, togglePageThree }) => {

    function importAll(r) {
        let images = {}
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); })
        return images
    }

    const images = importAll(require.context('../../../icons', false, /\.(png|jpe?g|svg)$/))

    return (
        <form className='mb-8'>
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
            <div className={pageOne ? 'block' : 'hidden'}>
                <MobileStep1 pageOne={pageOne} pageTwo={pageTwo} pageThree={pageThree} togglePageOne={togglePageOne} togglePageTwo={togglePageTwo} togglePageThree={togglePageThree} />
            </div>
            <div className={pageTwo ? 'block' : 'hidden'}>
                <MobileStep2 pageOne={pageOne} pageTwo={pageTwo} pageThree={pageThree} togglePageOne={togglePageOne} togglePageTwo={togglePageTwo} togglePageThree={togglePageThree} />
            </div>
            <div className={pageThree ? 'block' : 'hidden'}>
                <MobileStep3 pageOne={pageOne} pageTwo={pageTwo} pageThree={pageThree} togglePageOne={togglePageOne} togglePageTwo={togglePageTwo} togglePageThree={togglePageThree} />
            </div>
        </form >
    )
}

export default MobileForm