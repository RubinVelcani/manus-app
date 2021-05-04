import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DesktopStep1 from './DesktopStep1'
import DesktopStep2 from './DesktopStep2'
import DesktopStep3 from './DesktopStep3'
import style from '../DesktopStyle.module.css'

const DesktopForm = () => {

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
        <form>
            <div className='w-4/5 flex flex-row items-center justify-between font-medium tracking-tight mb-12 mx-auto 2xl:justify-around'>
                <div onClick={togglePageOne} className='w-36 flex flex-col items-center'>
                    <h4 className={pageOne ? 'uppercase text-black font-bold mb-2.5' : 'uppercase mb-2.5'}>
                        Personal Information
                        </h4>
                    <Link to='/contact'>
                        <img className='absolute right-5' src={images['chatLogo.svg'].default} />
                    </Link>
                    <span className={pageOne ? style.formDotSelected_border : style.formDotUnSelected_border}>
                        <span className={pageOne ? style.formDotSelected : style.formDot} />
                    </span>
                </div>
                <div onClick={togglePageTwo} className='w-36 flex flex-col items-center'>
                    <h4 className={pageTwo ? 'uppercase text-black font-bold mb-2.5' : 'uppercase mb-2.5'}>
                        Professional
                        </h4>
                    <span className={pageTwo ? style.formDotSelected_border : style.formDotUnSelected_border}>
                        <span className={pageTwo ? style.formDotSelected : style.formDot} />
                    </span>
                </div>
                <div onClick={togglePageThree} className='w-36 flex flex-col items-center'>
                    <h4 className={pageThree ? 'uppercase text-black font-bold mb-2.5' : 'uppercase mb-2.5'}>
                        Declarations
                        </h4>
                    <span className={pageThree ? style.formDotSelected_border : style.formDotUnSelected_border}>
                        <span className={pageThree ? style.formDotSelected : style.formDot} />
                    </span>
                </div>
            </div>
            <div className={pageOne ? 'block' : 'hidden'}>
                <DesktopStep1 pageOne={pageOne} pageTwo={pageTwo} pageThree={pageThree} togglePageOne={togglePageOne} togglePageTwo={togglePageTwo} togglePageThree={togglePageThree} />
            </div>
            <div className={pageTwo ? 'block' : 'hidden'}>
                <DesktopStep2 pageOne={pageOne} pageTwo={pageTwo} pageThree={pageThree} togglePageOne={togglePageOne} togglePageTwo={togglePageTwo} togglePageThree={togglePageThree} />
            </div>
            <div className={pageThree ? 'block' : 'hidden'}>
                <DesktopStep3 pageOne={pageOne} pageTwo={pageTwo} pageThree={pageThree} togglePageOne={togglePageOne} togglePageTwo={togglePageTwo} togglePageThree={togglePageThree} />
            </div>
        </form>
    )
}

export default DesktopForm