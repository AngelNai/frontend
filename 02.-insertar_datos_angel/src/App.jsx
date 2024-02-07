const persona={
nombre :'Angel Armando',
edad : 21 ,
fecha_de_nacimiento:'15 de Octubre del 2002',
Signo:'Libra',
Partido: 'Morena',
estado: 'en una relacion con Adelita',
pasatiempos: ['escuchar musica de Central Cee',
'escribir y platicar con mi novia', 'ver ropa y accesorios por internet',
'dormir','ver peliculas o programas de tv, ademas de oir podcast, autoreseñas y documentales'],
}
function App() {

  return (
   <div>
    <h1>informacion personal</h1>
    <hr/>
    <ul>
 <li>Nombre completo:{persona.nombre} </li>
 <li>Edad:{persona.edad} </li>
 <li>Fecha de nacimiento{persona.fecha_de_nacimiento}</li>
 <li>Signo{persona.Signo}</li>
 <li>Partido{persona.Partido}</li>
 <li>Estado civil:{persona.estado}</li>
<li>Pasatiempos:</li>
<ul>

<li>{persona.pasatiempos[0]}</li>
<li>{persona.pasatiempos[1]}</li>
<li>{persona.pasatiempos[2]}</li>
<li>{persona.pasatiempos[3]}</li>
<li>{persona.pasatiempos[4]}</li>





{
  persona.pasatiempos.map((pasatiempo) => {
     return <li key={pasatiempo}>
    {pasatiempo}

  </li>

})
}
</ul>
   </ul>
   </div>
  )
}

export default App
