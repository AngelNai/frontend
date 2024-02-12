import ListItem from "./Listitem.jsx"
const links =[
  {
  name: 'Google',
  url: 'https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwihoNLr2J6EAxUrl2oFHfWwC5IQPAgJ'
  },
  {
    name: 'New Era',
    url:'https://www.newera.mx/'
  },
  {name:'Facebook',
  url:'https://www.facebook.com/?locale=es_LA'
  }
]
function App() {

  return (
  <div>
    <h1>Catalogo de link</h1>
    <hr/>
    <ul>
{
  links.map((link)=>(
    <ListItem 
    key={link.name}
    name={link.name}
    url={link.url}
    />
)

  )
}
    </ul>
  </div>
    )
}

export default App
