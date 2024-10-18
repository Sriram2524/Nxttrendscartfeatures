// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(each => {
        total += each.price * each.quantity
      })

      return (
        <div className="cart-summary-container">
          <h1 className="heading">
            Order Total: <span className="total">Rs {total}/-</span>
          </h1>
          <p className="items">{cartList.length} items in cart</p>
          <button className="check-out-button" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
