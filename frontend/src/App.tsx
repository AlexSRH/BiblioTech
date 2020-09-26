import React from 'react'

import GlobalStyle from './assets/styles/global'
import Routes from './routes'

import { AuthProvider } from './contexts/auth'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Routes />
    </AuthProvider>
  )
}

export default App
