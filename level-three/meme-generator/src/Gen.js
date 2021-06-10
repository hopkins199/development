import React from "react"
import Meme from "./Meme"
import axios from "axios"

class Gen extends React.Component{
    constructor(){
        super()
        this.state = {
            memes: []
        }
        this.refreshClick = this.refreshClick.bind(this)
    }

    componentDidMount() {
        axios.get("https://api.imgflip.com/get_memes")
        .then(res => res.data)
        .then(res => {
            this.setState(
                {
                    memes: [...res.data.memes]
                }
            )
        })
        // .then(() => console.log(this.state.memes))
    }



    refreshClick(event){
        event.preventDefault()
        axios.get("https://api.imgflip.com/get_memes")
        .then(res => res.data)
        .then(res => {
            this.setState(
                {
                    memes: [...res.data.memes]
                }
            )
        })
    }

    render(){

        const memesArr = this.state.memes.map(meme => <Meme key={meme.id} name={meme.name} img={meme.url} width={meme.width} height={meme.height} />)
        const randomMeme = memesArr[Math.floor(Math.random() * memesArr.length)]

        return(
            <div className="meme-container">
                <div className="meme-box">
                    <h2 className="title">Meme Generator 5000</h2>
                    <div className="maker-box">
                        <div className="image-box">
                        <div className="meme-image">
                            {randomMeme}
                        </div>
                        <div className="buttons">
                            <button className="refresh" onClick={this.refreshClick}>Refresh Image</button>
                            <button className="save">Save Meme</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gen