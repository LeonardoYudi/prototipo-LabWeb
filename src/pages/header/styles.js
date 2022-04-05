import styled from "styled-components";

export const Container = styled.header`
    padding: 1.3rem 4rem;
    width: 100vw;
    height: 8vh;
    display:  flex;
    justify-content:space-between;
    color: #fff;
    
    span{
        cursor: pointer;
    }

    .blue{
        color:#097b99
    }

    nav{
        display: flex;
        align-items: baseline;
    }

    button{
        background: none;
        border: none;
        color: #a0a0a0;
        font-size: 140%;
        margin-right: 1rem;
        padding: 1rem 2rem;
        cursor: pointer;
        letter-spacing: 0.5px;
    }

    .underline{
        position: relative;
    }

    .underline:after{
        content: "";
        position: absolute;
        background-color: white;
        height: 4px;
        width: 0%;
        left: 0;
        bottom: -1px;
        transition: all 0.3s;
    }

    .underline:hover:after{
        width: 100%;
    }
    
    .underline:hover{
        color: #fff;
    }

    .login{
        background-color: #097b99;
        transition:  all 0.4s;
        border-radius: 1rem;
    }

    .login:hover{
        color: #fff;
    }

`