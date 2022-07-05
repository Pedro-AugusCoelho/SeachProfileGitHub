import { useEffect, useState } from 'react';
import { GoOctoface } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { useGithub } from '../../Provider/UserGithub';
import { Router } from '../../Routes';




export const ContentRepos_Starred = () => {

    const {active , setActive} = useGithub();
    
    const handleSelected = (name:'Repos'|'Starred') => {
        setActive(name);
    } 

    return(
        <div className="w-full flex justify-center items-center flex flex-col mb-40 px-5">
            <section className="bg-zinc-900 max-w-[1360px] w-full mt-10 rounded-lg flex justify-center">
                
                <div className="w-[100px] p-3 flex items-center justify-center animate-pulse">
                    <GoOctoface size={50} />
                </div>
                
                <div className='flex-1 flex items-center justify-left gap-8 ml-10'>
                    
                    <Link 
                        onClick={() => handleSelected('Repos')}
                        to={'/repos'} 
                        className={`h-full flex items-center border-b-2 transition-colors hover:border-gray-400
                        ${active === 'Repos' ? 'border-green-500 text-green-500 hover:border-green-500' : 'border-transparent'}`}>
                        Repos
                    </Link>
                    
                    <Link 
                        onClick={() => handleSelected('Starred')}
                        to={'/starred'} 
                        className={`h-full flex items-center border-b-2 transition-colors hover:border-gray-400
                        ${active === 'Starred' ? 'border-green-500 text-green-500 hover:border-green-500' : 'border-transparent'}`}>
                        Favoritos
                    </Link>
                
                </div>
            
            </section>

            <Router />
        
        </div>
    )
}