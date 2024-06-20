import React from 'react'

const DataTypeButton = ({value,handler,text}) => {
    const clickHandler =  ()=>{
        handler(value)
    }
  return (
    <button onClick={clickHandler} className='time-setter-btn'>{text}</button>
  )
}

export default DataTypeButton
