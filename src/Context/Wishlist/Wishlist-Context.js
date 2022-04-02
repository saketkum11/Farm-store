import axios from "axios";
import React  from "react";
import { useEffect,createContext,useContext} from "react";

const wishlistContext = createContext();
const useWishlist = () => useContext(wishlistContext);

const WishlistProvider = ({children}) => {
   
    useEffect(()=>{

       const getWishlist = async () => {

        try {

            const response = await axios.post("/api/user/wishlist");
            console.log("response",response.data.wishlist)
            
        } catch (error) {
            console.log(error)
        }

       }
    getWishlist()
        
    }
    ,[])

    return(<wishlistContext.Provider value={{items:8}}>{children}</wishlistContext.Provider>)
}
export {WishlistProvider,useWishlist}