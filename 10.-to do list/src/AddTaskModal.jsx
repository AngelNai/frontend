const AddTaskModal =()=>{
    return(
        <div className="modal fade" id={"AddTaskModal"}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div  className="modal-header">
                        <h1 className="modal-title"
                            id="AddTaskModalLabel">    Add New Task
                              </h1>
                        <button 
                            type="button" className="btn-close" 
                            data-bs-dismiss="modal">
                        </button>

                    </div>
            
<div className="modal-body ">
    <div className="modal-body container">
       <div className="row text-start">
           <div className="col">
            <label
            className="form-label"
            htmlFor="task">Task</label>
            <input 
            type="text"
            className="form-control"
            id="task"/> 

<label
            className="form-label"
            htmlFor="descroption">Description</label>
            <input 
            type="text"
            className="form-control"
            id="description"/> 


<label
            className="form-label"
            htmlFor="location">Location</label>
            <input 
            type="text"
            className="form-control"
            id="Location"/> 

<label
            className="form-label"
            htmlFor="descroption">Limit Time</label>
            <input 
            type="time"
            className="form-control"
            id="limit"/> 

        </div>
          </div>
            </div>
              </div>





                    <div className="modal-footer">
                       <button className='btn btn-sm btn-outline-primary'>
<i className="bi bi-pencil-square"></i>Save
  </button> 

  <button 
                        type="button"
                        className="btn btn-outline-secondary"
                        data-bs-dismiss="modal">
                            close
                        </button>

                    

                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddTaskModal