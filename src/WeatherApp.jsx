import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Noida",
        feelsLike: 36.96,
        humidity: 79,
        temp: 29.96,
        tempMax: 31.05,
        tempMin: 29.96,
        weather: "clear sky"
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}