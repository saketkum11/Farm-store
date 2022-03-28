import axios from "axios";
import React ,{ createContext ,useContext,useEffect,useState } from "react";

const productContext = createContext();
const useProduct = () => useContext(productContext); 



const ProductProvider = ({children})  => {
    const [items,setItems] = useState([])
  
     useEffect(()=>{     
             const productName = async () => {
                 try {
                     const response = await axios.get("/api/products")
                     setItems(response.data.products)
                     console.log(response.data.products)
                 } catch (error) {
                     console.log(error)
                 }
             }  

     },[])
         
   

    return(<productContext.Provider value={{items}}>{children}</productContext.Provider>)
}

export {useProduct,ProductProvider};