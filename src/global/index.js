import { createGlobalStyle } from "styled-components";
import resetCSS from "./reset";

export * from "./utils";
export const GlobalStyles = createGlobalStyle`
  body {
    overflow-x: hidden;

    @import url('https://fonts.googleapis.com/css?family=Kanit:100,400,700,900');
    h1, h2, h3, h4, h5, h6, a {
      font-family: 'Kanit', sans-serif;
    }
    p {
      font-family: 'Montserrat', sans-serif;
    }
    /* * {
      cursor: none;
    } */
  }
  #root {
    height: 100%;
  }
  ${resetCSS}
`;
