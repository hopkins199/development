import React from "react"
import Pet from "./Pet"


function Friend (props) {

    const petComponent = props.oleBoy.pets.map(pet => <Pet boy={pet}/>)
    console.log(petComponent)
    return (
        <div className="container">
            <div className="container-card">
                <div className="friend-card">
                    <div className="friend-item">
                        <h3>My Friend: {props.oleBoy.name}</h3>
                        <h5>Age: {props.oleBoy.age}</h5>
                    </div>
                </div>
                <div className="pet-card">
                    {petComponent}
                </div>
            </div>
        </div>
    )
}

export default Friend