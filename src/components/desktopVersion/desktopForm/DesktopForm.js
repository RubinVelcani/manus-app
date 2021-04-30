import React from 'react'
import DesktopStep1 from './DesktopStep1'
import DesktopStep2 from './DesktopStep2'
import DesktopStep3 from './DesktopStep3'

const DesktopForm = ({ pageOne, togglePageOne, pageTwo, togglePageTwo, pageThree, togglePageThree }) => {

    function importAll(r) {
        let images = {}
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); })
        return images
    }

    const images = importAll(require.context('../../../icons', false, /\.(png|jpe?g|svg)$/))

    return (
        <form>
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