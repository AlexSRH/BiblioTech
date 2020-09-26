import React from 'react'

import GlobalStyle from './assets/styles/global'

import Login from './pages/Login'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Login />
    </>
  )
}

export default App
