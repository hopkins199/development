import React from "react"

function Place (props) {
   console.log(props)
    return (
        <div className="card-item">
            <h2 className="place">{props.place.place}</h2>
            <p className="price">{props.place.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
            <p className="timeToGo">{props.place.timeToGo}</p>
        </div>
    )
}

export default Place