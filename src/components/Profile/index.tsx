import { FormatDate } from "../../hooks/FormatDate";
import { useGithub } from "../../Provider/UserGithub";
import { ItemShow } from "../ItemShow";


export const Profile = () => {
    
    const { searchProfileGithub: Profile  , loading} = useGithub();

        if(loading){
            return(
                <main className="w-full flex justify-center items-center px-5">
                    <section className="w-full max-w-[1360px] flex justify-center items-top bg-zinc-900 p-5 mt-10 gap-8 rounded-xl flex-col md:flex-row">
                        <div className="w-full md:w-[300px] flex items-center justify-center">
                            <div className="w-[150px] h-[150px] ml:w-[300px] ml:h-[300px] rounded-full bg-zinc-800 animate-pulse" />
                        </div>
                        <div className="flex-1">
                            <div className="h-[40vh]"></div>
                        </div>
                    </section>
                </main>
            )
        }

        return(
            <main className="w-full flex justify-center items-center px-5">
               
               <section className="w-full max-w-[1360px] flex justify-center items-top bg-zinc-900 p-5 mt-10 gap-8 rounded-xl flex-col md:flex-row">
                    
                    <div className="w-full md:w-[300px] flex items-center justify-center">
                        <img 
                            src={Profile.avatar_url}
                            alt={Profile.name} 
                            className="w-[150px] h-[150px] ml:w-[300px] ml:h-[300px] rounded-full" />
                    </div>
                    
                    <div className="flex-1 flex flex-col">
                    
                        <div className="flex flex-col items-center text-center ml:items-start ml:text-left">
                            <p className="text-3xl mml:text-4xl font-bold">
                                {Profile.name}
                            </p>
                            
                            <p className="text-sm mml:text-lg font-semibold text-gray-300 mb-5">
                                {Profile.bio ? Profile.bio : ''}
                            </p>

                            {Profile.location 
                            
                            ?   
                            (
                                <p className="text-xs mml:text-base font-light  text-gray-200 mb-3">
                                    {Profile.location ? Profile.location : ''}
                                    </p>
                            ) 
                            
                            : ''}
                            
                            
                            {Profile.blog 
                            
                            ?   
                            (
                                <a href={`https:www.${Profile.blog}`} className="text-sm mml:text-base  text-gray-200 mb-3 hover:text-gray-500">
                                    {Profile.blog}
                                </a>
                            ) 
                            
                            : ''}
                            
                            <p className="text-sm mml:text-base  text-gray-200 mb-3">
                                Criado dia: {FormatDate(Profile.created_at)}
                            </p>
                        
                        </div>
                    
                        <div className="grid grid-cols-1 ml:grid-cols-2 justify-center items-center mt-3">
                            <ItemShow 
                                title="Seguidor"
                                count={Profile.followers}
                                icon={0}
                            />
    
                            <ItemShow 
                                title="Seguindo"
                                count={Profile.following}
                                icon={1}
                            />
    
                            <ItemShow 
                                title="Repositórios"
                                count={Profile.public_repos}
                                icon={2}
                            />
    
                            <ItemShow 
                                title="Gists"
                                count={Profile.public_gists}
                                icon={3}
                            />
    
                        </div>
                    
                    </div>
               
               </section>
            
            </main>
        );
};