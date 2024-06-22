import React, { useState } from 'react'
import DataTypeButton from './DataTypeButton'
const DataType = ({setDtType,dtType}) => {
  return (
    <div className='data-type-container'>
      <DataTypeButton text="Températures" handler={setDtType} value={0} dtType={dtType}/>
      <DataTypeButton text="Mer" handler={setDtType} value={1} dtType={dtType}/>
      <DataTypeButton text="Vents" handler={setDtType} value={2} dtType={dtType}/>
      <DataTypeButton text="UV" handler={setDtType} value={3} dtType={dtType}/>
    </div>
  )
}

export default DataType
