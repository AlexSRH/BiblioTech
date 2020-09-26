import React, { FormEvent } from 'react'
import { FiLogIn, FiArrowRight } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import { Container } from './styles'
import Button from '../../components/Button'

const Login: React.FC = () => {
  const history = useHistory()

  function handleLogIn(event: FormEvent) {
    event.preventDefault()

    history.push('/books')
  }

  return (
    <Container>
      <div className='left'>
        <h1>Bibliotech</h1>
        <h2>Seu organizador de livros virtual.</h2>
      </div>
      <div className='right'>
        <h3>Fazer Login</h3>

        <form onSubmit={handleLogIn}>
          <input type='text' placeholder='E-mail' />
          <input type='password' placeholder='Senha' />

          <Button>
            Entrar
            <FiLogIn />
          </Button>
        </form>

        <Link to='/register'>
          Criar conta
          <FiArrowRight />
        </Link>
      </div>
    </Container>
  )
}

export default Login
