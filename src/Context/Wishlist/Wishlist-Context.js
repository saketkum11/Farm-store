import axios from "axios";
import React  from "react";
import { useEffect,createContext,useContext,useState} from "react";
import { useAuth } from "../Auth/Auth";

const wishlistContext = createContext();
const useWishlist = () => useContext(wishlistContext);


const WishlistProvider = ({children}) => {
    const {authToken,tokenValue} = useAuth();
    
    const [wishlistProduct,setWishlistProduct] = useState([])


  

    useEffect(()=>{

       const getWishlist = async () => {

        try {
            const response = await axios.get("/api/user/wishlist",{
                headers: {
                    authorization: tokenValue,
                },
            })
           setWishlistProduct(response.data.wishlist)
        } catch (error) {
            console.log(error);
        }

       }
    getWishlist()
        
    }
    ,[])

    const wishlistAdded = async (product) =>{

           try {
               const response = await axios.post("/api/user/wishlist",{product},{
                   headers :{
                       authorization: tokenValue,
                   }
                   
               });
               setWishlistProduct(response.data.wishlist)
           } catch (error) {
               console.error(error)
           }

 
    }
    console.log("setWishlist",{authToken},wishlistProduct)
 
    return(<wishlistContext.Provider value={{wishlistProduct,wishlistAdded}}>{children}</wishlistContext.Provider>)
}
export {WishlistProvider,useWishlist}