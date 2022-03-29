
import React  from "react";
import { createContext, useContext ,useState,useReducer} from "react";
import { useProduct } from "../Product/Product-Context";

const filterContext = createContext(null)
const useFilter = () => useContext(filterContext);

const FilterProvider =  ({children}) => {
    const [filter,setFilter] =  useState("Hey saket great work yr");
    const {items} = useProduct();

    const reducerFunction = (state,action) => {
        switch (action.type) {
            case "SORT": {
               return {
                  ...state,sortBy:action.payload
                }
            }
                
                break;
        
            default:
                break;
        }
    }
    
    const [state,dispatch] = useReducer( reducerFunction,
        
        {inventoryAll:true,sort:null,inventoryFilter:false})
       
    function getSortedData(productList,state){
        if(state.sortBy && sortBy === "PRICE_LOW_TO_HIGH"){
                 console.log(productList.sort((a,b)=>a.price-b.price))
        }
    }

    const sortedData = getSortedData(items,)
        
    console.log("state",state)

    return(<filterContext.Provider value={{filter,state,dispatch}}>{children}</filterContext.Provider>)
}
export {FilterProvider,useFilter};
