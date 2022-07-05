import { ContentRepos_Starred } from "../../components/ContentRepos_Starred";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { useGithub } from "../../Provider/UserGithub";
import { NotPage } from "../NotPage";


export const Main = () => {
    
    const { searchProfileGithub } = useGithub();
    
    return(
        <>
            <Header />  
            {searchProfileGithub.id && searchProfileGithub.type == 'User'
                
                ?(<><Profile /><ContentRepos_Starred/></>)
                
                :<NotPage title="Procure um usuário..." />
            
            }
        </>
    );
};