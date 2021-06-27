import React, { useState, useEffect } from "react"
import axios from "axios"

function Home(){
    const[pokemon, setPokemon] = useState("")

    function getResults(){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
        .then(res => setPokemon(res.data))

    }
    
    let randomNum = Math.floor(Math.random() * 151)
    
    useEffect(() => {
        getResults()
    }, [])
    

    return(


        <div className="home-outer">
            <div className="home-inner">
                <h2 className="rando">Random Pokemon of the Day</h2>
                {pokemon &&  
                    <div className="rando-poke results">
                        <h3 style={{textTransform: "capitalize"}}>{pokemon.id}: {pokemon.name}</h3>
                        <img className="img" src={pokemon.sprites.front_default} alt="" height="400px" width="400px"/>
                        <p>Height: {pokemon.height}</p>
                        <p>Weight: {pokemon.weight}</p>
                        <p>Type: {pokemon.types[0].type.name} {pokemon.types[1]?.type.name}</p>
                    </div>
                    }
            </div>
        </div>
    )
}

export default Home