
import  CityCard from "./components"
import './assets/css/index.css'
import SearchCity from "./components/SearchCity"
import { useState } from "react"

const App =()=>{ 


  const [cities, setCities]= useState(["Tuxtepec"])

  return (
    <div className="container">
      <h1>Weather App</h1>
      <hr/>
        <SearchCity cities={cities} setCities={setCities}/>
      <hr/>


      {

        cities.map((city, index)=>(
        <CityCard key={index} city={city}/>   
        ))
      }
        
    </div>
  )
}

export default App