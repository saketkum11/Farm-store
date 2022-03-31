
const filterReducer = (state,{type,payload}) => {

       switch (type) {
           case "SORT":
               console.log({...state,showSort:payload})
               productSort(state,showSort)
               break;
       
           default:
               break;
       }

}

export default filterReducer;