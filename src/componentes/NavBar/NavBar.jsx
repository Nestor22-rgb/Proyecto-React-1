import CartWidget from "../CartWidget/CartWidget"
import ItemLisContainer from "../ItemListContainer/ItemLisContainer"
import "./NavBar.css"

const NavBar = () => {


  return (
    <header>
        <h1>Antonia Agosti</h1>
        <nav>
            <ul>
                <li>CARTERAS</li>
                <li>BILLETERAS</li>
                <li>MOCHILAS</li>
            </ul>
        </nav>

        <CartWidget/>
        <ItemLisContainer saludo="ECOMER EN PROCESO"/>
    </header>
    
 
  )
}

export default NavBar