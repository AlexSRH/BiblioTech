import styled from 'styled-components'

export const Container = styled.button`
  align-items: center;
  background-color: var(--secondary-color);
  border: none;
  border-radius: 3rem;
  color: #fff;
  display: flex;
  font-size: 1.8rem;
  font-weight: bold;
  justify-content: center;
  padding: 3rem;
  width: 100%;
  transition: 0.2s;

  :hover {
    background-color: var(--secondary-hover-color);
  }

  svg {
    margin-left: 1rem;
  }
`
