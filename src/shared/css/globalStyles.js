
import { createGlobalStyle } from 'styled-components';
import fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Elianto-Regular";
    font-style: normal;
    font-weight: normal;
    src: url(${fonts.EliantoRegularTTF}) format("truetype");
  }
`;

export default GlobalStyle;