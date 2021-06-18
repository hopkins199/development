import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Nav(props){
    return(
        <ThemeContextConsumer>
            {context => (
                <ul className={`${context.theme}-theme nav`}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            )}
        </ThemeContextConsumer>

    )
}

export default Nav