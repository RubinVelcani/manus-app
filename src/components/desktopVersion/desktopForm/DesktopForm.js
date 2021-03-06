import React, { useState } from 'react'

import DesktopStep1 from './DesktopStep1'
import DesktopStep2 from './DesktopStep2'
import DesktopStep3 from './DesktopStep3'

const DesktopForm = () => {

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
        <section>
            <div className='w-4/5 flex flex-row items-center justify-between font-medium tracking-tight mb-12 mx-auto 2xl:justify-around'>
                <div onClick={togglePageOne} className='w-36 flex flex-col items-center'>
                    
                    <h4 className={pageOne ? 'uppercase text-black font-bold mb-2.5' : 'uppercase mb-2.5'}>
                        Personal Information
                        </h4>
                    <span className={pageOne ? 'flex items-center justify-center w-4 h-4 rounded-full border-2 border-mediumGray cursor-pointer' : 'flex items-center justify-center w-4 h-4 border-2 rounded-full border-white cursor-pointer'}>
                        <span className={pageOne ? 'w-2 h-2 rounded-full bg-mediumBlue inline-block' : 'w-2 h-2 rounded-full bg-mediumGray inline-block'} />
                    </span>
                </div>
                <div onClick={togglePageTwo} className='w-36 flex flex-col items-center'>
                    <h4 className={pageTwo ? 'uppercase text-black font-bold mb-2.5' : 'uppercase mb-2.5'}>
                        Professional
                        </h4>
                    <span className={pageTwo ? 'flex items-center justify-center w-4 h-4 rounded-full border-2 border-mediumGray cursor-pointer' : 'flex items-center justify-center w-4 h-4 border-2 rounded-full border-white cursor-pointer'}>
                        <span className={pageTwo ? 'w-2 h-2 rounded-full bg-mediumBlue inline-block' : 'w-2 h-2 rounded-full bg-mediumGray inline-block'} />
                    </span>
                </div>
                <div onClick={togglePageThree} className='w-36 flex flex-col items-center'>
                    <h4 className={pageThree ? 'uppercase text-black font-bold mb-2.5' : 'uppercase mb-2.5'}>
                        Declarations
                        </h4>
                    <span className={pageThree ? 'flex items-center justify-center w-4 h-4 rounded-full border-2 border-mediumGray cursor-pointer' : 'flex items-center justify-center w-4 h-4 border-2 rounded-full border-white cursor-pointer'}>
                        <span className={pageThree ? 'w-2 h-2 rounded-full bg-mediumBlue inline-block' : 'w-2 h-2 rounded-full bg-mediumGray inline-block'} />
                    </span>
                </div>
            </div>
            <div className={pageOne ? 'block' : 'hidden'}>
                <DesktopStep1 togglePageTwo={togglePageTwo} />
            </div>
            <div className={pageTwo ? 'block' : 'hidden'}>
                <DesktopStep2 togglePageThree={togglePageThree} />
            </div>
            <div className={pageThree ? 'block' : 'hidden'}>
                <DesktopStep3 />
            </div>
        </section>
    )
}

export default DesktopForm