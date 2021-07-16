import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home';
import Inventory from './components/Inventory'
import Cart from './components/Cart';
import { ShoppingCartContextProvider } from './context/ShoppingCartContext';

function App() {
  return (
        <ShoppingCartContextProvider>
    <div className="App">
          <Router>
            <Header path1={"home"} path2={"inventory"} path3={"cart"} />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/inventory'>
                <Inventory />
              </Route>
              <Route path='/cart'>
                <Cart />
              </Route>
            </Switch>
          </Router>
    </div>
        </ShoppingCartContextProvider>
  );
}

export default App;
