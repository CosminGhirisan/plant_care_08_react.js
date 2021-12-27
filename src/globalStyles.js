import { createGlobalStyle } from "styled-components";
import * as palette from './Variables';

const GlobalStyle = createGlobalStyle`

*, *::before, *::after, h1, h2, h3, h4, h5, h6 {
   margin: 0;
   padding: 0;
   
}

h1, h2, h3, h4, h5, h6 {
   display: inline-block;
   font-family: 'Josefin Sans', sans-serif;
}

body {
   margin: 0;
   padding: 0;
   overflow-x: hidden;
   font-family: 'Roboto', sans-serif;
   font-size: ${palette.FONTSIZE_M};
   font-weight: 300;
   background: linear-gradient(160deg, rgba(17,73,59,1) 7%, rgba(183,250,233,.4) 100%);
}
`

export default GlobalStyle;