import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
 const [weatherInfo , setWeatherInfo] = useState({
        city:"Delhi",
        feelsLike : 24,
        temp:30,
        tempMin:24,
        tempMax:45,
        humidity:47,
        weather:"haze",
  });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    } ;
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Sakshi</h2>
            <SearchBox updateInfo= {updateInfo} />
            <InfoBox info = {weatherInfo} />
        </div>
    )
}