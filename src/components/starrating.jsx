import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

const Starrating = ({noOfStars=5}) => {
  const[hover,setHover]=useState(0);
  const[rating,setRating]=useState(0);
  
  function handleClick(getCurrentId){
setRating(getCurrentId)
  }

  function handleMouseHover(getCurrentId){
    setHover(getCurrentId)

  }
  function handleMouseLeave(){
setHover(rating)
  }
    return (
    
    <div className='star-rating'>
        
     {   [...Array(noOfStars)].map((__,index)=>{
     index+=1;
      return<FaStar key={index} className={index<=(hover||rating)?'active':'inactive'}
      onClick={()=>handleClick(index)} onMouseOver={()=>handleMouseHover(index)}
     onMouseLeave={handleMouseLeave} size={40}/> })}
        </div>
  )
}

export default Starrating