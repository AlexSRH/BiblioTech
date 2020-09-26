import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import CreateBook from './pages/CreateBook'

const AuthRoutes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/books/new' component={CreateBook} />
      <Route path='/books' component={Dashboard} />
    </Switch>
  </BrowserRouter>
)

export default AuthRoutes
