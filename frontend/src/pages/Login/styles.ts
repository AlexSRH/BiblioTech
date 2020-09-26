import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  .left {
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

  .right {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;

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

    a {
      align-items: center;
      display: flex;
      color: #333;
      font-size: 2rem;
      text-decoration: none;
      font-weight: bold;
      margin-top: 3rem;

      svg {
        margin-left: 1rem;
      }
    }
  }
`
