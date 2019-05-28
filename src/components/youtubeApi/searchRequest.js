import regeneratorRuntime from "regenerator-runtime";

const searchQuery=async(q,key,maxResult=10,part="snippet")=>{
   const resp=await fetch(`https://www.googleapis.com/youtube/v3/search?part=${part}&key=${key}&q=${q}&maxResults=${maxResult}`)
   if(resp.status===200){
      return resp.json();
   }else{
       return resp.status;
   }
}

export default searchQuery