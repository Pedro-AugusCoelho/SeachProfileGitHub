import { useState } from "react";
import { GoMarkGithub, GoSearch } from "react-icons/go";
import { useGithub } from "../../Provider/UserGithub";


export const Header = () => {
    
    const { GetSearchProfile } = useGithub();

    const [ name , setName ] = useState('');

    const handleSearchProfile = async() => {
        if(name){
            await GetSearchProfile(name);
        }
    }
    
    return(
        <div className="w-full flex justify-center border-b-2 border-green-500 px-5">
            
            <header className="w-full max-w-[1360px] h-[50px] flex justify-center items-center gap-1 my-4">
                
                <div className="hidden w-[50px] justify-center items-center hover:opacity-50 cursor-pointer sm:w-[100px] sm:flex">
                    <a href="https://github.com/" target={"_target"} className='w-full flex justify-center'>
                        <GoMarkGithub size={30} />
                    </a>
                </div>
                
                <div className="flex-1">
                    <input 
                    type="text" 
                    placeholder="Procure um usuário do github" 
                    className="w-full h-[30px] rounded px-2 outline-none bg-zinc-700" 
                    onChange={e => setName(e.target.value)}
                    />
                </div>
                
                <button
                onClick={handleSearchProfile}
                className={`w-[80px]  sm:w-[150px] flex justify-center items-center bg-green-500 py-[5px] rounded cursor-pointer`}>
                    <GoSearch size={20} />
                </button>
            
            </header>
        
        </div>
    )
}