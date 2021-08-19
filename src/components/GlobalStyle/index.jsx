import { withTheme, createGlobalStyle } from "styled-components";

import "assets/css/reset.css";
import "assets/font/font.css";

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;
    font-family: 'Consola', sans-serif;
  }

  body {
    line-height: 1.6;
    background-color: ${(props) => props.theme.colors.gray900};

    a {
      text-decoration: none;
    }
  }

  .container-fluid {
    width: 100%;
    padding: 0;
  }
`;

export default withTheme(GlobalStyle);
