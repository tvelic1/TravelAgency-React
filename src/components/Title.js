import React from "react";
import '../css/Title.css';

const Title = ({subtitle,title})=>{
    return(
        <div className="wrap">
        <div className='title'>
            <p>{subtitle}</p>
            <h2>{title}</h2>
        </div>
        </div>
    )

}
export default Title