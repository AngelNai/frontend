import { useState } from "react"



function App() {
const[username,setUsername]=useState("") 
 const handleUsernameChange=(event)=>{
setUsername(event.target.value)
}

const handleSubmit=(e)=>{
  e.preventDefault()
  console.log("mi nombre de usuario es",username)
  setUsername("")
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
      tupe="text"
      value={username}
      onChange={(event)=>handleUsernameChange(event)}

      
      
      
      />
</divs>
<div>
  <label htmlFor="password">password</label>
  <input 
  id="password"
  type="password"
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
