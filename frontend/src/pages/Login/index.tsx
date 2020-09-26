import React from 'react'
import { FiLogIn, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Container } from './styles'

const Login: React.FC = () => (
  <Container>
    <div className='left'>
      <h1>Bibliotech</h1>
      <h2>Seu organizador de livros virtual.</h2>
    </div>
    <div className='right'>
      <h3>Fazer Login</h3>

      <form>
        <input type='text' placeholder='E-mail' />
        <input type='password' placeholder='Senha' />

        <button type='submit'>
          Entrar
          <FiLogIn />
        </button>
      </form>

      <Link to='/register'>
        Criar conta
        <FiArrowRight />
      </Link>
    </div>
  </Container>
)

export default Login
