import React from "react"
import DiceBox from "./DiceBox"

class App extends React.Component {


    render(){
        return (
            <div >
                <h1 className="title">React Dice</h1>
                <DiceBox />
            </div>
        )
    }
}

export default App