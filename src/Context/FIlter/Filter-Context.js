
import React  from "react";
import { createContext, useContext ,useReducer} from "react";

import { useProduct } from "../Product/Product-Context";
import filterReducer from "./reducer/filterReducer";
//import { sortData,FilterCategoryData,FilterPriceData,FilterRatingData,compose} from "../../utilities/filterUtilities";


const filterContext = createContext()
const useFilter = () => useContext(filterContext);



const FilterProvider =  ({children}) => {
    const {items} = useProduct();
    const initialState = {
        showCategoryInventory:[],
        showSort:null,
        showRating:null,
        showAllProduct:[],
        maxPrice:1000,
    }
    
   
    const [state,dispatch] = useReducer(filterReducer,initialState)
    

   
    
   // const data = compose(state,items,sortData,FilterCategoryData,FilterPriceData,FilterRatingData);
    



    return(<filterContext.Provider value={{state,dispatch}}>{children}</filterContext.Provider>)
}
export {FilterProvider,useFilter};
