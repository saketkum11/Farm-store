import React ,{createContext,useContext} from "react";

const wishlistContext = createContext();
const useWishlist = () => useContext(wishlistContext);

const WishlistProvider = ({children}) => {
    return(<wishlistContext.Provider value={{items:8}}>{children}</wishlistContext.Provider>)
}
export {WishlistProvider,useWishlist}