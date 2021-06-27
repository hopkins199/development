import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import Home from "./Home"
import List from "./List"
import Search from "./Search"

function App(){
    return(
        <div>
            <div className="header-con">
                <div className="header-inner">
                    <h1>Who's That Pokemon?</h1>
                    <div className="nav-bar">
                        <nav className="nav-inner">
                            <Link className="nav-item" to="/">Home</Link>
                            <Link className="nav-item" to="/list">PokeList</Link>
                            <Link className="nav-item" to="/search">PokeSearch</Link>
                        </nav>
                        <img className="logo " src="https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png" height="100px" width="280px" alt=""/>
                    </div>
                </div>
            </div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/list">
                    <List />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
            </Switch>
        </div>
    )
}

export default App