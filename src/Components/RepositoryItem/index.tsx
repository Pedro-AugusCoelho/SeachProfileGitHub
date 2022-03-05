import React from "react";
import * as P from './styled';

interface Props {
    name:string,
    linkToRepo:string,
    fullName:string,
    language:string,
}

const RepositoryItem = ({name , linkToRepo , fullName , language}:Props) => {

    return(
        <P.RepositoryItem>
            <P.PanelItems>
                <P.Title>{name}</P.Title>
                {language && <P.Name>Language: {language}</P.Name>}
                <P.Link href={linkToRepo}>{fullName}</P.Link>
            </P.PanelItems>
        </P.RepositoryItem>
    )
}

export default RepositoryItem;