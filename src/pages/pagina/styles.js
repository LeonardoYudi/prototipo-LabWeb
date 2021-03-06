import styled from "styled-components";

export const MainPagina = styled.main`
    background-color: white;
    height: auto;
    display: flex;
`

export const Aside = styled.aside`
    width: 17%;
    height: 80vh;
    background-color: #101010;
`

export const Elementos = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-end;
   padding-top: 4rem;
   
   button{
        background-color: #101010;
        color:white;
        width: 80%;
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 2rem;
        border: none;
        font-size: 1rem;
        text-align: start;
        cursor: pointer;
    }

    button:hover{
        background-color: #383434;
    }

    span{
        color:#696b6e;
        margin-bottom: 1rem;
        font-weight: bold;
    }

    .start{
        align-self: flex-start;
        margin-left: 10%;
    }
   
    .sair:hover{
        background-color: #dc1c24;
    }
`

export const Right = styled.div`
    width: 83%;
    display: flex;
    justify-content: center;
`