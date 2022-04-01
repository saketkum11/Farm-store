
import React  from "react";
import { createContext, useContext ,useReducer} from "react";


import { useProduct } from "../Product/Product-Context";
import { getSortedData } from "./getSortedData";
import filterReducer from "./reducer/filterReducer";



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
        showRating:0,
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

    const getFruit = [];
    const getGrain = [];
    const getVegetable = [];
    const getEggAndMeat = [];

    if(grain && fruit && eggAndMeat && vegetable){
        return sortedData;
    }
    if(grain === true){
       getFruit = sortedData.filter((product)=> product.categoryName === "grain")
    }
    if(fruit === true){
        getGrain = sortedData.filter((product)=> product.categoryName === "fruit")
    }
    if(eggAndMeat === true){
       getEggAndMeat = sortedData.filter((product)=> product.categoryName === "egg and meat")
    }
    if(vegetable === true){
       getVegetable = sortedData.filter((product)=> product.categoryName === "vegetable")
    }
       return {
           ...getFruit,
           ...getEggAndMeat,
           ...getGrain,
           ...getVegetable,
     }
   }
  const getSortRating = (filteredData,showRating)=> {
      
        if(showRating === 4){
            /*return*/ console.log(filteredData.filter((product)=> product.rating >= 4 ))
        }
      
  }
    
  const filteredData = getFilteredData(items,fruit,vegetable,eggAndMeat,grain);
   const sortedData = getSortedData(filteredData,state);
   const sortRating = getSortRating(filteredData,showRating)
   console.log(state)
  
    return(<filterContext.Provider value={{state,dispatch,sortedData,filteredData}}>{children}</filterContext.Provider>)
}
export {FilterProvider,useFilter};
