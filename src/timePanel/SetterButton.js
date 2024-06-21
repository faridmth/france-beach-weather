import React from 'react'

const SetterButton = ({text,value,handler,datesOptions}) => {
    const clickHandler =  ()=>{
        handler(datesOptions[value])
    }
  return (
    <button onClick={clickHandler} className='time-setter-btn'>{text}</button>
  )
}

export default SetterButton
