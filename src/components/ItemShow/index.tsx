import { GoOrganization , GoPerson , GoRepo , GoGist } from "react-icons/go";



interface ItemShowned {
    title:string;
    icon:number;
    count:number;
}

export const ItemShow = ({count,icon,title}:ItemShowned) => {
    return(
        
        <div className="flex w-full py-2">
        
            <div className="flex justify-center lg:justify-start items-center flex-1 gap-2">
                {icon === 0 && <GoOrganization size={30} />}
                {icon === 1 && <GoPerson size={30} />}
                {icon === 2 && <GoRepo size={30} />}
                {icon === 3 && <GoGist size={30} />}
                <span>{title}</span>
                <span>{count}</span>
            </div>
        
        </div>
    )
}