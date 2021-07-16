import './Items.css'
import React, { useContext } from 'react'
import { ShoppingCartContext } from '../context/ShoppingCartContext'


export default function Items(props){
    const { name, description, price, imgURL, type, _id } = props
    const {cart, setCart} = useContext(ShoppingCartContext)


    function addToCart(e) {
        e.preventDefault()
        setCart(prevState => [...prevState, {name: name, description: description, price: price, imgURL: imgURL, type: type, _id: _id }])
        console.log(cart)
    }

    return(
        <div className='item'>
            <div className='product_info'>
            <h4>{name}</h4>
            <p>{description}</p>
            <p>Price: <strong>{price}</strong></p>
            <p>Part Type: <strong>{type}</strong></p>
            </div>
            <div className='item_others'>
                <button onClick={addToCart}>Add to Cart</button>
                <img src={imgURL} alt='' className='item_image'/>
            </div>
        </div>
    )
}