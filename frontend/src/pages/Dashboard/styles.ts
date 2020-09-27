import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;


  ul {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`

export const Item = styled.li`
  background-color: var(--box-color);
  border-radius: 2rem;
  cursor: pointer;
  list-style: none;
  margin: 1rem;
  padding: 2rem;
  width: 80%;

  h3 {
    color: #777;
  }

  &:last-child {
    padding: 0;

    a {
      color: #333;
      display: flex;
      font-size: 2.6rem;
      justify-content: center;
      padding: 2rem;
      width: 100%;
    }
  }
`

export const ModalCategoryGroup = styled.div`
  margin-bottom: 1rem;

  h3 {
    display: inline;
    color: #666;
  }

  span {
    color: #333;
    font-weight: bold;
  }
`

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2.4rem;
`

export const DeleteButton = styled.button`
  background-color: #f04242;
  border: none;
  border-radius: 1.6rem;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  padding: 1.6rem;
  margin-right: 1rem;
`

export const CloseButton = styled.button`
  background-color: var(--primary-color);
  border: none;
  border-radius: 1.6rem;
  padding: 1.6rem;
  color: #fff;
  cursor: pointer;

  font-weight: bold;
`
