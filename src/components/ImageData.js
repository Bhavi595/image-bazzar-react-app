import React ,{useState , useEffect} from "react";
import axios from "axios";
const baseUrl ="https://api.unsplash.com/search/photos/";
const access_key =`Client-ID ${process.env.REACT_APP_ACCESS_KEY}`;





const ImageData = ({data, setData})=>{
    
  
    const [searchvalue , setSearchValue] = useState("");
    const [page , setPage] = useState(1);

    useEffect(()=>{fetchData(null,"Random","submit")},[])


    useEffect(()=>{setPage(1)},[searchvalue])

    // API call 

     async function fetchData(e,firstsearch,flag){
      if(e){
        e.preventDefault();
      }
       try{

        let response = await axios.get(baseUrl ,{
            headers:{"Accept-Version":"v1","Authorization":access_key },
            params:{"query":searchvalue || firstsearch ,per_page:2, page:page }
        })
          

        if(flag==="submit"){
          
          setData(response.data.results);
        }
        else if(flag==="back"){
            console.log("back");
        }
        else{
    
          setData([...data,...response.data.results]);
          
        }
        setPage(page+1);
        
         
       }
       catch(error){
        console.log(error);
       }
       
    }

    console.log(data);



    // HTML part 


    return <div>
     <form onSubmit={(e)=>{fetchData(e , "" ,"submit" )}}>
        <input placeholder="Search photos..." onChange={e=>setSearchValue(e.target.value)} value={searchvalue}  type="text"/>
        <button type="submit">Search</button>
     </form>


    
       <button onClick={
        ()=>{
          if (data.length>2) {
            for(let i=0;i<2; i++){
              data.pop();
          }
          
       }
      
       console.log(data);
       setData([... data]);
       

      }
    }
       >Previous</button> 
       <button onClick={(e)=>{fetchData(e,"Random")}}>Next</button>
       
     
    </div>
}

export default ImageData;