import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import Button from '../../components/Button'
import Header from '../../components/Header'
import Main from '../../components/Main'
import { Container } from './styles'

const CreateBook: React.FC = () => (
  <Container>
    <Header>
      <Link to='/books'>
        <FiArrowLeft />
      </Link>

      <h2>Cadastrar novo livro</h2>

      <div />
    </Header>

    <Main>
      <form>
        <label htmlFor='name'>Nome:</label>
        <input type='text' id='name' />

        <label htmlFor='author'>Autor:</label>
        <input type='text' id='author' />

        <label htmlFor='description'>Descrição(Opcional):</label>
        <textarea
          name='description'
          id='description'
          maxLength={255}
        ></textarea>

        <Button>Cadastrar novo livro</Button>
      </form>
    </Main>
  </Container>
)

export default CreateBook
