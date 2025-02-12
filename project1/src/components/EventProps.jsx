import React from 'react'

const EventProps = (user) => {
    const HandleWelcomeUser = () =>{
        alert(`Hey you , ${user}`);

    };

    const handleHover = () =>{
        alert(`thanks for handling me`)
    }

  return (
      <>
      <Welcomeuser 
      onButtonClick={()=>HandleWelcomeUser("uso")}
      onMouseHover={handleHover}
      
      />
      </>
  )
}

const Welcomeuser = (props) =>{
    const {onButtonClick,onMouseEnter} = props;
    const handleGreeting = ()=>{
        alert(`Hello User , Welcome`);
        onButtonClick();
    }
    return(
        <>
         <button onClick={onButtonClick} >Click me</button>
         <button onMouseEnter={onMouseEnter} >Hover me</button>
         <button onClick={handleGreeting} >greeting</button>
        </>
    )
}

export default EventProps