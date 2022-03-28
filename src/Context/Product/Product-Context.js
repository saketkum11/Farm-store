import axios from "axios";
import React ,{ createContext ,useContext,useEffect,useState } from "react";

const ProductContext = createContext();
const useProduct = () => useContext(ProductContext); 



const ProductProvider = ({children})  => {
    const [items,setItems] = useState([])
    useEffect(()=>{

        const productData = async() =>{
            try {
                const response = await axios.get("/api/products")
                
                setItems(response.data.product)
                console.log(response.data.product);
            } catch (error) {
                console.log("error")
            }
        }
    },[])

    return(<ProductContext.Provider value={{items}}>{children}</ProductContext.Provider>)
}

export {useProduct,ProductProvider};