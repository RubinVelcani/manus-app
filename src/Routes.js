import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/home/Home'
import Layout from './components/Layout'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
        </Switch>
    )
}

export default Routes