
import React  from "react";
import { createContext, useContext ,useReducer} from "react";
import { useEffect } from "react";
import { useProduct } from "../Product/Product-Context";
import filterReducer from "./reducer/filterReducer";
const filterContext = createContext(null)
const useFilter = () => useContext(filterContext);


const FilterProvider =  ({children}) => {
    const {items} = useProduct();

    const initialState = {
        showCategoryInventory:[],
        showSort:null,
        showRating:0,
        showAllProduct:[],
        maxPrice:1000,
    }
   

    const [state,dispatch] = useReducer(filterReducer,initialState)
    
    useEffect(()=>{console.log(state);
    },[])
  

    return(<filterContext.Provider value={{state,dispatch}}>{children}</filterContext.Provider>)
}
export {FilterProvider,useFilter};
