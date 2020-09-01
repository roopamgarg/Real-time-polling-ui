export default (io:any,id:string) => {
    io.emit('get-poll',id);
}