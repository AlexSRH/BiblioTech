import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  form {
    align-items: center;
    display: flex;

    flex-direction: column;
    justify-content: center;
    width: 80%;

    label {
      font-size: 1.8rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    input {
      display: block;
      border: none;
      border-radius: 3rem;
      background-color: var(--box-color);
      font-weight: bold;
      margin-bottom: 1rem;
      padding: 2rem;
      width: 100%;
    }

    textarea {
      display: block;
      border: none;
      border-radius: 3rem;
      background-color: var(--box-color);
      font-weight: bold;
      margin-bottom: 1rem;
      max-height: 18rem;
      min-height: 1.8rem;
      padding: 2rem;
      width: 100%;
      resize: vertical;
    }
  }
`
