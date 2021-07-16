import './Cart.css'
import { ShoppingCartContext } from '../context/ShoppingCartContext'
import React, { useContext } from 'react'

export default function Cart(props) {
    const {cart, setCart} = useContext(ShoppingCartContext)
    return(
        <div className='cart'>
            <h2>Your Shoppping Cart</h2>
            {cart.length < 1 ? 
            <h2 className='empty_cart'>Looks Like Your is Empty. Click on Inventory to choose items.</h2> :
            cart.map(cartItem => 
                <div className='cart_item'>
                    <img src={cartItem.imgURL} alt='' className='cart_image'/>
                    <div className='cart_info'>
                        <h4>{cartItem.name}</h4>
                        <p>{cartItem.description}</p>
                        <p>Price: <strong>{cartItem.price}</strong></p>
                        <p>Part Type: <strong>{cartItem.type}</strong></p>
                        <button className='remove'>Remove</button>
                    </div>
                </div>)}
        </div>
    )
}