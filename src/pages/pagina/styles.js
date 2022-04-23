import styled from "styled-components";

export const MainPagina = styled.main`
    background-color: white;
    height: auto;
    display: flex;
`

export const Aside = styled.aside`
    width: 17%;
    height: 100%;
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
    .sair{
        margin-top: 80%;
    }
    .sair:hover{
        background-color: #dc1c24;
    }
`

export const Right = styled.div`
    width: 83%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    button{
        padding: 1rem;
        border: none;
        border-radius: 2rem;
        font-weight: bold;
    }

    button:hover{
        opacity: 0.7;
        cursor: pointer;
    }
`