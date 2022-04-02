

const filterReducer = (state,{type,payload}) => {

    const {grain,eggAndMeat,vegetable,fruit} = state.showCategoryInventory;

       switch (type) {
           case "SORT":
              return {
                   ...state,showSort:payload
              }
             case "RATING":
              return {
                  ...state,showRating:payload
              }  
            case "GRAIN":
                return{
                       ...state,showCategoryInventory:{...state.showCategoryInventory,grain:!grain}
                }
             case "FRUIT":
                return{
                    ...state,showCategoryInventory:{...state.showCategoryInventory,fruit:!fruit}
             }  
             case "EGGANDMEAT":
                return{
                    ...state,showCategoryInventory:{...state.showCategoryInventory,eggAndMeat:!eggAndMeat}
             }  
             case "VEGETABLE":
                return{
                    ...state,showCategoryInventory:{...state.showCategoryInventory,vegetable:!vegetable}
             } 
             case "ONE_STAR":
                 return {
                     ...state,showRating:payload
                 }
             case "TWO_STAR":
                 return {
                     ...state,showRating:payload
                 }
             case "THREE_STAR":
                 return {
                      ...state,showRating:payload
                    }  
             case "FOUR_STAR":
                 return {
                         ...state,showRating:payload
                        } 
              case "ZERO_STAR":
                 return {
                          ...state,showRating:payload
                        } 
              case "RANGE":
                    return{
                        ...state,maxPrice:payload
                    }
              case "CLEAR":
                  return {
                      ...state,
                      showSort:null,
                      showRating:0,
                      maxPrice:null,
                    showCategoryInventory:{
                        fruit:false,
                        grain:false,
                        vegetable:false,
                        eggAndMeat:false
                    }                  } 
                
           default:
               return {
                   showRating:null,
                   showSort:null,
                   showCategoryInventory:[]
                   
               }
       }

}

export default filterReducer;