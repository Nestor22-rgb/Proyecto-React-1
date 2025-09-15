import "./ItemDetail.css"

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className="contenedorItem">
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} /> 
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem labore nam, porro cum, deserunt laborum eveniet, cupiditate quo aut delectus sed explicabo recusandae. Minima doloremque quos officia dolorem tempore voluptas.
        trum pariatur adipisci doloremque fuga nulla! Illum fugit quaerat accusantium fuga magnam labore aspernatur nulla nisi, voluptatem harum.
        </p>
    </div>
  )
}

export default ItemDetail