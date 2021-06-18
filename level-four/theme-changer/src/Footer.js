import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Footer(props){
    return(
        <ThemeContextConsumer>
            {context => (
                 <footer className={`${context.theme}-theme`}>
                    <p>A Drew Hopkins Production</p>
                    <p>2021</p>
                </footer>
            )}
        </ThemeContextConsumer>
       
    )
}

export default Footer