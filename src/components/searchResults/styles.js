import styled from "styled-components";

export const Container = styled.section`

    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    h1{
        text-align: center
    }

    .Musics{
        margin: 0;
        line-height: 30px;
    }

    button{
        display: flex;
        align-items: center;
        border: none;
        margin-top: 20px;
        color: white;
        height: 40px;
        background: none;
        border-bottom: 1px solid #AAB9C5;
        cursor: pointer;
    }

    button svg{
        color: #1DEDA0;
        margin-right: 10px;
        width: 20px;
        height: 20px;
    }


`