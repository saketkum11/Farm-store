
import React  from "react";
import { createContext, useContext ,useReducer} from "react";

import { useProduct } from "../Product/Product-Context";
import { getSortedData } from "./getSortedData";
import filterReducer from "./reducer/filterReducer";
//import { sortData,FilterCategoryData,FilterPriceData,FilterRatingData,compose} from "../../utilities/filterUtilities";


const filterContext = createContext()
const useFilter = () => useContext(filterContext);

const FilterProvider =  ({children}) => {
    const {items} = useProduct();

    const initialState = {
        showCategoryInventory:{
                                fruit:false,
                                vegetable:false,
                                eggAndMeat:false,
                                grain:false},
        showSort:null,
        showRating:null,
        maxPrice:null,

    }
    
   
    const [state,dispatch] = 
        useReducer(filterReducer,initialState)
    
     const {
         showCategoryInventory:{fruit,vegetable,eggAndMeat,grain},
         showRating,
         showSort,
         maxPrice} = state;

 
   const getFilteredData = (sortedData,fruit,vegetable,eggAndMeat,grain)=>{

    

    if(state.showCategoryInventory.grain === true){
        return sortedData.filter((product)=> product.categoryName === "grain")
    }
    if(state.showCategoryInventory.fruit === true){
        return sortedData.filter((product)=> product.categoryName === "fruit")
    }
    if(state.showCategoryInventory.eggAndMeat === true){
        return sortedData.filter((product)=> product.categoryName === "egg and meat")
    }
    if(state.showCategoryInventory.vegetable === true){
        return sortedData.filter((product)=> product.categoryName === "vegetable")
    }
       return sortedData
   }
   console.log(state);
    
   const sortedData = getSortedData(items,state);
   const filtedData = getFilteredData(sortedData,state)
    // const data = compose(state,items,sortData,FilterCategoryData,FilterPriceData,FilterRatingData);
    



    return(<filterContext.Provider value={{state,dispatch,sortedData,filtedData}}>{children}</filterContext.Provider>)
}
export {FilterProvider,useFilter};
