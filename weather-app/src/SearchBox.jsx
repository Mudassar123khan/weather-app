import React from 'react';

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";
import InfoBox from "./InfoBox";
import Alert from '@mui/material/Alert';

export default function SearchBox() {
  let [error, setError]= useState(false);
   let [city, setCity] = useState("");
   let [weather,setWeather]=useState({});
  const API_URL= "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY= "8cb1d2b3cd4886f78ead7e6ca1a20cad";

  async function getWeatherData(){
  
        let data = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
   if(data.ok){     
      let jsonData=await data.json();
      console.log(jsonData)
      let result={
        city:city,
        temp:jsonData.main.temp,
        humidity:jsonData.main.humidity,
        windSpeed:jsonData.wind.speed,
        feelsLike:jsonData.main.feels_like
      };
      setWeather(result);
      setError(false)
    }else{
      setError(true);
      setWeather({});
    }
    
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function preventDefault(event){
       event.preventDefault();
    setCity("");
    getWeatherData();
  
  }

  return (
    <div className="searchBox">
      <h3>Search for the weather</h3>
      <form onSubmit={preventDefault}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleCity}/>
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
      <br></br>
      <br></br>
      <InfoBox weatherData={weather}/>
  <br></br>
  <br></br>
      {error?<Alert severity="error" style={{position:"absolute",left:"35%"}} >The city you have searched for doesn't exist in the API data</Alert>:""}

    </div>
  );
}
