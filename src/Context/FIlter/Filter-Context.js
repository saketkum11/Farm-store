
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

    let getFruit = [];
    let getGrain = [];
    let getVegetable = [];
    let getEggAndMeat = [];

    if(!grain && !fruit && !eggAndMeat && !vegetable){
        return sortedData;
    }
    if(fruit === true){
       getFruit = sortedData.filter((product)=> product.categoryName === "fruit")
    }
    if(grain === true){
        getGrain = sortedData.filter((product)=> product.categoryName === "grain")
    }
    if(eggAndMeat === true){
       getEggAndMeat = sortedData.filter((product)=> product.categoryName === "egg and meat")
    }
    if(vegetable === true){
       getVegetable = sortedData.filter((product)=> product.categoryName === "vegetable")
    }
       return [
           ...getFruit,
           ...getEggAndMeat,
           ...getGrain,
           ...getVegetable,
       ]
   }
  const getSortRating = (filteredData,showRating)=> {
      
        if(showRating === 4){
             return(filteredData.filter((product)=> product.rating >= 4 ))
        }
        if(showRating === 3){

            return(filteredData.filter((product)=> product.rating >= 3))
        }
        if(showRating === 2){

            return(filteredData.filter((product)=> product.rating >= 2))
        }
        if(showRating === 1){

            return(filteredData.filter((product)=> product.rating >= 1))
        }
        if(showRating === 0){

            return(filteredData.filter((product)=> product.rating >= 0))
        }
        return filteredData;
  }
  const getPriceData = (sortRating,maxPrice) =>{

    if(maxPrice){
         return sortRating.filter((product)=> product.price<= maxPrice)
    }   

    return sortRating;
      

  }
  const sortedData = getSortedData(items,state);
  //console.log("sortedData",sortedData)
  const filteredData = getFilteredData(sortedData,fruit,vegetable,eggAndMeat,grain);
  // console.log("filtered",filteredData) 
   const sortRating = getSortRating(filteredData,showRating);
   // console.log("sortbyRating",sortRating)
   const sortPriceData = getPriceData(sortRating,maxPrice);

   console.log("range product", sortPriceData)

   console.log(state)
  
  
    return(<filterContext.Provider value={{state,dispatch,sortedData,filteredData,sortRating,sortPriceData}}>{children}</filterContext.Provider>)
}
export {FilterProvider,useFilter};
