
import { GoRocket , GoRepoClone } from 'react-icons/go';
import { FormatColorRocket } from '../../hooks/FormatColorRocket';
import { FormatDate } from '../../hooks/FormatDate';
import { NotPage } from '../../pages/NotPage';
import { useGithub } from '../../Provider/UserGithub';
import { LoadingReposStarred } from '../LoadingRepos_Starred';


export const Repositories = () => {
    
    const { repositories , loading } = useGithub();

    if(repositories.length === 0){return <NotPage title='Nenhum Repositório encontrado...' />}

    if(loading){return <LoadingReposStarred />}
    
    return(
        <section className='max-w-[1360px] w-full mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {repositories.map((item , k) => (
                
                <div className="w-full flex flex-col bg-zinc-900" key={k}>
                
                    <div className='gap-4 flex justify-center items-center'>
                        
                        <div className='w-[50px] flex items-center justify-center py-2 ml-2'>
                            <GoRocket size={50} color={FormatColorRocket(item.language)}/>
                        </div>

                        <a href={item.clone_url} target='_blank' className='flex-1 flex justify-center items-center bg-zinc-800 mr-2 rounded gap-2 p-2 cursor-pointer hover:bg-zinc-700 transition-colors' >
                            <GoRepoClone size={20} />
                            Acesse o repositório
                        </a>
                    
                    </div>

                    <div className='p-4'>
                    
                        <p className='font-black text-2xl mb-2'>
                            {item.name}
                        </p>
                        
                        <p className='font-semibold text-gray-200 text-base'>
                            {item.description ?? item.description}
                        </p>
                        
                        <p className='font-normal text-gray-200 text-sm'>
                           {item.language ? `Linguagem utilizada: ${item.language}` : '' }
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