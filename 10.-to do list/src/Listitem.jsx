import React from "react"
const Listitem  =({task, limit})=>{
    return(
    <>
    <div className="row m-2">
    <div className="col-6">
      {task}
      </div>
<div className='col-2'>
{limit}
</div>
<div className='col'>
<button className='btn btn-sm btn-primary'>
  edit
</button>
<button className='btn btn-sm btn-danger'>
  delete
  </button>
  </div>
  </div>
  </>
    )
}
export default Listitem