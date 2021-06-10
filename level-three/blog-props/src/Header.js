import React from "react"
import Nav from "./Nav"

function Header () {


    return (

        <header className="header">
                <h1 className="clean-blog">Clean Blog</h1>
                <span className="subtitle">A Blog Theme By Start Bootstrap</span>
                <div className="image-overlay"></div>
            <div>
                <Nav />
            </div>
        </header>
    )
}

export default Header