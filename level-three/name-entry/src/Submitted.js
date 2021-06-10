import React from "react"

function Submitted(props){

    const namesSubmitted = props.names.map(name => <li>{name}</li>)

    return(
        <div>
            <ol>
                {namesSubmitted}
            </ol>
        </div>
    )
}


export default Submitted