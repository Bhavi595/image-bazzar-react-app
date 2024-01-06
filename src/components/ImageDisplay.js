import Reac, { useState } from "react";

const ImageDisplay = ({data}) => {
  console.log(data);

  return (
    <div style={{width:"100vw"}}>
    <p>hello </p>
      {
         data.map(item => { console.log(item.urls.small)
         return   <img style={{width:400,height:400}} src={item.urls.small} alt={item.alt_description} />})
      }:
    </div>
  )
}

export default ImageDisplay;
