import Listitem from "./Listitem"
import PropTypes from "prop-types"

const List=({tasklist, settasklist})=>{


return (
    
    <>
    
    <div className="row m-2">
      <div className="col-6">
<h4> Tasks</h4>
      </div>
      <div className="col-2">
<h4>Limit </h4>
      </div>
      <div className="col">
<h4> location</h4>
      </div>
      <div className="col-1">


      </div>
    </div>
    {
        tasklist.map((task)=>{
            return(
                <Listitem
                key={task.id}
                task={task}
                tasklist={tasklist}
                settasklist={settasklist}
                

                />
            )
        }
    )
    }
   
   </>

  )
}
List.propTypes={
    tasklis: PropTypes.array.isRequired,
    settasklist: PropTypes.func.isRequired
  }
export default List