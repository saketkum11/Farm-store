import React ,{  useState,createContext, useContext } from "react";


const  CartContext = createContext();
const useCart = () => useContext(CartContext);

const CartProvider = ({children}) =>  {
    const [counter,setCounter] = useState(0)

    return (<CartContext.Provider value={{counter,setCounter}}>{children}</CartContext.Provider>)

}

export {useCart,CartProvider};