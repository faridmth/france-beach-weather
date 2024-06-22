import React from 'react'

const DataTypeButton = ({value,handler,text,dtType}) => {
    const clickHandler =  ()=>{
        handler(value)
    }
  return (
    <button onClick={clickHandler} className={dtType==value?'active-datatype-setter-btn':'datatype-setter-btn'}>{text}</button>
  )
}

export default DataTypeButton
