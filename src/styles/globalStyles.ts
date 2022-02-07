import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --white: #FFF;

    --gray-50: #F7F8FA;
    --gray-100: #E6E8EB;
    --gray-200: #AFB2B1;
    --gray-500: #808080;
    --gray-800: #494D4B;

    --green-400: #77dd77;
    --green-500: #04D361;

    --purple-300: #9F75FF;
    --purple-400: #9164FA;
    --purple-500: #8257E5;
    --purple-800: #6F48C9;
  }
  * html {
    font-size: 62.5%;
  }
  html, body {
    /* text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased; */
    background: var(--gray-50);
  }
  body {
    font-size: 1.6rem;
  }

  /* body {
    width: 100vw;
    height: 100vh;
    background: var(--gray-50);

  } */
  body, input, textarea, button {
    font: 500 1rem Inter, sans-serif;
//    font-family: 'Poppins', sans-serif;
    color: var(--gray-500);
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
//    font-family: Lexend, sans-serif;
    color: #FFFFFF;

  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  button {
    cursor: pointer;
  }

  /* html {
    background: var(--primary);
  } */
  /* :root {
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #33A1F2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2C8ED6;

    --spotify-dark: #FFFFFF
    --spotify-dark-bg-primary: #000000
    --spotify-dark-bg-secondary: #1e1e1e
    --spotify-dark-hover: #282828
  } */

`;
