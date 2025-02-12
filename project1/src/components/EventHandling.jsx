import React from 'react'
import "./EV.css"

const EventHandling = () => {   

 function handleButtonClick(user){
    console.log(`hey i am ${user}`);

 }

  return (
      // <button onClick={handleButtonClick}>CLick Me</button>
      <button onClick={()=>handleButtonClick("uso")} >click me</button>
  )
}

export default EventHandling