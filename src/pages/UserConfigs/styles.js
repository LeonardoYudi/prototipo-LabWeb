import styled from "styled-components";

export const Configs = styled.div`
    color: black;
    display:  flex;
    margin-top: 20vh;
    flex-direction: column;
    height: 30vh;
    align-items: center;
    h2{
        font-size: 150%;
    }

    button{
        padding: 1rem 2rem;
        border-radius: 1rem;
        border: none;
        margin-right: 0.5rem;
        cursor: pointer;
    }

    button:hover{
        background-color: lightblue;
    }

    .apagar:hover{
        color: white;
        background-color: #dc1c24;
    }
`

export const Campos = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
    
    form{
        display: flex;
        flex-direction: column;
    }
    label{
        font-size: 110%;
        margin-bottom: 0.5rem;
    }

    .inp{
        display: flex;
        flex-direction: column;
    }

    input{
        font-size: 110%;
        margin-bottom: 0.5rem;
        outline: none;
        padding: 0.5rem;
        border-radius: 1rem;
    }

    .apagar-C{
        margin-left: 5rem;
    }

`