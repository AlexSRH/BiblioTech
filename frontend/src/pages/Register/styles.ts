import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  .right {
    align-items: center;
    background-color: var(--primary-color);
    color: #fff;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 7.2rem;
      font-weight: 400;
      margin-bottom: 2.4rem;
    }

    h2 {
      font-size: 3.2rem;
      font-weight: 400;
      width: 32rem;
    }
  }

  .left {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;

    h3 {
      margin-bottom: 3rem;
      font-size: 3.2rem;
    }

    form {
      width: 60%;
    }

    input {
      background-color: var(--box-color);
      border: none;
      border-radius: 3rem;
      display: block;
      margin-bottom: 1rem;
      font-size: 1.8rem;
      font-weight: bold;
      padding: 3rem;
      width: 100%;
    }
  }

  .back-button {
    align-self: flex-start;
    color: #333;
    cursor: pointer;
    font-size: 3rem;
    margin: 2rem;
    padding: 1rem;
  }
`
