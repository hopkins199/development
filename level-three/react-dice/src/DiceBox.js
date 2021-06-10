import React from "react"
import audio from "./roll.wav"

class DiceBox extends React.Component {

    constructor(){
        super()
        this.state = {
            dice: [Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)]
        }
        this.rollDice = this.rollDice.bind(this)
    }

    rollDice() {
        this.setState({
            dice: this.state.dice.map(number => Math.floor(Math.random()*6)+1)
        })
        new Audio(audio).play();
    }
    render(){
        return (
            <div className="main-container">
                <div className="dice-container">
                    <h2 className="die">{this.state.dice[0]}</h2>
                    <h2 className="die">{this.state.dice[1]}</h2>
                    <h2 className="die">{this.state.dice[2]}</h2>
                    <h2 className="die">{this.state.dice[3]}</h2>
                    <h2 className="die">{this.state.dice[4]}</h2>
                </div>
                <button className="rollEm" onClick={this.rollDice}>Roll Dice</button>
            </div>
        )
    }
}


  

export default DiceBox