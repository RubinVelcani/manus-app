import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MobileHome from './components/mobileVersion/MobileHome'
import MobileVision from './components/mobileVersion/MobileVision'
import MobileHow from './components/mobileVersion/MobileHow'
import MobileContact from './components/mobileVersion/MobileContact'
import MobileJoin from './components/mobileVersion/MobileJoin'
import MobileProfile from './components/mobileVersion/MobileProfile'

const Routes = ({ showMobileMenu, toggleMobileMenu }) => {
    return (
        <Switch>
            <Route exact path='/' component={() => <MobileHome showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />} />
            <Route path='/vision' component={() => <MobileVision showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />} />
            <Route path='/how' component={() => <MobileHow showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />} />
            <Route path='/contact' component={() => <MobileContact showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />} />
            <Route path='/join' component={() => <MobileJoin showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />} />
            <Route path='/profile' component={() => <MobileProfile showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />} />
        </Switch>
    )
}

export default Routes