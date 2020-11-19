import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 20px 'Lato', sans-serif;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    color: #283048;
  }

  p {
    text-align: justify;
    line-height: 32px;
    color: #283048;
  }

  p + p {
    margin-top: 10px;
  }

  button {
    cursor: pointer;
  }
`;
