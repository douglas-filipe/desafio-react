import styled from "styled-components";

export const Container = styled.section`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    p{
        margin: 0;
        padding: 0;
        line-height: 30px;
    }
    h1{
        text-align: center
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(1, 1, 1, 0.3);
        color: white;
        border: none;
        height: 40px;
        width: 100px;
        margin: 15px auto;
        border-radius: 20px;
        transition: 500ms;
        cursor: pointer;

    }

    button:hover{
        background: rgba(1, 1, 1, 0.5);
    }

    button svg{
        width: 30px;
        height: 30px;
        margin-right: 10px;
        color: #DA4167;
    }

    @media(min-width: 768px){
        width: 700px;
        margin: auto;
    }

`

export const Music = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    margin: 20px auto;
    box-shadow: 1px 1px 2px #fff;
    padding: 10px;
    

`