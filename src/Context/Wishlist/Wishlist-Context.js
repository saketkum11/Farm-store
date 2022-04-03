import axios from "axios";
import React  from "react";
import { useEffect,createContext,useContext,useState} from "react";
import { useAuth } from "../Auth/Auth";

const wishlistContext = createContext();
const useWishlist = () => useContext(wishlistContext);


const WishlistProvider = ({children}) => {
    const {authToken} = useAuth();
    const [wishlist,setWishlist] = useState([])


  const wishlistAdded = () =>{
      
  }

    useEffect(()=>{

       const getWishlist = async () => {

        try {

            const response = await axios.get("/api/user/wishlist",{

                headers:{
                    authorization: authToken
                }
            })
           setWishlist(response.data.wishlist)
            
        } catch (error) {
            console.log(error);
        }

       }
    getWishlist()
        
    }
    ,[])

        console.log("setWishlist",authToken)
 
    return(<wishlistContext.Provider value={{wishlist,setWishlist}}>{children}</wishlistContext.Provider>)
}
export {WishlistProvider,useWishlist}