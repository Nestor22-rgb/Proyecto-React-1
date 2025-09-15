import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProductos'>
      <img src={img} alt={nombre} />
      <h3> {nombre}</h3>
      <p>Precio: {precio}</p>
      <p>Id: {id}</p>
      <Link to={`/item/${id}`}> <button>Ver detalles</button> </Link>
    </div>
  )
}
  


export default Item