import Reac, { useState } from "react";

const ImageDisplay = ({data}) => {
  // console.log(data);

  return (
    <div style={{width:"100vw"}}>
        <div>
      
          {
             data.map(item => {
             return   <img style={{width:400,height:400}} src={item.urls.small} alt={item.alt_description} />})
          }

        </div>

    </div>
  )
}

export default ImageDisplay;
