import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    font-size: 16px;
    font-family: 'Consola', sans-serif;
  }

  body {
    line-height: 1.6;
    background-color: #232527;

    a {
      text-decoration: none;
    }
  }

  .container-fluid {
    width: 100%;
    padding: 0;
  }
`;

export default GlobalStyle;
