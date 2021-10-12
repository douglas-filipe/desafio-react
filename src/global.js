import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        background: #232C33;
        width: 100vw;
        height: 100vh;
        color: white;
    }

    .Back{
        margin: 20px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: white;
        border-bottom: 1px solid #5EA0FD;
        width: 100px;
    }

    .Back svg{
        margin-right: 10px;
        color: #3185FC;
        width: 30px;
        height: 30px;
    }

`

export default GlobalStyle