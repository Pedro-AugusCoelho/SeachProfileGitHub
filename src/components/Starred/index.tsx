import { FormatDate } from '../../hooks/FormatDate';
import { NotPage } from '../../pages/NotPage';
import { useGithub } from '../../Provider/UserGithub';
import { LoadingReposStarred } from '../LoadingRepos_Starred';


export const Starred = () => {
    
    const { starred , loading } = useGithub();
    
    if(starred.length === 0){return <NotPage title='Nenhum Starred encontrado...' />}

    if(loading){return <LoadingReposStarred />}
    
    return(
        <section className='max-w-[1360px] w-full mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {starred.map((item , k) => (
                <div className="w-full flex flex-col bg-zinc-900" key={k}>
                
                    <div className='gap-4 flex justify-center items-center'>
                        
                        <div className='w-[50px] flex items-center justify-center py-2 ml-2'>
                            <img src={item.owner.avatar_url} alt='ImgRepo' className="rounded-full" />
                        </div>

                        <div className='flex-1 flex justify-center items-center bg-zinc-800 mr-2 rounded gap-2 p-2 cursor-pointer hover:bg-zinc-700 transition-colors' >
                           
                            <p className='font-black text-2xl'>
                            {item.owner.login}
                            </p>
                        
                        </div>
                    
                    </div>

                    <div className='p-4'>
                        
                        <p className='font-black text-2xl'>
                            {item.name}
                        </p>
                        
                        <p className='font-semibold text-gray-200 text-sm'>
                            {item.description ?? item.description}
                        </p>
                        
                        <p className='font-normal text-gray-200 text-sm'>
                            Linguagem utilizada: {item.language}
                        </p>
                        
                        <p className='font-normaçl text-gray-200 text-sm'>
                            Ultima vez atualizado: {FormatDate(item.updated_at)}
                        </p>
                    
                    </div>
            
                </div> 
            ))}
        </section>
    )
}