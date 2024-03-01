import { useState } from "react";

 async function useWeather(cityName){
    const [data,setData]=useState({})
    // let data={}
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c7e34314a76d2ef8c294b268f0e7a72e`
    await fetch(url).then(async (res)=>{
        const  res_data=await res.json()
        console.log(res_data);
        // data=res_data
        setData(res_data)
        }).catch((error)=>{console.log(error);})
    return data;
}
export default useWeather;
