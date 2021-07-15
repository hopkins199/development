import './Cart.css'
import CartProduct from './CartProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Cart() {
    const [{basket}] = useStateValue()
    return( 
        <div>
            <div>
                <h2 className="checkout__title">Your shopping Basket</h2>
                {basket.map(item => (
                    <CartProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
            <Subtotal />
        </div>
    )
}

export default Cart