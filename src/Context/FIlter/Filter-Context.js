import React  from "react";
import { createContext, useContext ,useState} from "react";
import { useProduct } from "../Product/Product-Context";

const filterContext = createContext(null)
const useFilter = () => useContext(filterContext);


const FilterProvider =  ({children}) => {
    const [filter,setFilter] =  useState("Hey saket great work yr");
    const {items} = useProduct();

    console.log("saksdkj",filter)

    return(<filterContext.Provider value={{filter}}>{children}</filterContext.Provider>)
}

export {FilterProvider,useFilter};