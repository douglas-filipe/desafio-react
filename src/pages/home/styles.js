import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: flex-start;
    margin: auto;

    form{
        margin: 30px auto;
        display: flex;
        width: 270px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    form button{
        background: #5DB7DE;
        outline: none;
        border: none;
        height: 30px;
        border-radius: 20px;
        padding: 0 10px;
        margin-top: 15px;
        cursor: pointer;
    }

    form input{
        padding: 0;
        height: 30px;
        border: none;
        outline: none;
        background: #F2F5EA;
        border-radius: 20px;
        padding-left: 10px;
        width: 200px;
    }

    input::placeholder{
        color: red
    }

    .Playlist{
        color: white;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center
    }

    .Playlist svg{
        width: 40px;
        height: 40px;
    }

    .Number{
        background: #E75A7C;
        margin-left: 5px;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        font-weight: bold;
        font-size: 0.8rem;
    
    }

    @media(min-width: 768px){

        form input{
            width: 270px;
        }

    }

`