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

export const BoxProfile = styled.div`
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #333;
    
    border:4px solid transparent;
    border-image: linear-gradient(to right, red, green, yellow, blue) 1;
    animation: ${BorderAnimation} 10s alternate infinite ease;

    @media(max-width:780px){
        display: block;
    }
`;

export const BoxImage = styled.div`
    flex:1.2;
    @media(max-width:780px){
        width:100%;
        display:flex;
        justify-content:center;
    }
`;

export const Image = styled.img`
    width: 300px;
    margin: 15px;
    border-radius: 50%;
    @media(max-width:780px){
        margin: 2% 0;
    }
    @media(max-width:400px){
        width: 200px;
    }
`;

export const InfoUser = styled.section`
    flex:3;
    margin:2%;
    text-align: center;
    span{
        font-weight: 500;
        font-size: max(14px , 0.2vw + 1em);
        color:#FFF;
    }
    p{
        font-size: max(14px , 0.2vw + 1em);
        color:#FFF;
    }
    .itemSubtitle{
        margin-top: 1%;
        margin-bottom: 3%;
    }
    .itemSpace{
        margin: 10px;
        padding: 5px;
        @media(max-width:780px){
            margin: 0;
            padding: 5px;
        }
    };
    .w50{
        display: inline;
        width: 50%;
        @media(max-width:780px){
            width:100%;
            display: block;
        }
    };
    .w25{
        display: inline-block;
        width: 25%; 
        @media(max-width:425px){
            width: 50%;
            margin: 5px 0;
        }
    }
    .w100{
        width: 100%;
    };
    .name{
        font-family: 'Indie Flower', arial;
        font-size: max(20px , 1.5vw + 1em);
        font-weight: bold;
        color:#FFF;
    }
    .subtitle{
        font-family: 'Indie Flower', arial;
        font-size: max(14px , 0.5vw + 1em);
        font-weight: bold;
        color:#DDD;
    }
    .blog{
        margin-top:2%;
    }
    .StatusCount{
        margin-top:5%;
        padding: 5px;
        border-width: 3px;
        border-image: linear-gradient(to right, red, green, yellow, blue) 1;
        animation: ${BorderAnimation} 10s alternate infinite ease;
    }
`;