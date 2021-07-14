import { useState, useEffect } from 'react'
import './Inventory.css'
import axios from 'axios'
import Items from './Items'

function Inventory(){

    const [items, setItems] = useState([])

    function getItems(){
        axios.get('/items')
            .then(res => setItems(res.data))
            .catch(err => console.log(err))
    }


    useEffect(() => {
        getItems()
    }, [])

    return(
        <div>
            <h2>Parts in stock </h2>
            <div className='inventory'>
                <div className='inventory_items'>
                    { items.map(item => <Items {...item} key={item._id}/>)}
                </div>
            </div>
            
        </div>
        
    )
}

export default Inventory