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
  const [selectedBook, setSelectedBook] = useState<Book>(books[0])

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
  }, [token])

  function handleSelectBook(book: Book) {
    setSelectedBook(book)
    setIsModalVisible(true)
  }

  async function handleDeleteBook() {
    try {
      await api.delete(`/books/${selectedBook?.id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })

      const newBooks = books.filter((book) => book.id !== selectedBook.id)
      setBooks(newBooks)
      setIsModalVisible(false)
    } catch {
      alert('Falha em excluir livro!')
    }
  }

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
                handleSelectBook(book)
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
          <span>{selectedBook?.name}</span> <br />
        </ModalCategoryGroup>
        <ModalCategoryGroup>
          <h3>Autor(a): </h3>
          <span>{selectedBook?.author}</span> <br />
        </ModalCategoryGroup>
        {selectedBook?.description && (
          <ModalCategoryGroup>
            <h3>Descrição: </h3> <br />
            <span>{selectedBook.description}</span>
          </ModalCategoryGroup>
        )}
        <ModalFooter>
          <DeleteButton onClick={handleDeleteBook}>Excluir</DeleteButton>
          <CloseButton onClick={closeModal}>Fechar</CloseButton>
        </ModalFooter>
      </Modal>
    </Container>
  )
}

export default Dashboard
