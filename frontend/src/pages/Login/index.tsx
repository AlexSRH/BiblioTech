import React, { FormEvent, useState } from 'react'
import { FiLogIn, FiArrowRight } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import { Container } from './styles'
import Button from '../../components/Button'
import { useAuth } from '../../contexts/auth'

const Login: React.FC = () => {
  const history = useHistory()
  const { singIn } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogIn(event: FormEvent) {
    event.preventDefault()

    try {
      await singIn({ email, password })
      history.push('/books')
    } catch (err) {
      alert('Falha no login. Cheque sua senha!')
    }
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
          <input
            type='text'
            placeholder='E-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

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
