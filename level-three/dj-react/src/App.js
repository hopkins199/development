import React from "react"
import Header from "./Header"
import audio from "./dj-airhorn-sound-effect-kingbeatz_1.mp3" 

class App extends React.Component {

    constructor (){
        super()
        this.state = {
            colors: ["white", "white", "white", "white"],
            backgroundImage: []
        }
        this.smallClick = this.smallClick.bind(this)
        this.partyClick = this.partyClick.bind(this)
        this.leftBlue = this.leftBlue.bind(this)
        this.rightBlue = this.rightBlue.bind(this)
        this.bigOne = this.bigOne.bind(this)
        this.bigTwo = this.bigTwo.bind(this)
        this.bigThree = this.bigThree.bind(this)
        this.bigFour = this.bigFour.bind(this)
        this.noiseClick = this.noiseClick.bind(this)
    }
    
    smallClick(){
        this.setState(prevState => {
             if(prevState.colors[0] === "white"){
                return {
                colors: ["black", "black", "black", "black"]
            }
            } else if (prevState.colors[0] === "black"){
             return {
                  colors: ["white", "white", "white", "white"]
                }
            } else if (prevState.colors[0] !== "white" && prevState.colors[0] !== "black"){
                return {
                    colors: ["white", "white", "white", "white"]
                }
            }
        })
    }

    partyClick(){
        this.setState(prevState => {
                return {
                    colors: ["purple", "purple", prevState.colors, prevState.colors]
                }
        })
    }

    leftBlue(){
        this.setState(prevState => {
            return {
                colors: [prevState.colors, prevState.colors, "blue", prevState.colors]
            }
    })
    }

    rightBlue(){
        this.setState(prevState => {
            return {
                colors: [prevState.colors, prevState.colors, prevState.colors, "blue"]
            }
    })
    }

    bigOne(){
        this.setState(prevState => {
            return {
                colors: ["deeppink", prevState.colors, prevState.colors, prevState.colors]
            }
        })
    }

    bigTwo(){
        this.setState(prevState => {
            return {
                colors: [prevState.colors, "darkorange" , prevState.colors, prevState.colors]
            }
        })
    }

    bigThree(){
        this.setState(prevState => {
            return {
                colors: [ prevState.colors, prevState.colors, "lime", prevState.colors]
            }
        })
    }

    bigFour(){
        this.setState(prevState => {
            return {
                colors: [prevState.colors, prevState.colors, prevState.colors, "yellow"]
            }
        })
    }

    
    noiseClick = () => {
        new Audio(audio).play();
      }

    render(){
    return (
        <div>
            <Header />
            <div className="dj-container">
                <div className="box-container">
                    <span className="one box"  style={{backgroundColor: this.state.colors[0]}}></span>
                    <span className="two box"  style={{backgroundColor: this.state.colors[1]}}></span>
                    <span className="three box"  style={{backgroundColor: this.state.colors[2]}}></span>
                    <span className="four box"  style={{backgroundColor: this.state.colors[3]}}></span>
                    </div>
                    <div className="button-container">
                    <button className="btn small-dj left" onClick={this.smallClick}>Small DJ</button>
                    <button className="btn party-dj right" onClick={this.partyClick}>Party DJ</button>
                    <button className="btn left-blue left" onClick={this.leftBlue}>Left Blue</button>
                    <button className="btn right-blue right" onClick={this.rightBlue}>Right Blue</button>
                    <button className="btn big-dj-one left" onClick={this.bigOne}>Big DJ One</button>
                    <button className="btn big-dj-two right" onClick={this.bigTwo}>Big DJ Two</button>
                    <button className="btn big-dj-three left" onClick={this.bigThree}>Big DJ Three</button>
                    <button className="btn big-dj-four right" onClick={this.bigFour}>Big DJ Four</button>
                    <button className="btn noise left" onClick={this.noiseClick}>Let's Make Noise</button>
                </div>
            </div>
        </div>
    )
    }
}

export default App