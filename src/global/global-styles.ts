import { createGlobalStyle } from "styled-components";

// return a styled-components createGlobalStyle
export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 16px;
        font-family: 'Inter', sans-serif;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    button {
        border: none;
        outline: none;
        cursor: pointer;
    }
    input {
        border: none;
        outline: none;
    }
    textarea {
        border: none;
        outline: none;
    }
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }
    p {
        margin: 0;
    }
    img {
        max-width: 100%;
        height: auto;
    }
    `;
