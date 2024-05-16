//import React from 'react'

import { useForm } from "../../Hooks/useForm"

 const SearchCity = ({cities,setCities}) => {


    const [values, handleInputChange, rest] = useForm({
        city:''
    })



    const handleSearchCity=()=>{
const newCities=[...cities,values.city]
setCities(newCities)

        rest()
    }
  return (
    <div  className="input-group">

<span className="input-group-text" >City</span>
<input 
className="form-control"
type="text" 
id="city"
name="city"
onChange={handleInputChange}
value={values.city}

/>
<button


className="btn btn-primary" 
type="button"
onClick={handleSearchCity}


>Search</button>


    </div>
  )
}

export default SearchCity
