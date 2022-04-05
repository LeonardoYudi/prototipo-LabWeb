import styled from "styled-components";


export const MainHome = styled.main`
    color: white;
    width: 100vw;
    height: 80vh;
    display: flex;
    

    div{
        width: 40%;
        display: flex;
        align-items: center;
        
        .centro{
            display: flex;
            flex-direction: column;
            width: 70%;
            align-items: flex-start;
            margin-left: 4rem;
            h2{
                font-size: 4rem;
                margin-bottom: 0.5rem;
            }

            h3{
                font-size: 2rem;
                font-weight: 300;
                margin-bottom: 2rem;
            }
            
            button{
                padding: 1rem 2rem;
                background-color: #097b99;
                font-weight: 700;
                font-size: 90%;
                color: #a0a0a0;
                border: none;
                border-radius: 0.5rem;
                transition: all 0.3s;
            }
            button:hover{
                cursor: pointer;
                color: white;
            }
        }
    }
    .right{
        width: 60%;
        align-items: center;
        justify-content: center;
        img{
            max-width: 80%;
            border-radius: 2rem;
        }
    }
`

