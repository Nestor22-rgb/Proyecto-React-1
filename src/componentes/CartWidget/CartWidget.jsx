import "./CartWidget.css"


const CartWidget = () => {

    const imgCarrito= "https://tse2.mm.bing.net/th/id/OIP.ErB9fX2952o6aHVS1Q05fwHaHa?pid=Api&P=0&h=180"
    
  return (
    <div>
        <img src="{imgCarrito}" alt="carrito" />
        <strong>0</strong>
    </div>

  )
}

export default CartWidget