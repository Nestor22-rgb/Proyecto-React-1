import { useState, useEffect } from "react"
import { getProductos, getProductosPorCategoria } from "../../Asycmocks"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
const ItemLisContainer = () => {
  
  const [productos,setProductos] = useState([])

  const {idCategoria} = useParams()



  useEffect(()=>{

    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategoria)
      .then(res => setProductos(res))
      
  }, [idCategoria])
    
  return (
    <>
    <h2 style={{textAlign: "center"}}>MIS PRODUCTOS</h2>
    <ItemList productos={productos}/>
    </>
  )
}

export default ItemLisContainer