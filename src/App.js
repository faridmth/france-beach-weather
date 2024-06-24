import './App.css';
import Map from './component/Map';
import Time from './timePanel/Time';
import DataType from './component/DataType';
import { fetchData } from './component/function';
import { useEffect, useState } from 'react';
import { generateDateArray } from './component/function';
function App() {
  const [data,setData]=useState(null)
  const [uvData,setUvData]=useState(null)
  // choices 
  const [dtType,setDtType]=useState(0)
  const [time,setTime]=useState(generateDateArray(1)[0])
  useEffect(()=>{
    async function getData(){
      let data1 = await fetchData('https://www.meteocity.com/map/data/8?version=4&state=now')
      setData(data1.data.map.days)
      let data2 = await fetchData('https://fr-plages-uvi-api.onrender.com/fr-plages-uvi')
      setUvData(data2)
    }
    getData()
  },[])



  return (
    <div className="app-container">
      <Time data={data} uvData={uvData} dtType={dtType} setTime={setTime}/>
      <Map data={data} dtType={dtType} uvData={uvData} time={time}/>
      <DataType setDtType={setDtType} dtType={dtType}/>
    </div>
  );
}

export default App;
