import styled from 'styled-components'

export const Container = styled.header`
  align-items: center;
  background-color: var(--primary-color);
  color: #fff;
  display: flex;
  position: fixed;
  top: 0;
  flex: 1;
  justify-content: space-around;
  height: 7rem;
  width: 100%;

  .sign-out {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  svg {
    color: white;
    font-size: 2.4rem;
  }
`
