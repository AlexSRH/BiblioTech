import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Container } from './styles'

const Register: React.FC = () => (
  <Container>
    <div className='left'>
      <Link to='/' className='back-button'>
        <FiArrowLeft />
      </Link>

      <form>
        <input type='text' placeholder='Nome' />
        <input type='text' placeholder='E-mail' />
        <input type='password' placeholder='Senha' />

        <button type='submit'>Entrar</button>
      </form>

      <div></div>
    </div>
    <div className='right'>
      <h1>Bibliotech</h1>
      <h2>Seu organizador de livros virtual.</h2>
    </div>
  </Container>
)

export default Register
