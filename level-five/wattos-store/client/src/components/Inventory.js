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

    function handleFilter(e){
        if(e.target.value === 'reset'){
            getItems()
        } else {
            axios.get(`/items/search/type?type=${e.target.value}`)
                .then(res => setItems(res.data))
                .catch(err => console.log(err))
        }
    }


    useEffect(() => {
        getItems()
    }, [])

    return(
        <div>
            <h2 className='inventory_title'>Parts in stock </h2>
            <div className='inventory_filter'>
                <h4>Filter by parts type</h4>
                <select onChange={handleFilter} className='filter_form'>
                    <option value='reset'>Show All Parts</option>
                    <option value="spaceship" >Spaceship Parts</option>
                    <option value='droid'>Droid Parts</option>
                    <option value='pod-racer' >Pod Racer</option>
                </select>
            </div>
            <div className='inventory'>
                <div className='inventory_items'>
                    { items.map(item => <Items {...item} key={item._id}/>)}
                </div>
            </div>
            
        </div>
        
    )
}

export default Inventory