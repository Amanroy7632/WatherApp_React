import { useState } from "react";

 async function useWeather(cityName){
    const [data,setData]=useState({})
    const API_KEY=import.meta.env.VITE_APP_WEATHER_API_KEY;
    // let data={}
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    await fetch(url).then(async (res)=>{
        const  res_data=await res.json()
        console.log(res_data);
        // data=res_data
        setData(res_data)
        }).catch((error)=>{console.log(error);})
    return data;
}
export default useWeather;
