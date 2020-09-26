import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 62.5%;

    --primary-color: #37393A;
    --secondary-color: #77B6EA;
    --secondary-hover-color: #6BA3D1;
    --background-color: #E8EEF2;
    --box-color: #C7D3DD;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background-color: var(--background-color)
  }

  body, input, button, textarea {
    font: 500 1.6rem Roboto;
    color: #333;
  }
`
