import React from 'react'

const SetterButton = ({text,value,handler,datesOptions,activeBtn,setActiveButton,bkey}) => {
    const clickHandler =  ()=>{
        handler(datesOptions[value])
        setActiveButton(bkey)
        console.log(bkey)
    }
  return (
    <button onClick={clickHandler} className={activeBtn===bkey?"active-time-setter-btn":"time-setter-btn"}>{text}</button>
  )
}

export default SetterButton
