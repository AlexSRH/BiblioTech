import React, { FormEvent, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import Button from '../../components/Button'
import Header from '../../components/Header'
import Main from '../../components/Main'
import { useAuth } from '../../contexts/auth'
import api from '../../services/api'
import { Container } from './styles'

const CreateBook: React.FC = () => {
  const history = useHistory()
  const { token } = useAuth()

  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescriptions] = useState('')

  async function addBook(event: FormEvent) {
    event.preventDefault()

    try {
      await api.post(
        '/books',
        {
          name,
          author,
          description
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      history.push('/books')
    } catch (err) {
      alert('Falha ao criar o livro')
    }
  }

  return (
    <Container>
      <Header>
        <Link to='/books'>
          <FiArrowLeft />
        </Link>

        <h2>Cadastrar novo livro</h2>

        <div />
      </Header>

      <Main>
        <form onSubmit={addBook}>
          <label htmlFor='name'>Nome:</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor='author'>Autor:</label>
          <input
            type='text'
            id='author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <label htmlFor='description'>Descrição(Opcional):</label>
          <textarea
            name='description'
            id='description'
            maxLength={255}
            value={description}
            onChange={(e) => setDescriptions(e.target.value)}
          ></textarea>

          <Button>Cadastrar novo livro</Button>
        </form>
      </Main>
    </Container>
  )
}

export default CreateBook
