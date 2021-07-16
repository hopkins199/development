import React, { useState, createContext } from 'react'

const ShoppingCartContext = createContext()

function ShoppingCartContextProvider (props){
    
    const [cart, setCart] = useState([])

    return(
        <ShoppingCartContext.Provider value={{cart, setCart}}>
            {props.children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartContextProvider }