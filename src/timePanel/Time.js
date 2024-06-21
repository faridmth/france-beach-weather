import React, { useEffect, useState } from 'react'
import SetterButton from './SetterButton'
import Select from 'react-select'
import { formatDateToFrench,daysUntilWeekend } from '../component/function'

const timeOptions = [
  { value: 'morning', label: 'Matin' },
  { value: 'afternoon', label: 'Après-midi' },
  { value: 'evening', label: 'Soir' },
  { value: 'night', label: 'Nuit' }
]

const Time = ({dtType,uvData,data,setTime}) => {
  const[dt,setDt]=useState(data)
  const[datesOptions,setDatesOptions]=useState([])
  // selected options
  const [timeSelectedOption,setTimeSelectedOption]=useState(timeOptions[0])
  const [dateSelectedOption,setDateSelectedOption]=useState(datesOptions[0])
    useEffect(()=>{
    setDt(dtType<3?data:uvData)
  },[dtType])
  useEffect(()=>{
    let dates = Object.keys(dt)
    let dataOptions=[]
    dates.map((elm)=>{
      dataOptions.push({value :elm,label:formatDateToFrench(elm) }) 
    })
    setDatesOptions(dataOptions)
  },[dt])
  useEffect(()=>{
    setDateSelectedOption(datesOptions[0])
  },[datesOptions])
  useEffect(()=>{
    if (typeof dateSelectedOption !== 'undefined' && typeof timeSelectedOption !== 'undefined') {
    setTime({date:dateSelectedOption.value,time:timeSelectedOption.value})
    }
  },[dateSelectedOption,timeSelectedOption])
  // handlers
  const handleTimeChange = (timeOp) => {
    setTimeSelectedOption(timeOp);
  };
  const handleDateChange = (dateOp) => {
    setDateSelectedOption(dateOp);
    
  };
  return (
    <div className='time-conatiner'>
      <div className='time-setters-cont'>
        <SetterButton text="Aujourd'hui" handler={setDateSelectedOption} value={0} datesOptions={datesOptions}/>
        <SetterButton text="Demain" handler={setDateSelectedOption} value={1} datesOptions={datesOptions}/>
        <SetterButton text="Weekend" handler={setDateSelectedOption} value={daysUntilWeekend()} datesOptions={datesOptions}/>
      </div>
      <div className='time-selcets-container'>
      <Select 
        options={datesOptions}
        className='select'
        value={dateSelectedOption}
        onChange={handleDateChange}
        />
      <Select
        options={timeOptions}
        className='select'
        isDisabled={dtType<3?false:true}
        value={timeSelectedOption}
        onChange={handleTimeChange}
      />
      </div>
    </div>
  )
}

export default Time
