import React from "react"
import axios from "axios"
class App extends React.Component {
    constructor(){
        super()
        this.state = {
            colorArray: []
        }
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(){
        axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
             .then(res => {
                 this.setState({colorArray: [res.data.colors[0].hex]})
             })
    }
    handleClick(){
         axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
              .then(res => this.setState({colorArray: [...this.state.colorArray, res.data.colors[0].hex]}))
    }
    render(){
        const colorBlock = this.state.colorArray.map(color => (<div style={{backgroundColor: `#${color}`, height: 100, width: 100}}></div>))
        return (
          <div>
               <button onClick={this.handleClick}>Generate New Color</button>
               {colorBlock}
          </div>
        )
    }
}
export default App