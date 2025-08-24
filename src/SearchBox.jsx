
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox ({updateInfo}) {
 let [City , setCity] = useState("");
 let [error , setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "5f1f7e94d06146ea18bdf98bab84ea5a ";

  let getWeatherInfo = async() =>{
    try{
       let response = await fetch(`${API_URL}?q=${City}&appid=${API_KEY}`);
     let jsonResponse = await response.json();
     console.log(jsonResponse);
     let result = {
        city:City,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
     };
     console.log(result);
     return result;
    } catch(err) {
       throw err;
    }
    
  };
   
    let handelChange = (evt) => {
        setCity(evt.target.value);
    };

    let handelSubmit = async (evt) => {
        try {
        evt.preventDefault();
        console.log(City);
        setCity("");
       let newInfo =  await getWeatherInfo();
       updateInfo(newInfo);
     } catch(err){
         setError(true);
     }
        
    };

    return (
        <div className='Searchbox'>
            <form onSubmit={handelSubmit}>
            <TextField
             id="City"
             label="City Name" 
             variant="outlined"
             required value = {City}
             onChange={handelChange} 
            />           
           <br></br><br></br>
           <Button variant="contained" type='submit'  > Search
          </Button>
          {error &&  <p style={{color : "red"}}>No such place exist ! </p>}
            </form>
        </div>
    );
}