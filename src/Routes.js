import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/mobileVersion/Home'

const Routes = ({ showMobileMenu, toggleMobileMenu }) => {
    return (
        <Switch>
            <Route exact path='/' component={() => <Home showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />} />
        </Switch>
    )
}

export default Routes