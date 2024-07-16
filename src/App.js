import './App.css';
import { useEffect, useState, useMemo, lazy, Suspense } from 'react';
import Time from './timePanel/Time';
import DataType from './component/DataType';
import { fetchData, generateDateArray } from './component/function';

const Map = lazy(() => import('./component/Map'));

function App() {
  const [data, setData] = useState(null);
  const [uvData, setUvData] = useState(null);
  // choices
  const [dtType, setDtType] = useState(0);
  const [time, setTime] = useState(generateDateArray(0)[0]);

  useEffect(() => {
    async function getData() {
      try {
        const [data1, data2] = await Promise.all([
          fetchData('https://www.meteocity.com/map/data/8?version=4&state=now'),
          fetchData('https://fr-plages-uvi-api.onrender.com/fr-plages-uvi')
        ]);

        setData(data1.data.map.days);
        setUvData(data2);
        console.log('finish');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getData();
  }, []);

  const memoizedTime = useMemo(() => generateDateArray(0)[0], []);

  return (
    <div className="app-container">
      <Time data={data} uvData={uvData} dtType={dtType} setTime={setTime} />
      {uvData && data ? (
        <Suspense fallback={
          <div className='loading'>
            <div className='spinner'>
              {/* Add spinner or loading animation here */}
            </div>
          </div>
        }>
          <Map data={data} dtType={dtType} uvData={uvData} time={time} />
        </Suspense>
      ) : (
        <div className='loading'>
          <div className='spinner'>
            {/* Add spinner or loading animation here */}
          </div>
        </div>
      )}
      <DataType setDtType={setDtType} dtType={dtType} />
    </div>
  );
}

export default App;
