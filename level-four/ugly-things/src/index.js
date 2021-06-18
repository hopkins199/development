import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {ThingProvider} from "./thingContext"

ReactDOM.render(
    <ThingProvider>
        <App />
    </ThingProvider>, 
    document.getElementById("root"))