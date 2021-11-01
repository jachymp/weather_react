import './App.css';
import weather from './weather.json';
import Weather from './Weather.js';
import React from 'react';
import WeatherDetail from './WeatherDetail';

function App() {
  const [detail, setDetail] = React.useState("Monday")
  return (
    <div className="App">
      {/* <WeatherDetail detail={weather.find(w => w.day === detail)}/> */}
      {/* {console.log(weather)} */}
      {weather.map((w, index) => (
        <div key={index}>
          <Weather
          day={w.day}
          min={w.min}
          max={w.max}
          detail={w}
          setDetail={setDetail}
          selected={detail === w.day}
          />
        </div>
      ))}
        
        
      
    </div>
  );
}

export default App;
