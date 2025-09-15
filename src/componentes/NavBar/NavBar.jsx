import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link } from "react-router-dom"

const NavBar = () => {


  return (
    <header>
      <Link to="/">
      <img src="public/logo.png" alt="" />
      </Link>
        
        <nav>
            <ul>
                <li>
                  <Link to="/categoria/mochilas"> MOCHILAS </Link>
                </li>
                <li>
                  <Link to="/categoria/bolsos"> BOLSOS </Link>
                </li>
                <li>
                  <Link to="/categoria/bandoleras"> BANDOLERAS </Link>
                </li>
            </ul>
        </nav>

        <CartWidget/>
        
    </header>
    
 
  )
}

export default NavBar