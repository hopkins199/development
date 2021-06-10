import React from "react"
import Submitted from "./Submitted"

class App extends React.Component {

    constructor (){
        super()
        this.state = {
            name: "",
            names: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({name: event.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        const newName = this.state.name
        this.setState(prevState => ({
             name: "",
             names: [...prevState.names, newName]
        }))
   }

    render(){
        
        return (
            <div>
                <input 
                type="text" 
                name="name" 
                value={this.state.name} 
                onChange={this.handleChange}
                placeholder="name"
            />
            <button onClick={this.handleSubmit}>Submit</button>
            <br/>
            <h1>{this.state.name}</h1>
            <br/>
            <Submitted names={this.state.names} />
            </div>
        )
    }
}
export default App