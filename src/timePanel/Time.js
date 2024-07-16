import React, { useEffect, useState } from 'react'
import SetterButton from './SetterButton'
import Select from 'react-select'
import {daysUntilWeekend } from '../component/function'
import { customStyles } from './selectStyles'
import { generateDateArray } from '../component/function'
const timeOptions = [
  { value: 'morning', label: 'Matin' },
  { value: 'afternoon', label: 'Après-midi' },
  { value: 'evening', label: 'Soir' },
  { value: 'night', label: 'Nuit' }
]

const Time = ({dtType,setTime}) => {

  const[datesOptions,setDatesOptions]=useState(generateDateArray(15))
  // selected options
  const [timeSelectedOption,setTimeSelectedOption]=useState(timeOptions[0])
  const [dateSelectedOption,setDateSelectedOption]=useState(datesOptions[0])
  // active stter button 
  const [activeBtn,setActiveButton]=useState(0)

  useEffect(()=>{
    if(dtType==0){
      setTimeSelectedOption(timeOptions[0])
      setDatesOptions(generateDateArray(15))
    }else if(dtType==1){
      setDatesOptions(generateDateArray(3))
    }else if(dtType==2){
      setDatesOptions(generateDateArray(15))
    }else if(dtType==3){
      setTimeSelectedOption(timeOptions[1])

      setDatesOptions(generateDateArray(8))
    }
    setActiveButton(0)
  },[dtType])
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
        <SetterButton text="Aujourd'hui" handler={setDateSelectedOption} value={0} datesOptions={datesOptions} activeBtn={activeBtn} setActiveButton={setActiveButton} bkey={0}/>
        <SetterButton text="Demain" handler={setDateSelectedOption} value={1} datesOptions={datesOptions} activeBtn={activeBtn} setActiveButton={setActiveButton} bkey={1}/>
        <SetterButton text="Weekend" handler={setDateSelectedOption} value={daysUntilWeekend()} datesOptions={datesOptions} activeBtn={activeBtn} setActiveButton={setActiveButton} bkey={2}/>
      </div>
      <div className='time-selcets-container'>
      <Select 
        options={datesOptions}
        className='select'
        value={dateSelectedOption}
        onChange={handleDateChange}
        styles={customStyles}
        />
      <Select
        options={timeOptions}
        className='select'
        isDisabled={dtType<3?false:true}
        value={timeSelectedOption}
        onChange={handleTimeChange}
        styles={customStyles}
      />
      </div>
    </div>
  )
}

export default Time
