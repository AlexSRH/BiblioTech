import React, { FormEvent, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import { Container } from './styles'
import Button from '../../components/Button'
import { useAuth } from '../../contexts/auth'

const Register: React.FC = () => {
  const { register } = useAuth()
  const history = useHistory()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleCreateUser(event: FormEvent) {
    event.preventDefault()

    try {
      await register({ name, email, password })
      history.push('/books')
    } catch {
      alert('Erro no cadastro')
    }
  }

  return (
    <Container>
      <div className='left'>
        <Link to='/' className='back-button'>
          <FiArrowLeft />
        </Link>

        <h3>Registrar</h3>
        <form onSubmit={handleCreateUser}>
          <input
            type='text'
            placeholder='Nome'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='email'
            placeholder='E-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Senha'
            min='8'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button>Entrar</Button>
        </form>

        <div></div>
      </div>
      <div className='right'>
        <h1>Bibliotech</h1>
        <h2>Seu organizador de livros virtual.</h2>
      </div>
    </Container>
  )
}

export default Register
