import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from '../pages/Login'
import Register from '../pages/Register'

const AuthRoutes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/register' component={Register} />
    </Switch>
  </BrowserRouter>
)

export default AuthRoutes
