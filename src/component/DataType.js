import React from 'react'
import DataTypeButton from './DataTypeButton'
const DataType = ({setDtType}) => {
  return (
    <div className='data-type-container'>
      <DataTypeButton text="Températures" handler={setDtType} value={0}/>
      <DataTypeButton text="Mer" handler={setDtType} value={1}/>
      <DataTypeButton text="Vents" handler={setDtType} value={2}/>
      <DataTypeButton text="UV" handler={setDtType} value={3}/>
    </div>
  )
}

export default DataType
