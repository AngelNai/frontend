import { useState } from "react"
import AddTaskModal from "./AddTaskModal"
import List from "./List"

function App() {
  const [tasklist, settasklist]=useState(

    JSON.parse(localStorage.getItem('tasklist')) || []

  )


if(tasklist.length===0){
  localStorage.setItem('tasklist',JSON.stringify([]))
}

  return (
    
<>
    <div className="container">
    <h2>To Do List</h2>
    <hr/>
    <List
    tasklist={tasklist} settasklist={settasklist}/>
    <hr/>
    <div className="text-end">
  <AddTaskModal
   tasklist={tasklist} 
   settasklist={settasklist}
   
   />
      <button
       type="button"
        className="btn btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target={"#AddTaskModal"}
        >
          <i className="bi bi-plus-lg"></i>
       Add
      </button>
    </div>
    </div>


  </>

  )
}

export default App
