import React, { useState } from "react"
import axios from "axios"

function Search(){

    const [inputData, setInputData] = useState("")
    const [searchPokemon, setSearchPokemon] = useState(null)


    function handleChange(event){
        const {value} = event.target
        setInputData(value)
    }

    function handleSubmit(event){
        event.preventDefault()
        event.target.reset()
        axios.get(`https://pokeapi.co/api/v2/pokemon/${inputData}`)
        .then(res => setSearchPokemon(res.data))
    }
          

    return(
        <div className="search-outer">
            <h2 className="search-title">Search for a Specific Pokemon Here</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Pokemon Name Here"
                    value={inputData.name}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>
            </form>
            <div className="search-mon results">
                {searchPokemon && <div key={searchPokemon?.name}>
                <h3 style={{textTransform: "capitalize"}}>{searchPokemon?.id}: {searchPokemon?.name}</h3>
                <img className="img" src={searchPokemon?.sprites?.front_default} alt="Normal" height="400px" width="400px"/>
                <img className="img" src={searchPokemon?.sprites?.front_shiny} alt="Shiny" height="400px" width="400px"/>
                <p>Height: {searchPokemon?.height}</p>
                <p>Weight: {searchPokemon?.weight}</p>
                <p>Type: {searchPokemon.types[0].type.name} {searchPokemon.types[1]?.type.name}</p>
            </div>}
            </div>
        </div>
    )
}

export default Search