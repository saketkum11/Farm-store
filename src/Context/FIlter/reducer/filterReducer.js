

const filterReducer = (state,{type,payload}) => {

       switch (type) {
           case "SORT":
              return {
                   ...state,showSort:payload
              }
             case "RATING":
              return {
                  ...state,showRating:payload
              }  
            case "INVENTORY":
                return{
                       ...state,showCategoryInventory:payload
                }
             case "RANGE":
                 return{
                     ...state,maxPrice:payload
                 }   
           default:
               return {
                   showRating:null,
                   showSort:null,
                   showCategoryInventory:[]
                   
               }
       }

}

export default filterReducer;