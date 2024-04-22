const AddTaskModal =()=>{
    return(
        <div className="modal fade" id={"AddTaskModal"+task.id}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div  className="modal-header">
                        <h1 className="modal-title"
                            id="AddTaskModallabel">
{task.task}                        </h1>
                        <button 
                            type="button" className="btn-close" 
                            data-bs-dismiss="modal">
                        </button>

                    </div>
            
< div className="modal-body container">
    <div className="row">
        <p className="col">
        {task.description}
        </p>
        </div>


           <div className="row">
            <div className="col text-center">
                <b>location</b>
                    <br/>
                {task.location}
    </div>
    
    <div className="col text-center">
        <b>Limit </b>
        <br/>
        {task.limit}
        
    </div>
        </div>
             </div>    
                    <div
                    className="modal-footer">
                       <button className='btn btn-sm btn-outline-danger'>delete
<i className="bi bi-trash3-fill"></i>
  </button> 
  <button 
                        type="button"
                        className="btn btn-sm btn-outline btn-secondary"
                        data-bs-dismiss="modal">
                            close
                        </button>

                        <button className='btn btn-sm btn-outline-primary'>
<i className="bi bi-pencil-square">Edit</i></button>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddTaskModal