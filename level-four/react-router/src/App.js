import React from "react"
import {Switch, Route, Link} from "react-router-dom"

import Home from "./Home"
import Services from "./Services"
import About from "./About"
import Footer from "./Footer"



function App(){
    return(
        <div>
            <div className="nav-div">
                <nav className="nav">
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/services" className="nav-item">Services</Link>
                    <Link to="/about" className="nav-item">About</Link>
                </nav>
            </div>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/services">
                    <Services />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default App