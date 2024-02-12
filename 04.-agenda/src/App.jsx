import ListItem from "./assets/Listitem"
const personas =[
  {
  Nombre: 'Angel Armando',
  correo: 'kuategonz@gmail.com'
  },
  {
    Nombre: 'Adela Naileth',
    correo:'Nai1111@hotmail.com'
  },
  {Nombre:'Fernando Armas',
  correo:'farms@gmail.com'
  }
]
function App() {

  return (
  <div>
    <h1>Agenda</h1>
    <hr/>
    <ul>
{
  personas.map((persona)=>(
    <ListItem 
    key={persona.Nombre}
    Nombre={persona.Nombre}
    correo={persona.correo}
    />

  )

  )
}
    </ul>
  </div>
    )
}

export default App
