// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
// const API_KEY = '97ae9bdc13a9ccb764c00372a2d06421'
// const BASe_URL = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
// https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=97ae9bdc13a9ccb764c00372a2d06421

//   return (
//      <>
     
//      </>
//   )
// }

// export default App


// import "./App.css";
// import { useState , useEffect } from "react";
// import search_icon from "./assets/search.png";
// import rain_icon from "./assets/rain.png";
// import clear_icon from "./assets/clear.png";
// import cloud_icon from "./assets/cloud.png";
// import drizzle_icon from "./assets/drizzle.png";
// import snow_icon from "./assets/snow.png";
// import wind_icon from "./assets/wind.png";
// import humidity_icon from "./assets/humidity.png";

// async function getWeatherData (BASE_URL)
// {
// let response = await fetch(BASE_URL)
// let data = await response.json();
// return data 
// }
// const getWeatherIcon = (data)=>{
//   switch(data.Weather[0].main.toLowerCase){
//     case'rain':
//     return rain_icon;
//     case'clear':
//     return clear_icon;
//     case'clouds':
//     return cloud_icon;
//     case'drizzle':
//     return drizzle_icon;
//     case'snow':
//     return snow_icon;
//   }
// };

// function App() {
//   const [location, setLocation] = useState();
//   const [data,setData]=useState({});
//   const [WeatherIcon,setWeatherIcon]=useState({});
//   const API_KEY = '97ae9bdc13a9ccb764c00372a2d06421';
//   const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;


//   useEffect(() => {
//     getWeatherData(BASE_URL).then((d)=>{
// setData(d)
// console.log(data);
// let icon = getWeatherIcon(data);
// setWeatherIcon(icon);
//     })
//   },[location,WeatherIcon]);
//   return (
//     <div className="weather">
//       <div className="search-bar">
//         <input type="text" value={location} id="" placeholder="Search" 
//         onChange={(event)=>{
//           setLocation(event.target.value);
//           console.log(location);

//         }}
//           />
//         <img src={search_icon} alt="search" />
//        </div>
//       <div className="align">
//         <img src={WeatherICON} alt="clear" className="weather-icon"
//         />
//         <div className="content">
//           <p className="temperature">{data.main?.temp ?Math.round(data.main?.temp-273.15): <h2>no data found </h2>}˚C</p>
//           <p className="location">{data.name}</p>
//         </div>
//       </div>

//       <div className="weather-data">
//         <div className="col">
//           <img src={humidity_icon} alt="humidity" />
//           <div>
//             <p>{data.main?.humidity} %</p>
//             <span>Humidity</span>
//           </div>
//         </div>
//         <div className="col">
//           <img src={wind_icon} alt="wind" />
//           <div>
//             <p>{data.wind?.speed}Km/hr</p>
//             <span>Wind Speed</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { useEffect, useState } from "react";
import search_icon from "./assets/search.png";
import rain_icon from "./assets/rain.png";
import clear_icon from "./assets/clear.png";
import cloud_icon from "./assets/cloud.png";
import drizzle_icon from "./assets/drizzle.png";
import snow_icon from "./assets/snow.png";
import wind_icon from "./assets/wind.png";
import humidity_icon from "./assets/humidity.png";

async function getWeatherData(BASE_URL){
  let response= await fetch(BASE_URL)
  let data= await response.json();
  return data;
}

const getWeatherIcon=(data)=>{
switch(data.weather[0].main.toLowerCase()){
  case"rain":
   return rain_icon;
  case"clear":
   return clear_icon;
  case"clouds":
   return cloud_icon;
  case"drizzle":
   return drizzle_icon;
  case "snow":
   return snow_icon;
}
}

function App() {
  const [location, setLocation] = useState('Mumbai');
  const[data,setData]=useState({});
  const[weatherIcon,setWeatherIcon]=useState(clear_icon);

  const API_KEY = '97ae9bdc13a9ccb764c00372a2d06421';
  const BASE_URL =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

useEffect(()=>{
  getWeatherData(BASE_URL).then((d)=>{
    setData(d)
    console.log(data)
    let icon=getWeatherIcon(data);
    setWeatherIcon(icon);
      })
},[location]);

  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" 
        value={location} id="" 
        placeholder="Search"
        onChange={(event)=>{
          setLocation(event.target.value)
          console.log(location)
        }}
        />
     
      </div>
      <div className="align">
        <img src={weatherIcon} 
        alt="clear" 
        className="weather-icon" />
        <div className="content">
        <p className="temperature">{data.main?.temp ?Math.round(data.main?.temp-273.15): <h2>no data found </h2>}˚C</p>
          <p className="location">{data.name}</p>
        </div>
      </div>

      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="humidity" />
          <div>
             <p>{data.main?.humidity}%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="wind" />
          <div>
            <p>{data.wind?.speed}Km/hr</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;