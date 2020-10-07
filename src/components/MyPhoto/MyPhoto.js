import React from "react";
import style from "./MyPhoto.module.css";
const MyPhoto = ({imageUrl}) =>{
    return(
        <div>
        <img className={style.image} src={imageUrl} alt="thumbshare"/>
        </div>
    )
}

export default MyPhoto