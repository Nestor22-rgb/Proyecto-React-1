import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import ItemLisContainer from "./componentes/ItemListContainer/ItemLisContainer"
import NavBar from "./componentes/NavBar/NavBar"

const App = () => {


  return (
    
    <>
      <BrowserRouter>
       <NavBar/>
        <Routes>
          <Route path="/" element={<ItemLisContainer/>}/>
          <Route path="/categoria/:idCategoria" element={<ItemLisContainer/>}/>
          <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>


    </>
  
  )
}

export default App