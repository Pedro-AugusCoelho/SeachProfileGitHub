export const FormatColorRocket = (Linguagem:string) => {
    if(Linguagem === 'TypeScript'){
        return '#06b6d4';
    }else if(Linguagem === 'JavaScript'){
        return '#facc15';
    }else if(Linguagem === 'HTML'){
        return '#f97316';
    }else if(Linguagem === 'CSS'){
        return '#9333ea';
    }else if(Linguagem === 'Python'){
        return '#1e40af';
    }else if(Linguagem === 'Vue'){
        return '#22c55e';
    }else{
        return '#f472b6';
    }
}