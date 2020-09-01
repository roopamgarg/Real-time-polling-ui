import { notification } from "antd";

export default (io:any,id:string,option:number) => {
    if(!localStorage.getItem(id)){
        localStorage.setItem(id,"true");
        io.emit('add-vote',JSON.stringify({id,option}));
        notification.success({message:"Thanks for Your Vote!"})
        
    }else{
        notification.error({message:"You have Already Voted"})
    }   
}