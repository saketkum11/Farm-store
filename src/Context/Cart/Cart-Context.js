import { createContext, useContext } from "react";

const cartContext = createContext();
const useCart = () => useContext(cartContext);

const CartProvider = ({children}) => {

    return(<cartContext.Provider value={{item:29}}>{children}</cartContext.Provider>)
}

export {CartProvider,useCart}