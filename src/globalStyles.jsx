import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #EBEBEB;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  a {
    text-decoration: none;
    color: #000000;
  }
  a:hover {
    text-decoration: none;
    color: #000000;
  }
  a:visited {
    text-decoration: none;
    color: #1d1d1d;
  }
  a:focus {
    text-decoration: none;
    color: #1d1d1d;
  }
`;
 
export default GlobalStyle;