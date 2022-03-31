import { useFilter } from "../Filter-Context";

const {state,dispatch} = useFilter();

const filterReducer = (state,action) => {

       switch (action.type) {
           case "SORT":
               
               break;
       
           default:
               break;
       }

}

export default filterReducer;