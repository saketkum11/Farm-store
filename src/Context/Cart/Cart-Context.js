import axios from "axios";
import { createContext, useContext,useEffect,useState } from "react";
import { useAuth } from "../Auth/Auth";

const cartContext = createContext();
const useCart = () => useContext(cartContext);

const CartProvider = ({children}) => {

   const [cart,setCart] = useState([])
    const {authToken,tokenValue} = useAuth();
     useEffect(()=>{
          
       const getCart = async () =>{


        try {
            const response = await axios.get("/api/user/cart",{
                headers: {
                    authorization: tokenValue,
                },
            });

            setCart(response.data.cart)
        } catch (error) {
            console.log(error)
        }
       }
       getCart();
    },[])

    const addCart = async (product) => {
       try {
           const response = await axios.post("/api/user/cart",{product},{
            headers: {
                authorization: tokenValue,
            },
        });
        setCart(response.data.cart)
       } catch (error) {
           console.log(error)
       }
    }

    const removeCart = async(product) =>{
        try {
             
            const response = await axios.delete(`/api/user/cart/${product._id}`,{
                headers:{
                    authorization: tokenValue,
                }
            })
             setCart(response.data.cart)
        } catch (error) {
            console.log(error)
        }
    }
    const incrementQuantity = async(product)=>{
        try {
            const response = await axios.post(`/api/user/cart/${product._id}`,
                { action: { type: "increment" } },{
                headers:{
                    authorization: tokenValue,
                }
            })
            setCart(response.data.cart)
          
        } catch (error) {
            console.error(error);
        }
    }

    const decrementQuantity  = async(product)=>{
        try {
            const response = await axios.post(`/api/user/cart/${product._id}`,
                { action: { type: "decrement" } },{
                headers:{
                    authorization: tokenValue,
                }
            })
            setCart(response.data.cart)
            console.log(response)
        } catch (error) {
            console.error(error);
        }
    }
    

    const priceDetails = (acc,curr) => ({...acc,totalProductPrice:curr.price * curr.qty + acc.totalProductPrice ,totalDiscount:curr.discount + acc.totalDiscount})

    const priceData = cart.reduce(priceDetails,{totalProductPrice:0,totalDiscount:0,deliveryPrice:20})
      
    


    return(<cartContext.Provider value={{cart,addCart,removeCart,incrementQuantity,decrementQuantity,priceData}}>{children}</cartContext.Provider>)
}

export {CartProvider,useCart}