import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import PrivateRoute from './utils/PrivateRoute'

import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import CreateBook from './pages/CreateBook'
import { useAuth } from './contexts/auth'

const Routes: React.FC = () => {
  const { signed } = useAuth()
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/register' component={Register} />
        <PrivateRoute
          path='/books/new'
          authenticated={signed}
          component={CreateBook}
        />
        <PrivateRoute
          path='/books'
          authenticated={signed}
          component={Dashboard}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
