import { useStateValue } from './StateProvider'


function CartProduct({ _id, name, description, price, imgURL, type}){
    const [dispatch] = useStateValue()

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            _id: _id
        })
    }


    return(
        <div>
            <div className='product_info'>
            <h4>{name}</h4>
            <p>{description}</p>
            <p>Price: <strong>{price}</strong></p>
            <p>Part Type: <strong>{type}</strong></p>
            </div>
            <div className='item_others'>
                <button onClick={removeFromCart}>Add to Cart</button>
                <img src={imgURL} alt='' className='item_image'/>
            </div>
        </div>
    )
}

export default CartProduct