import React from 'react'

import GlobalStyle from './assets/styles/global'
import AuthRoutes from './routes'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AuthRoutes />
    </>
  )
}

export default App
