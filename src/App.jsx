import { useEffect, useRef, useState, useref } from "react";
import bgImage from "./image/bgImage.png";
import useWeather from "./hooks/useWeather";
import Loader from "./components/loader/Loader";

function App() {

  const cardData=[]
  const [location, setLocation] = useState("Amritsar");
  const [data, setData] = useState({});
  // const API_KEY=import.meta.env.VITE_APP_WEATHER_API_KEY
  const API_KEY="f6dab2f5e58953477727b66511357b7d"
  // console.log(API_KEY);
  const country = "IN";
  // const { loading,error,data}=fetchWeather(location)
  // console.log(data);
 
  // const url=`https://api.openweathermap.org/data/2.5/weather?q=${location},${country}&appid=${API_KEY}`
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`;
  const searchLocation = async (event) => {
      await fetch(url)
        .then(async (res) => {

          try {
            const res_data = await res.json();
            // console.log(res_data);
            setData(res_data);
          } catch (error) {
            alert("Internet Disconnected",error)
          }
        })
        .catch((error) => {
          // console.log(error);
          alert("Internet Disconnected",error)
        });
      setLocation("");
      
  };
  // const [count, setCount] = useState(0)
  let inpRef = useRef(null);

  // const getWeather=useWeather(location)
  // console.log(getWeather.response);
  // const keys=Object.keys(getWeather)
  // console.log(keys);
  const arr =["https://wallpapercave.com/wp/wp1933991.jpg","https://wallpaperaccess.com/full/3173348.jpg",bgImage,
              "https://cdn.pixabay.com/photo/2014/11/16/15/15/field-533541_960_720.jpg",
            "https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736875_1280.jpg",
          "https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616_1280.jpg"];

  const bgImageRandom =arr[Math.floor(Math.random()*5)]
  // if(!data.main){
  //   return <Loader/>
  // }
  function hideComment(){
  
  }
  return (
    <div
      className="main w-full h-screen bg-no-repeat bg-center flex flex-wrap justify-center items-center max-sm:items-start"
      // style={{backgroundImage: "url(https://wallpapercave.com/wp/wp1933991.jpg)",}}
      // style={{backgroundImage:"url(https://wallpaperaccess.com/full/3173348.jpg)"}}
      style={{backgroundImage:`url(${bgImageRandom})`}}
    >
      
      <div className="upper-main-part w-3/6 h-1/1 max-sm:w-full  max-sm:mt-20 border border-blue-50 rounded-xl p-10 backdrop-blur-sm bg-white/30">
      {/* <h1 className=" text-3xl pt-5">My Weather App</h1> */}
        {data.main?(<h2 className=" text-5xl">{`${data.name}`}</h2>):("")}
        <form onSubmit={(e) => {
            e.preventDefault();
            searchLocation(e);
            // fetchWeather(location)
          }}>
        <div className="input-field flex flex-wrap justify-center">
          
          <input
            type="text"
            name=""
            id=""
            className="w-1/2 max-sm:w-4/5 max-sm:mt-5 text-center rounded-xl outline-none text-2xl"
            ref={inpRef}
            value={location}
            onChange={(ev) => {
              setLocation(ev.target.value);
            }}
            placeholder="City Name"
          />
        </div>
        <div className="temp-container py-5 block">
          {data.main ? (
            <h1 className="py-4 text-4xl">{`${Math.floor(
              ((parseInt(data.main.temp) - 32) * 5) / 9
            )}°C`}</h1>
          ) : (
            
            <h1 className="py-4 text-4xl mx-auto text-white" id="hide-comment">Temp 0°C</h1>
          )}
         <span className=" text-xl"> {data.main? (<p>{data.weather[0].description} | Feels like {`${data.main.feels_like.toFixed()}°F`}</p>):("")}</span>
          <span className=" text-xl"> {data.main?(<p>Wind <span>{`${data.wind.speed} km/h `}{data.wind.deg}°</span></p>):("")}</span>
          <h3 className="mt-3 text-3xl text-white">Details</h3>
        </div>
        <div className="bottom-part flex flex-wrap justify-evenly">
          {/* {cardData.map((card) => {
            return <Card key={card.id} activityName={card} datas={data} />;
          })} */}
          <div className="w-1/4 rounded-lg h-full border text-center">
            {/* {data.main ? data.wind.speed : console.log("Hello Aman")} */}
            {data.main ? (
              <p className=" text-lg max-sm:text-sm">{`${data.clouds.all.toFixed()} %`}</p>
            ) : (
              // <p className="text-2xl text-orange-400">&nbsp;</p>
              ""
            )}
            <p>Clouds</p>
          </div>
          <div className="w-1/4 rounded-lg h-full border text-center">
            {/* {data.main ? data.wind.speed : console.log("Hello Aman")} */}
            {data.main ? (
              <p className=" text-lg max-sm:text-sm">{`${data.main.humidity.toFixed()}%`}</p>
            ) : (
              // <p className="text-2xl text-orange-400">&nbsp;</p>
              ""
            )}
            <p>Humidity</p>
          </div>
          <div className="w-1/4 rounded-lg h-full border text-center">
            {/* {data.main ? data.wind.speed : console.log("Hello Aman")} */}
            {data.main ? (
              <p className=" text-lg max-sm:text-sm">{`${parseInt(data.visibility)/1000} km`}</p>
            ) : (
              // <p className="text-2xl text-orange-400">&nbsp;</p>
              ""
            )}
            <p>Visibility</p>
          </div>
          <div className="w-1/4 rounded-lg h-full border text-center">
            {/* {data.main ? data.wind.speed : console.log("Hello Aman")} */}
            {data.main ? (
              <p className=" text-lg max-sm:text-sm">{`${data.main.pressure} Mb`}</p>
            ) : (
              // <p className="text-2xl text-orange-400">&nbsp;</p>
              ""
            )}
            <p>Pressure</p>
          </div>
        </div>
        <div className="btn-container w-full flex flex-wrap justify-center items-center">
        <button className="btn text-3xl max-sm:w-full text-center bg-slate-700 w-1/2 rounded-2xl mt-4 text-white p-2"
         type="submit">
          Get Weather
        </button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default App;
// const fetchWeather= (location)=>{
//   const API_KEY=import.meta.env.VITE_APP_WEATHER_API_KEY
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`;
//   // const [location, setLocation] = useState(loaction);
//   const [data, setData] = useState({});
//   const [loading,setLoading]=useState(false);
//   const [error,setError]=useState(false);
//   useEffect(()=>{
//     ;(async()=>{
//       try {
//         setLoading(true)
//         setError(false)
//         const res=await fetch(url);
//         // const res=await axios.get(url)
//         setData(res.json())
//       } catch (error) {
//         setLoading(false)
//         setError(true);
        
//       }
//     })();
//   },[])
 
//   return {data,loading,error}
// }
