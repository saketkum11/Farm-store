
import React  from "react";
import { createContext, useContext ,useReducer} from "react";
import { useProduct } from "../Product/Product-Context";

const filterContext = createContext(null)
const useFilter = () => useContext(filterContext);

const FilterProvider =  ({children}) => {
   
    const {items} = useProduct();

    const filterReducer = (state,action) => {
        switch (action.type) {
            case "SORT": {
               return {
                  ...state,sortBy:action.payload
                }
            }
            case "INVENTORY":
              return {
                  ...state,showCategoryInventory:state.showCategoryInventory + action.payload
              }
            default:
                break;
        }
    }
    
    const [state,dispatch] = useReducer( filterReducer,
        
        {
         showCategoryInventory:[],
         sortBy:null,
        })
   
   const getSortedData = (productList, sortBy ) =>{

       if(sortBy && sortBy === "PRICE_LOW_TO_HIGH"){
          
           return productList.sort((a,b)=>a["price"]-b["price"])
       }
       if(sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      
           return productList.sort((a,b)=>b["price"]-a["price"])
       }
        
       return productList;
   } 
 

   const getFiltered = (data,state) => {

    data.filter((product)=>{

      
    })

   }
   console.log("initicail",state)
   
    const sortedData = getSortedData(items,state.sortBy);
    const filteredData = getFiltered(sortedData,state);

    return(<filterContext.Provider value={{dispatch,state,sortedData,filteredData}}>{children}</filterContext.Provider>)
}
export {FilterProvider,useFilter};
