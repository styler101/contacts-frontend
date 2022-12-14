import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NewContact from '../pages/NewContact'
import EditContact from '../pages/EditContact'
import PageNotFound from '../errors/PageNotFound'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/new' component={NewContact} />
      <Route path='/edit/:id' component={EditContact} />
      <Route path='*' component={PageNotFound} />
    </Switch>
  )
}

export default Routes
