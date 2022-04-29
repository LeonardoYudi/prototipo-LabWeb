import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Centro = styled.div`
    background-color: whitesmoke;
    width: 60%;
    height: 65%;
    border-radius: 2rem;
    display: flex;
`

export const Left = styled.div`
    border-radius: 2rem 0rem 0rem 2rem;
    background-color: #097b99;
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem ;

    h2{
        color: #fff;
        font-size: 300%;
        font-weight: 400;
    }

    p{
        color: #fff;
        width: 60%;
    }
`
export const Right = styled.div`
    padding: 1rem;
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    
    h2{
        font-size: 300%;
        color: #097b99;
        margin-bottom: 1rem;
    }

    h3{
        margin-bottom: 0.8rem;
    }

    form{
        width: 85%;
    }

    label{
        font-size: 130%;
        font-weight: 300;
    }

    input{
        font-size: 140%;
        width: 80%;
        border: none;
        outline: none;
        padding: 0.8rem;
        background-color: white;
        border-radius: 0.5rem;
    }

    .input-label{
        background-color: white;
        padding: 0.5px 1rem;
        margin-bottom: 0.6rem;
    }

    .password{
        display: flex;
        justify-content: flex-end;
        button{
            border: none;
            font-weight: bold;
            transition: all 0.3s;
        }
        button:hover{
            cursor: pointer;
            text-decoration: underline;
        }
    }

    .login-btn{
        width: 100%;
        margin-top: 1rem;
        padding: 0.7rem 1rem;
        font-size: 130%;
        font-weight: bolder;
        border: none;
        color: white;
        background-color: #097b99;
        border-radius: 0.5rem;
        cursor: pointer;
    }

    .cadastrar{
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        p{
            
        }

        button{
            background-color: none;
            border: none;
            font-weight: 700;
            font-size: 1rem;
        }

        button:hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }
`
