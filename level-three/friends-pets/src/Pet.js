import React from "react"


function Pet (props){

    
    return (
        <div className="pets-card">
            <div className="pets-items">
                <p>Name: {props.boy.name}</p>
                <p>Breed: {props.boy.breed}</p>
            </div>
        </div>
    )
}

export default Pet