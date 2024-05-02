import withReactContent from "sweetalert2-react-content"
import { useForm } from "./Hooks/UseForm"
import Swal from "sweetalert2"
import {v4 as uuidv4} from 'uuid'
import React from "react"
import PropTypes from "prop-types"


const taskInfo={
    task:'',
    description:'',
    location:'',
    limit:'',

}

 

const AddTaskModal =({task=null, tasklist,settasklist})=>{
    
    const [values, HandleInputChange,reset]=useForm(
        task||taskInfo
    )


    const MySwal=withReactContent(Swal)
    
    const  handleSaveClick=()=>{
        let newtasklist=[]
        if(task){
            newtasklist=tasklist.map((taskItem)=>{
                if (taskItem.id===task.id){
                    task.task=values.task
                    task.description=values.description
                    task.location=values.location
                    task.limit=values.limit    
                }
                return taskItem
            })
        }else{
            newtasklist=[...tasklist,{
            id: uuidv4(),
            ...values,
            done:false
        }]
    

        }
       
settasklist(newtasklist)
    localStorage.setItem('tasklist',JSON.stringify(newtasklist))


    
    reset()
MySwal.fire({
    title: "Actividad agregada.",
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(/images/trees.png)",
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `
  });
}
const id=task?.id||''
    return(
        <div className="modal fade" id={"AddTaskModal"+id}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div  className="modal-header">
                        <h1 className="modal-title"
                            id="AddTaskModalLabel">    {task ?"edit task":"add task"}Add New Task
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
            name="task"
            value={values.task}
            onChange={HandleInputChange}
            id="task"/> 

<label
            className="form-label"
            htmlFor="description">Description</label>
            <input 
            type="text"
            name="description"
            value={values.description}
            onChange={HandleInputChange}
            className="form-control"
            id="description"/> 


<label
            className="form-label"
            htmlFor="location">Location</label>
            <input 
            type="text"
            name="location"
            value={values.location}
            onChange={HandleInputChange}
            className="form-control"
            id="location"/> 

<label
            className="form-label"
            htmlFor="limit">Limit Time</label>
            <input 
            type="time"
            name="limit"
            value={values.limit}
            onChange={HandleInputChange}
            className="form-control"
            id="limit"/> 

        </div>
          </div>
            </div>
              </div>





                    <div className="modal-footer">
                       <button className='btn btn-sm btn-outline-primary'
                       onClick={handleSaveClick}
                        data-bs-dismiss="modal">
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


AddTaskModal.propTypes={
    task: PropTypes.object,
    tasklis: PropTypes.array.isRequired,
    settasklist: PropTypes.func.isRequired
}
export default AddTaskModal