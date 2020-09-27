import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { FiLogOut, FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import Main from '../../components/Main'

import {
  Container,
  Item,
  ModalCategoryGroup,
  ModalFooter,
  DeleteButton,
  CloseButton
} from './styles'
import { useAuth } from '../../contexts/auth'
import api from '../../services/api'

interface Book {
  id: number
  name: string
  author: string
  description?: string
}

const Dashboard: React.FC = () => {
  const { user, token, singOut } = useAuth()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [books, setBooks] = useState<Book[]>([])

  function closeModal() {
    setIsModalVisible(false)
  }

  useEffect(() => {
    async function getBooks() {
      const response = await api.get<Book[]>('/books', {
        headers: { Authorization: `Bearer ${token}` }
      })

      setBooks(response.data)
    }

    getBooks()
  }, [])

  return (
    <Container>
      <Header>
        <h2>Olá {`${user?.name}`}!</h2>

        <button onClick={singOut} className='sign-out'>
          <FiLogOut />
        </button>
      </Header>

      <Main>
        <ul>
          {books.map((book) => (
            <Item
              onClick={() => {
                setIsModalVisible(true)
              }}
              key={book.id}
            >
              <h2>{book.name}</h2>
              <h3>{book.author}</h3>
            </Item>
          ))}
          <Item>
            <Link to='/books/new'>
              <FiPlus />
            </Link>
          </Item>
        </ul>
      </Main>

      <Modal
        isOpen={isModalVisible}
        onRequestClose={closeModal}
        style={{
          overlay: { backgroundColor: '#00000099' },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '40%',
            borderRadius: 20,
            backgroundColor: 'var(--box-color)',
            padding: 50
          }
        }}
        contentLabel='Harry Potter'
      >
        <ModalCategoryGroup>
          <h3>Nome: </h3>
          <span>Harry Potter</span> <br />
        </ModalCategoryGroup>
        <ModalCategoryGroup>
          <h3>Autor(a): </h3>
          <span>J. K. Rowling</span> <br />
        </ModalCategoryGroup>
        <ModalCategoryGroup>
          <h3>Descrição: </h3> <br />
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            voluptatibus ipsam, nulla officia qui incidunt rem eos vero dicta
            laudantium ex repellat quos labore architecto molestiae nobis!
            Veritatis, laboriosam quo.
          </span>
        </ModalCategoryGroup>
        <ModalFooter>
          <DeleteButton>Excluir</DeleteButton>
          <CloseButton onClick={closeModal}>Fechar</CloseButton>
        </ModalFooter>
      </Modal>
    </Container>
  )
}

export default Dashboard
