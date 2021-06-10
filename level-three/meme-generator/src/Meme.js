import React from "react"

class Meme extends React.Component {
    constructor(props) {
        super()
        this.state = {
            name: props.name,
            imgUrl: props.img,
            topText: "",
            bottomText: "",
            id: props.id
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        //Generates Preview when typing inside of inputs
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="outer-container">
                <div className="meme-container">
                    <h1 className="upper">{this.state.topText}</h1>
                    <img className="img" src={this.state.imgUrl} alt={this.state.name} width="500px" height="500px"/>
                    <h1 className="lower">{this.state.bottomText}</h1>
                </div>
                <form>
                    <input
                        type="text"
                        name="topText"
                        value={this.state.topText}
                        placeholder="Top Text"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                        placeholder="Bottom Text"
                        onChange={this.handleChange}
                    />
                </form>
                <button className="button" onClick={() => {this.props.save(this.state)}}>Save Meme</button>
            </div>
        )
    } 
}

export default Meme