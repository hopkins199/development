import React from "react"

class Meme extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const {name, value} = e.target
        this.setState({[name]: value})
    }
    render(){
        return (
            <div>
                <div className="meme-container">
                    <h1 className="upper-text">{this.state.topText}</h1>
                    <img className="meme-img" src={this.props.img} alt={this.props.name} width="500px" height="500px"/>
                    <h1 className="lower-text">{this.state.bottomText}</h1>
                </div>
                <form>
                        <input
                            type="text"
                            name="topText"
                            value={this.state.topText}
                            placeholder="Top Text"
                            size="30"
                            onChange={this.handleChange}
                        />
                        <input
                            type="text"
                            name="bottomText"
                            value={this.state.bottomText}
                            placeholder="Bottom Text"
                            size="31"
                            onChange={this.handleChange}
                        />
                    </form>
            </div>
        )
    }
}

export default Meme