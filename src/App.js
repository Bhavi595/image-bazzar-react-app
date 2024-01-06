import react,{useState} from "react";
import ImageData from "./components/ImageData";
import ImageDisplay from "./components/ImageDisplay";

const App = ()=>{


    const [data , setData ] = useState([]);


    return <div>
        <ImageData    setData={setData}/>
        <ImageDisplay data={data}/>
    </div>
}

export default App; 