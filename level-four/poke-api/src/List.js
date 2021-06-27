import React, { useState, useEffect} from "react"
import axios from "axios"

function List(){

    const[pokemon, setPokemon] = useState([])

    function getResults(){
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
        .then(res => setPokemon(res.data.results))

    }

    useEffect(() => {
        getResults()
        return () => {
        }
    }, [])

    const pokeArr = pokemon.map((poke, index) => {
        return (
            <div key={poke.name}>
                <h3 style={{textTransform: "capitalize"}}>{(index)+1}: {poke.name}</h3>
                <img className="img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Number(index) + 1}.svg`} alt="" height="250px" width="250px"/>
            </div>
        )
    })
    return(
        <div>
            <h3 className="sub-head">Here is a list of the first generation of Pokemon for your viewing pleasure!</h3>
            <div className="list-div">
                <div className="list-inner">
                    {pokeArr}
                </div>
            </div>
        </div>
        
    )
}

export default List