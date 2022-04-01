
import React  from "react";
import { createContext, useContext ,useReducer} from "react";
import { useEffect } from "react";
import { useProduct } from "../Product/Product-Context";
import filterReducer from "./reducer/filterReducer";
import { sortData,filterCategoryData,filterPriceData,filterRatingData } from "../../utilities/filterUtilities";


const filterContext = createContext()
const useFilter = () => useContext(filterContext);

const initialState = {
    showCategoryInventory:[],
    showSort:null,
    showRating:0,
    showAllProduct:[],
    maxPrice:1000,
}


const FilterProvider =  ({children}) => {
    const {items} = useProduct();

   
    const [state,dispatch] = useReducer(filterReducer,initialState)
    
    useEffect(()=>{console.log(state);
    },[])
    
    const allFunction = compose(state,items,sortData,filterCategoryData,filterPriceData,filterRatingData)
 
    return(<filterContext.Provider value={{state,dispatch,items}}>{children}</filterContext.Provider>)
}
export {FilterProvider,useFilter};
