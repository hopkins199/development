import './Items.css'
import { useStateValue } from './StateProvider'
import React from 'react'

export default function Items(props){
    const { name, description, price, imgURL, type, _id } = props
    const [dispatch] = useStateValue()

    function addToCart() {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                _id: _id,
                name: name,
                description: description,
                price: price,
                imgURL: imgURL,
                type: type,
            },
        })
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