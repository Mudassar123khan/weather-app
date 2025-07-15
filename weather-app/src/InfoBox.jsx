import React from 'react';

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ weatherData }) {
  const INI_URL =
    "https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3Vubnl8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL="https://plus.unsplash.com/premium_photo-1671229652411-4468b946b787?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
  const HOT_URL="https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL="https://images.unsplash.com/photo-1519863436079-8436f74be632?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";  
  return (
    <div className="InfoBox">
      <div className="InfoBoxContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={weatherData.humidity>80?RAIN_URL: weatherData.temp>15?HOT_URL:COLD_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {weatherData.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component="div"
            >
              <div>Temperature:{weatherData.temp}&deg;C</div>
              <div>Humidity:{weatherData.humidity}</div>
              <div>Wind Speed:{weatherData.windSpeed}kmph</div>
              <div>The weather feels like:{weatherData.feelsLike}and described as <i>{weatherData.description}</i></div>
             
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
