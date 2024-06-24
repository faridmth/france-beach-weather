import React from 'react'

const SetterButton = ({text,value,handler,datesOptions,activeBtn,setActiveButton,bkey}) => {
    const clickHandler =  ()=>{
        if(datesOptions.length>=value){
          handler(datesOptions[value])
        }else{
          handler(datesOptions[0])
        }
        setActiveButton(bkey)
        console.log(bkey)
    }
  return (
    <button onClick={clickHandler} className={activeBtn===bkey?"active-time-setter-btn":"time-setter-btn"}>{text}</button>
  )
}

export default SetterButton
