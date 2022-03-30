
import React  from "react";
import { createContext, useContext ,useState,useReducer} from "react";
import { useProduct } from "../Product/Product-Context";

const filterContext = createContext(null)
const useFilter = () => useContext(filterContext);

const FilterProvider =  ({children}) => {
    const [filter,setFilter] =  useState();
    const {items} = useProduct();

    const filterReducer = (state,action) => {
        switch (action.type) {
            case "SORT": {
               return {
                  ...state,sortBy:action.payload
                }
            }
            case "":
                
             
        
            default:
                break;
        }
    }
    
    const [state,dispatch] = useReducer( filterReducer,
        
        {
        inventoryAll:true,
        sortBy:null,
        inventoryFilter:false,
        })
   
   const getSortedData = (productList, sortBy ) =>{

       if(sortBy && sortBy === "PRICE_LOW_TO_HIGH"){
           return productList.sort((a,b)=>a.price-b.price)
       }
       if(sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
           return productList.sort((a,b)=>b["price"]-a["price"])
       }

   } 

    const sortedData = getSortedData(items,state.sortBy);
        
    console.log("state",state)

    return(<filterContext.Provider value={{filter,state,dispatch}}>{children}</filterContext.Provider>)
}
export {FilterProvider,useFilter};
