import React from  "react";
function ImgCard(props){
    return(
        <div>
            <img src ={props.image} alt="imageCard" onClick={()=> props.handleImageClick(props.id)} style={{width: "100px", height:"100px"}}></img>
        </div>
    )
}
export default ImgCard;