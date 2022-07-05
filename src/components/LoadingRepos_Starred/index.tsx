import { GoRepoClone, GoRocket } from "react-icons/go"


export const LoadingReposStarred = () => {
    return(
        <section className='max-w-[1360px] w-full mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-pulse'>
                <div className="w-full flex flex-col bg-zinc-900">
                    <div className='gap-4 flex justify-center items-center'>
                        <div className='w-[50px] flex items-center justify-center py-2 ml-2'>
                            <GoRocket size={50}/>
                        </div>

                        <a className='flex-1 flex justify-left items-center bg-zinc-800 mr-2 rounded p-2' >
                            <GoRepoClone size={20} className='ml-2' />
                        </a>
                    </div>
                    <div className='h-[15vh]'></div>
                </div>
                <div className="w-full flex flex-col bg-zinc-900">
                    <div className='gap-4 flex justify-center items-center'>
                        <div className='w-[50px] flex items-center justify-center py-2 ml-2 '>
                            <GoRocket size={50}/>
                        </div>

                        <a className='flex-1 flex justify-left items-center bg-zinc-800 mr-2 rounded p-2' >
                            <GoRepoClone size={20} className='ml-2' />
                        </a>
                    </div>
                    <div className='h-[15vh]'></div>
                </div>
                <div className="w-full flex flex-col bg-zinc-900">
                    <div className='gap-4 flex justify-center items-center'>
                        <div className='w-[50px] flex items-center justify-center py-2 ml-2'>
                            <GoRocket size={50}/>
                        </div>

                        <a className='flex-1 flex justify-left items-center bg-zinc-800 mr-2 rounded p-2' >
                            <GoRepoClone size={20} className='ml-2' />
                        </a>
                    </div>
                    <div className='h-[15vh]'></div>
                </div>
        </section>
    )
}