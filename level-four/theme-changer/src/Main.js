import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Main(props){
    return(
        <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme}-theme main`}>
                    <p className={`${context.theme}-theme`}>Click the button to Change the Theme</p>
                    <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Main