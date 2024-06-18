import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
    
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    background-image: url(bg-intro-desktop.png);
    background-size: cover;
    background-color: #FF7979;
    margin: 0;
    font-family: sans-serif;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }  
`;
