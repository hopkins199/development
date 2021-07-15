import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home';
import Inventory from './components/Inventory'
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route  path='/cart'>
              <Cart />
            </Route>
            <Route path='/inventory'>
              <Inventory />
            </Route>
          </Switch>
        </Router>
        
    </div>
  );
}

export default App;
