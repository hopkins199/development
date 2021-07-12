import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'

function App() {
    return (
        <div className='app'>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <Login />    
                    </Route>
                    <Route to='/home'>
                        <Home />
                    </Route>     
                </Switch>
            </Router>
        </div>
    )
}

export default App
