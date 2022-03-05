import React from "react";
import * as P from './styled';
import useGithub from "../../Hooks";


const Profile = () => {
    
    const { githubState } = useGithub();
    
    
    return(
        <P.BoxProfile>
            <P.BoxImage>
                <P.Image src={githubState.user.avatar} alt='Profile' />
            </P.BoxImage>

            <P.InfoUser>
                    <div className="w100">
                        <span className="name">{githubState.user.name}</span>
                    </div>
                    
                    <div className="w100 itemSubtitle">
                        <span className="subtitle">{githubState.user.bio}</span>
                    </div>
                    
                    <div className="w50 itemSpace">
                        <span className="location">Location: {githubState.user.location}</span>
                    </div>
                    
                    {githubState.user.company &&
                        <div className="w50 itemSpace">
                            <span>Company: {githubState.user.company}</span>
                        </div>
                    }

                    {githubState.user.blog &&
                        <div className="w100 blog">
                            <span><a href={githubState.user.blog}>{githubState.user.blog}</a></span>
                        </div>
                    }

                    
                    <div className="w100 StatusCount">
                        
                        <div className="w25">
                            <p>Followers</p>
                            <span>{githubState.user.followers}</span>
                        </div>
                        
                        <div className="w25">
                            <p>Followings</p>
                            <span>{githubState.user.following}</span>
                        </div>

                        <div className="w25">
                            <p>Gists</p>
                            <span>{githubState.user.public_gists}</span>
                        </div>

                        <div className="w25">
                            <p>Repos</p>
                            <span>{githubState.user.public_repos}</span>
                        </div>

                    
                    </div>{/*w100 StatusCount*/}
            </P.InfoUser>
        
        </P.BoxProfile>
    )
}

export default Profile;