const creating=async ()=>{
    try{
        const mem=await axios.get("https://jsonplaceholder.typicode.com/comments?postId=1");
        console.log(mem.data);
    }
    catch(error){
        console.log(error);
    }
}
creating();  