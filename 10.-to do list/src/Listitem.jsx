import React from "react"
import ShowItemModal from "./ShowItemModal"
const Listitem  =({task, limit})=>{
    return(
    <>
    <div className="row m-2">
    <div className="col-6">
      <ShowItemModal task={task}/>


      <input type="checkbox"/>
    <button className="btn btn-link" 
    data-bs-toggle="modal"
    data-bs-target={"#ShowItemModal"+task.id}>
    {task.task}</button>
      </div>
<div className='col-2'>
{task.limit}
</div>
<div className='col'>
{task.location}
  </div>

<div className="col-1">


</div>

  </div>
  </>
    )
}
export default Listitem