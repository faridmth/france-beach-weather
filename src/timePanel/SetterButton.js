import React from 'react'

const SetterButton = ({text,value,handler}) => {
    const clickHandler =  ()=>{
        handler(value)
    }
  return (
    <button onClick={clickHandler} className='time-setter-btn'>{text}</button>
  )
}

export default SetterButton
