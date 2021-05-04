import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileStep1 from './MobileStep1'
import MobileStep2 from './MobileStep2'
import MobileStep3 from './MobileStep3'
import style from '../MobileStyle.module.css'

const MobileForm = () => {

    function importAll(r) {
        let images = {}
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); })
        return images
    }

    const images = importAll(require.context('../../../icons', false, /\.(png|jpe?g|svg)$/))

    const [pageOne, setPageOne] = useState(true)
    const [pageTwo, setPageTwo] = useState(false)
    const [pageThree, setPageThree] = useState(false)

    function togglePageOne() {
        setPageOne(true)
        setPageTwo(false)
        setPageThree(false)
    }

    function togglePageTwo() {
        setPageOne(false)
        setPageTwo(true)
        setPageThree(false)
    }

    function togglePageThree() {
        setPageOne(false)
        setPageTwo(false)
        setPageThree(true)
    }

    return (
        <form className='rounded-3xl bg-white mt-5 mb-8'>
            <h2 className={pageOne ? 'block font-bold tracking-tight text-darkGray uppercase mx-auto my-5' : 'font-bold tracking-tight text-darkGray uppercase mx-auto my-5 hidden'}>Personal information</h2>
            <h2 className={pageTwo ? 'block font-bold tracking-tight text-darkGray uppercase mx-auto my-5' : 'font-bold tracking-tight text-darkGray uppercase mx-auto my-5 hidden'}>Professional</h2>
            <h2 className={pageThree ? 'block font-bold tracking-tight text-darkGray uppercase mx-auto my-5' : 'font-bold tracking-tight text-darkGray uppercase mx-auto my-5 hidden'}>Declarations</h2>
            <Link to='/contact'>
                <img className='absolute right-20 cursor-pointer' src={images['chatLogo.svg'].default} />
            </Link>
            <div className='w-20 flex flex-row items-center justify-around mx-auto'>
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