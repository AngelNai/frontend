import { useState } from "react"



function App() {
  const [inputsForm, setInputsForm]=useState({
    username:"",
    password:"",
  })


 const handleInputsChange=(event)=>{
setInputsForm({
  ...inputsForm,
[event.target.name]:event.target.value
})
}
const handlePasswordChange=(event)=>{
  setPassword(event.target.value)
}

const handleSubmit=(e)=>{
  e.preventDefault()
  console.log("mi nombre de usuario es:",inputsForm.username)
  console.log("mi contraseña es:",inputsForm.password)
  setInputsForm({
    username:"",
    password:"",
  })
}

  return (
    <div>
      <h1>
inputs
      </h1>
      <hr/> 
      <form onSubmit={(e)=>handleSubmit(e)}>
        <divs>
        <label htmlFor="username">username</label>
      <input 
      id="username"
      name="username"
      type="text"
      value={inputsForm.username}
      onChange={(event)=>handleInputsChange(event)}

      
      
      
      />
</divs>
<div>
  <label htmlFor="password">password</label>
  <input 
  id="password"
  name="password"
  type="password"
  value={inputsForm.password}
  onChange={(event)=>handleInputsChange(event)}
  />
</div>
<div>
  <button type="submit">submit</button>
</div>
    </form>
    </div>
  ) 
}

export default App
