import React  from "react";
import { createContext, useContext ,useState} from "react";
import { useProduct } from "../Product/Product-Context";

const filterContext = createContext(null)
const useFilter = () => useContext(filterContext);


const FilterProvider =  ({children}) => {
    const [filter,setFilter] =  useState();
    const {items} = useProduct()

    return(<filterContext.Provider value={{}}>{children}</filterContext.Provider>)
}

export {FilterProvider,useFilter};