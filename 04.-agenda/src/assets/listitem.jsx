const ListItem =({Nombre,correo})=>{
    return (
    <li>
    <a href={correo}>{Nombre}</a>
    </li>
    )
    }
    
    export default ListItem