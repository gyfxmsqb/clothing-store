import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`
body {
    padding: 20px 40px;
    font-family: 'Open Sans Condensed', sans-serif;

    @media screen and (max-width: 800px){
        //any screen with 800px and less will get this style
        padding: 10px;
    }
}

a {
    text-decoration: none;
    color: black;
}

* {
    box-sizing: border-box;
}

`