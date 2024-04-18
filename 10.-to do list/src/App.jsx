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
    
    <div>
    <h1>To Do List</h1>
    <hr/>
    <List
    
    
    tasklist={tasklist}
    
    
    />
    
  </div>

  )
}

export default App
