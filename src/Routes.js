import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/mobileVersion/Home'
import OurVision from './components/mobileVersion/OurVision'
import HowItWorks from './components/mobileVersion/HowItWorks'
import ContactUs from './components/mobileVersion/ContactUs'
import JoinManus from './components/mobileVersion/JoinManus'
import TradesmanProfile from './components/mobileVersion/TradesmanProfile'

const Routes = ({ showMobileMenu, toggleMobileMenu }) => {
    return (
        <Switch>
            <Route exact path='/' component={() => <Home showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />} />
            <Route path='/vision' component={() => <OurVision showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />} />
            <Route path='/how' component={() => <HowItWorks showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />} />
            <Route path='/contact' component={() => <ContactUs showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />} />
            <Route path='/join' component={() => <JoinManus showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />} />
            <Route path='/profile' component={() => <TradesmanProfile showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />} />
        </Switch>
    )
}

export default Routes