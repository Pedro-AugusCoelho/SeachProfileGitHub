interface NotPageProps {
    title: string;
}

export const NotPage = ({title}:NotPageProps) => {
    return(
        <div className="w-full h-[20vh] flex justify-center items-center px-5">
           
            <div className="w-full max-w-[1360px] flex justify-center items-center">
                {title}
            </div>
        </div>
    )
}