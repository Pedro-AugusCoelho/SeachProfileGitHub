import styled from "styled-components";


export const BoxHeader = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 2% auto;
    @media(max-width:370px){
        display: block;
    }
`;

export const BoxInput = styled.div`
    flex:5;
    input{
        border: 1px solid #222;
        border-radius: 8px;
        width: 100%;
        height: 44px;
        padding: 8px;
        font-weight: 500;
    }
`;

export const BoxSearch = styled.div`
    flex:1;
    display:flex;
    justify-content:center;
    button{
        width: 90%;
        height: 44px;
        background-color: #444;
        padding: 8px 16px;
        border: 5px solid #333;
        border-radius: 5px;
        span{
            font-weight: bold;
            color: #ffff;
        }
    }
    @media(max-width:600px){
        flex:2.5;
    }
    @media(max-width:370px){
        margin-top: 5%;
        button{
            width: 100%;
        }
    }
`;