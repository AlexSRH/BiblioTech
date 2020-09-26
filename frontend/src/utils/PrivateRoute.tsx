import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

interface PrivateRouteProps extends RouteProps {
  authenticated: boolean
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component,
  authenticated,
  ...rest
}: any) => {
  function render(props: any) {
    if (authenticated) {
      return React.createElement(component, props)
    }

    return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
  }

  return <Route {...rest} render={render} />
}

export default PrivateRoute
