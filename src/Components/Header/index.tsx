import React, { useState } from "react";
import * as P from './styled';
import useGithub from "../../Hooks";


const Header = () => {
    
    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState<any>();


    const submitGetUser = () => {
        if (usernameForSearch){
                return getUser(usernameForSearch); 
        }
    };
    
    return(
        <P.BoxHeader>
            
            <P.BoxInput>
                
                <input 
                type='text' 
                placeholder='Procure aqui um usuário do Github'
                onChange={(e) => setUsernameForSearch(e.target.value)}
                />
           
            </P.BoxInput>
            
            <P.BoxSearch>
                
                <button type="submit" onClick={submitGetUser}>
                    <span>Search</span>
                </button>
            
            </P.BoxSearch>
        
        
        </P.BoxHeader>
    )
}

export default Header;