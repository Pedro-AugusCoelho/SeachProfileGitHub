import styled , { keyframes } from "styled-components";

const BorderAnimation = keyframes`
        0% { border-image: linear-gradient(   0deg, red, green, yellow, blue) 1;};
       10% { border-image: linear-gradient(  36deg, red, green, yellow, blue) 2;};
       20% { border-image: linear-gradient(  72deg, red, green, yellow, blue) 1;};
       30% { border-image: linear-gradient( 108deg, red, green, yellow, blue) 1;};
       40% { border-image: linear-gradient( 144deg, red, green, yellow, blue) 1;};
       50% { border-image: linear-gradient( 180deg, red, green, yellow, blue) 1;};
       60% { border-image: linear-gradient( 216deg, red, green, yellow, blue) 1;};
       70% { border-image: linear-gradient( 252deg, red, green, yellow, blue) 1;};
       80% { border-image: linear-gradient( 288deg, red, green, yellow, blue) 1;};
       90% { border-image: linear-gradient( 324deg, red, green, yellow, blue) 1;};
      100% { border-image: linear-gradient(   0deg, red, green, yellow, blue) 1;};
`;

interface Props{
    showListSeleted:boolean;
}


export const BoxRepositories = styled.div`
    width: 95%;
    margin: 2.5% auto;
`;

export const BoxBtn = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media(max-width:470px){
        justify-content: center;
    }
`;

const btn = styled.button<Props>`
    border-radius: 10px;
    padding: 10px;
    span{
        text-transform: uppercase;
        font-size: max(12px , 1vw);
        font-weight: 600;
        color: #fff;
    }
`;

export const BtnRepos = styled(btn)`
    background-color: ${props => props.showListSeleted ? '#444' :'#777' };
    border:5px solid  ${props => props.showListSeleted ? '#333' :'#666' };
`;

export const BtnStarred = styled(btn)`
    margin-left: 1.5%;
    background-color: ${props => props.showListSeleted ? '#777' :'#444' };
    border:5px solid  ${props => props.showListSeleted ? '#666' :'#333' };
`;

export const BoxPainel =styled.div`
    width: 100%;
    margin-top: 1.5%;
`;