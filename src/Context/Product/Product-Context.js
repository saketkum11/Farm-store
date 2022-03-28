import axios from "axios";
import React ,{ createContext ,useContext,useEffect,useState } from "react";

const productContext = createContext();
const useProduct = () => useContext(productContext); 



const ProductProvider = ({children})  => {
    const [items,setItems] = useState([])
  
     useEffect(()=>{
         const response = axios.get("/api/products");
         setItems(response.data.products);
         console.log(items)
     },[])
         
   

    return(<productContext.Provider value={{items}}>{children}</productContext.Provider>)
}

export {useProduct,ProductProvider};