import React, { useState } from 'react'
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

const Dashboard: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  function closeModal() {
    setIsModalVisible(false)
  }

  return (
    <Container>
      <Header>
        <h2>Olá Alexsandro!</h2>

        <Link to='/'>
          <FiLogOut />
        </Link>
      </Header>

      <Main>
        <ul>
          <Item
            onClick={() => {
              setIsModalVisible(true)
            }}
          >
            <h2>Harry Potter</h2>
            <h3>J. K. Rowling</h3>
          </Item>
          <Item>
            <h2>Harry Potter</h2>
            <h3>J. K. Rowling</h3>
          </Item>
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
