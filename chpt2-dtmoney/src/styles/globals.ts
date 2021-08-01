import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;

    --text-title: #363F5F;
    --text-body: #969CB3;
    
    --shape: #FFF;
    
    --red: #E52E4D;
    --blue: #5429CC;
    --blue-light: #6933FF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: 'border-box';
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background-color: var(--background-color);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: .6;
    cursor: not-allowed;
  }
`;