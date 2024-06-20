import './App.css';
import Map from './component/Map';
import Time from './timePanel/Time';
import DataType from './component/DataType';
import { fetchData } from './component/function';
import { useEffect, useState } from 'react';
function App() {
  const [data,setData]=useState(null)
  const [uvData,setUvData]=useState(null)
  // choices 
  const [dtType,setDtType]=useState(0)
  useEffect(()=>{
    async function getData(){
      let data1 = await fetchData('https://www.meteocity.com/map/data/8?version=4&state=now')
      let data2 = await fetchData('https://fr-plages-uvi-api.onrender.com/fr-plages-uvi')
      setData(data1.data.map.days)
      setUvData(data2.default)
    }
    getData()
  },[])
 
  return (
    <div className="app-container">
      {data && uvData &&<Time data={data} uvData={uvData} dtType={dtType}/>}
      <Map/>
      <DataType setDtType={setDtType}/>
    </div>
  );
}

export default App;
