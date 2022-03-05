import React, { useEffect, useState } from "react";
import RepositoryItem from "../RepositoryItem";
import * as P from './styled';
import useGithub from "../../Hooks";

const Repositories = () => {
    
    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [showList , setShowList] = useState(false);
    const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

    useEffect(() => {
        if (githubState.user.login) {
          getUserRepos(githubState.user.login);
          getUserStarred(githubState.user.login);
        }
        setHasUserForSearchrepos(githubState.repositories);
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [githubState.user.login]);

    const handleShowRepos = () => {
        setShowList(false);
    }

    const handleShowStarred = () => {
        setShowList(true);
    }
    
    return(
        <>
            {hasUserForSearchrepos ? (
                <P.BoxRepositories>
                    
                    <P.BoxBtn>
                        <P.BtnRepos showListSeleted={showList}  onClick={handleShowRepos}>
                            <span>Repositories</span>
                        </P.BtnRepos>
                        
                        <P.BtnStarred showListSeleted={showList} onClick={handleShowStarred}>
                            <span>Starred</span>
                        </P.BtnStarred>
                    
                    </P.BoxBtn>
        
                    {showList === false ?
                        <P.BoxPainel>
                            {githubState.repositories.map((item:any) => (
                                <RepositoryItem
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.full_name}
                                    fullName={item.full_name}
                                    language={item.language}
                                />
                            ))
                            }
                        </P.BoxPainel>
                        :
                        <P.BoxPainel>
                            {githubState.starred.map((item:any) => (
                                <RepositoryItem
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.html_url}
                                    fullName={item.full_name}
                                    language={item.language}
                                />
                            ))
                            }
                        </P.BoxPainel>
                    }
            
                </P.BoxRepositories>
                ) : <></>
            }
        </>
    )
}

export default Repositories;