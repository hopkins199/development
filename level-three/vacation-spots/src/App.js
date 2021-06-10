import React from "react"
import vacationSpots from "./vacationSpots"
import Place from "./Place"

function App (){
    const vacationComponents = vacationSpots.map(item => <Place key={item.id} place={item}/>)
    
    return (
        <div className="card">
            {vacationComponents}
        </div>
    )
}

export default App