import React from "react"
import watto from './WattoHS.jpg'
import './Home.css'


function Home(){
    return(
        <div className='home'>
            <div className='home_info'>
                <h2>Welcome to Watto's Grotto</h2>
                <h4>Your favorite Toydarian junk dealer home based in Mos Espa on Tatooine is now a galaxy wide Junk Distributor.</h4>
                <h4>Now you can get your junk without ever getting off the couch. We have everything from droid parts to Imperial spaceship parts. As long as you don't ask where I get anything from everything is okie dokie.</h4>
                <h4>Click on the inventory link to see what is in stock. Remember parts change often and you never know what you will find.</h4>
            </div>
            <img src={watto}  alt='' className='watto' />
        </div>
    )
}

export default Home