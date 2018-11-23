import {createGlobalStyle} from 'styled-components';
import fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
{ 
    {  
        @font-face {
        font-family: "Elianto-Regular";
        font-style: normal;
        font-weight: normal;
        src: url(${fonts.EliantoRegularTTF}) format("truetype");
        }
    },
    { 
        @font-face {
        font-family: "Ailerons-Typeface";
        font-style: normal;
        font-weight: normal;
        src: url(${fonts.AileronsTypefaceOTF}) format("opentype");
        }
    },
    { 
        @font-face {
        font-family: "Exo 2.0";
        font-style: normal;
        font-weight: normal;
        src: url(${fonts.Exo2TTF}) format("truetype");
        }
    },
    { 
        @font-face {
        font-family: "Exo 2.0, italic";
        font-style: normal;
        font-weight: normal;
        src: url(${fonts.Exo2ItalicTTF}) format("truetype");
        }
    },
        { 
        @font-face {
        font-family: "Exo 2.0, bold";
        font-style: normal;
        font-weight: normal;
        src: url(${fonts.Exo2BoldTTF}) format("truetype");
        }
    },
        { 
        @font-face {
        font-family: "Exo 2.0, bold italic";
        font-style: normal;
        font-weight: normal;
        src: url(${fonts.Exo2BoldItalicTTF}) format("truetype");
        }
    }
}`;

export default GlobalStyle;