//import { useEffect, useState } from "react"
//import { getWeather } from "./api/WeatherApi"
import  CityCard from "./components"

const App =()=>{ 

  /*const [weather, setWeather] = useState(null)
  useEffect(()=>{
    const getCityWeather = async()=>{
      setWeather(await getWeather())
    }s


    getCityWeather() 
    
  },[])
  */

  return (
    <>
      <h1>Weather App</h1>
      <hr/>


      {
        //!weather ? <h2>Loading</h2>:
        <CityCard />
      }
      
    </>
  )
}

export default App