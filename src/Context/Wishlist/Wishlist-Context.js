import axios from "axios";
import React  from "react";
import { createContext,useContext,useState} from "react";
import { useAuth } from "../Auth/Auth";

const wishlistContext = createContext();

const WishlistProvider = ({children}) => {


    const {authToken,tokenValue} = useAuth();
    const [wishlist,setWishlist] = useState([])
    const getWishlist = async () => {
        try {
            const response = await axios.get("/api/user/wishlist",{
                headers: {
                    authorization: tokenValue,
                },
            })
           setWishlist(response.data.wishlist);
           console.log("getwishlist",response)
        } catch (error) {
            console.log(error);
        }
       }
    const addItem = async (product) =>{
           try {
               const response = await axios.post("/api/user/wishlist",{product},{
                   headers :{
                       authorization: tokenValue,
                   }
               });
               setWishlist(response.data.wishlist)
           } catch (error) {
               console.error(error)
           }
    }
    console.log("wislist",wishlist)
    const removeItem = async (product) => {
        try {
            const response = await axios.delete(`/api/user/wishlist/${product._id}`,{
                headers:{
                    authorization: tokenValue,
                }
            });
           setWishlist(response.data.wishlist);
        } catch (error) {
         console.error(error)
        }
    }
    return(<wishlistContext.Provider value={{wishlist,getWishlist,removeItem,addItem}}>{children}</wishlistContext.Provider>)   
}
const useWishlist = () => useContext(wishlistContext);

export {WishlistProvider,useWishlist}