import AddTaskModal from "./AddTaskModal"
import List from "./List"
const tasklist=[
  {
    id:1,
    location:'escuela',
    task:"estudiar",
    limit:"15:00",
    description:'estudiar para Frontend',
    isDone: false
  },{
    id:2,
    location:'campo',
    task:"practicar",
    limit:"18:00",
    description:'practicar para las finales',
    isDone: false
  },{
    id:3,
    location:'casa',
    task:"dormir",
    limit:"23:00",
    description:'descansar para tener energia y hacer mis actividades',
    isDone: false
  },
]
function App() {

  return (
    
<>
    <div className="container">
    <h2>To Do List</h2>
    <hr/>
    <List
    tasklist={tasklist}/>
    <hr/>
    <div className="text-end">
  <AddTaskModal/>
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
