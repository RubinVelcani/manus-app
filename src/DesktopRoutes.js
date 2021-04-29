import React from 'react'
import { Route, Switch } from 'react-router-dom'

import DesktopHome from './components/desktopVersion/DesktopHome'
import DesktopVision from './components/desktopVersion/DesktopVision'
import DesktopHow from './components/desktopVersion/DesktopHow'
import DesktopContact from './components/desktopVersion/DesktopContact'
import DesktopJoin from './components/desktopVersion/DesktopJoin'
import DesktopProfile from './components/desktopVersion/DesktopProfile'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <DesktopHome />
            </Route>
            <Route path='/vision'>
                <DesktopVision />
            </Route>
            {/* 
            <Route path='/how'>
                <DesktopHow />
            </Route>
            <Route path='/contact'>
                <DesktopContact />
            </Route>
            <Route path='/join'>
                <DesktopJoin />
            </Route>
            <Route path='/profile'>
                <DesktopProfile />
            </Route> */}
        </Switch>
    )
}

export default Routes