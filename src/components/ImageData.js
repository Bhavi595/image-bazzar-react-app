import React ,{useState , useEffect} from "react";
import axios from "axios";

const ImageData = ({setData})=>{
    
    const baseUrl ="https://api.unsplash.com/search/photos/";
    const access_key = "Client-ID 6pvd4ABCjN7ReB4uH47Ly93mCFbrQfrlcREwNlOTw9k";
    const [searchvalue , setSearchValue] = useState();

    useEffect(()=>{fetchData(null,"Randa")},[])

     async function fetchData(e , firstsearch){
      if(e){
        e.preventDefault();
      }
    

       try{
        let response = await axios.get(baseUrl ,{
            headers:{"Accept-Version":"v1","Authorization":access_key },
            params:{"query":searchvalue||firstsearch}
        })
        console.log(response.data);
        setData(response.data.results);
        setSearchValue("");
         
       }
       catch(error){
        console.log(error);
       }
       
    }
    return <div>
     <form onSubmit={fetchData}>
        <input placeholder="Search photos..." onChange={e=>setSearchValue(e.target.value)} value={searchvalue}  type="text"/>
        <button type="submit">Search</button>
     </form>
    </div>
}

export default ImageData;