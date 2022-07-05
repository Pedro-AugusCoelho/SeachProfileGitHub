export const FormatDate = (data:string) =>{
    return new Date(data).toLocaleDateString('pt-BR',{day:'2-digit' , month:'long' , year:'numeric'});
}