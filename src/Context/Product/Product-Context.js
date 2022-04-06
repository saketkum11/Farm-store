import axios from "axios";
import { Action } from "history";
import React ,{ createContext ,useContext,useState } from "react";
import { useEffect } from "react";


const productContext = createContext();
const useProduct = () => useContext(productContext); 



const ProductProvider = ({children})  => {
    const [items,setItems] = useState([])  
    
    useEffect(()=>{
        async function productName(){
        try {
            const response = await axios.get("/api/products")
            setItems(response.data.products)
        } catch (error) {
            console.log(error)
        }
       
    } productName() },[])
    return(<productContext.Provider value={{items,setItems}}>{children}</productContext.Provider>)
}

export {useProduct,ProductProvider};