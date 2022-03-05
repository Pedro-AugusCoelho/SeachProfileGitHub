import styled from "styled-components";

export const RepositoryItem= styled.div`
    display: inline-block;
    width: 33.3%;
    @media(max-width:720px){
        width: 50%;
    }
    @media(max-width:500px){
        width: 100%;
    }
`;

export const PanelItems = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin: 15px 5px;
    padding: 10px;
    border:5px solid #333;
    background-color: #444;
    color: #fff;
    border-radius: 10px;
    @media(max-width:500px){
        margin: 5px 5px;
    }
`;

export const Title = styled.p`
    font-size: max(16px , 1.3vw);
    padding-bottom: 10px;
`;

export const Name  = styled.p`
    font-family: 'Lato', sans-serif;
    font-size: max(14px , 1.3vw);
    padding-bottom: 5px;
`;

export const Link  = styled.a`
    font-family: 'Indie Flower', arial;
    font-size: max(14px , 1.3vw);
    font-weight: bold;
    padding-bottom: 0px;
    cursor: pointer;
    color:#1E90FF;
`;