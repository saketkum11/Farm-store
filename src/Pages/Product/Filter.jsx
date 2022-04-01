import React from "react";
import { useFilter } from "../../Context/Filter/Filter-Context";
import { useProduct } from "../../Context/Product/Product-Context";


function Filter(){
const {state,dispatch} = useFilter();
const {items} = useProduct();

return(<>

   

    <aside className="wt-20 h-vh-100 bg-black-2 text-color-9 position-fixed t-0">
        <div className="flex flex-column items-start h-100 pd-8 ">

            <div className="flex justify-btw wt-100 m-y-2">
                <div className="text-s text-bold">
                    <span>Filter</span>
                </div>
                <div className="text-s text-bold ">
                    <button className=" cursor">clear</button>
                </div>
            </div>



            <div className="wt-100 m-y-2">
                <div className="text-s text-bold">
                    <span>Price</span>
                </div>
                <div className="text-s text-bold wt-100 flex justify-btw">
                    <span>0</span>
                    <span>50</span>
                    <span>100</span>
                </div>
                <div className="wt-100">
                    <input type="range" onChange={(e)=>dispatch({type:"RANGE",payload:e.target.value})} name="" className="wt-100" id="" />
                </div>
            </div>





            <div className="m-y-2">
                <div className="text-s text-bold">
                    <span>Categories</span>
                </div>
                <div>
                    <div className="">
                        <label for="">
                            <input
                            
                            onChange={()=>dispatch({type:"FRUIT",payload:"fruit"})}
                            type="checkbox" 
                            name="fruit" 
                            id="fruitName" />
                            Fruits</label>
                    </div>
                    <div>
                        <label for="">
                            <input 
                            onChange={()=>dispatch({type:"GRAIN"})}
                            type="checkbox" 
                            name="" 
                            id="" />
                            Grains</label>
                    </div>
                    <div>
                        <label for="">
                            <input 
                            onChange={()=>dispatch({type:"EGGANDMEAT",payload:"egg and meat"})}
                            type="checkbox" 
                            name="" 
                            id="" />
                            Egg & Meat</label>
                    </div>
                    <div>
                        <label for="">
                            <input 
                            onChange={()=>dispatch({type:"VEGETABLE",payload:"vegetable"})}
                            type="checkbox" 
                            name="" 
                            id="" />
                            Vegetables</label>
                    </div>
                </div>
            </div>



            <div className="m-y-4">
                <div className="text-s text-bold">
                    <span>Ratings</span>
                </div>
                <div>
                    <div>
                        <label for="">
                            <input type="radio"
                            onChange={()=>dispatch({type:"RATING",payload:"FOUR_STAR"})}
                            name="rating" id="" />
                            4 stars & above</label>
                    </div>
                    <div>
                        <label for="">
                            <input type="radio" 
                            onChange={()=>dispatch({type:"RATING",payload:"THREE_STAR"})}
                            name="rating" id="" />
                            3 stars & above</label>
                    </div>
                    <div>
                        <label for="">
                            <input 
                            onChange={()=>dispatch({type:"RATING",payload:"TWO_STAR"})}
                            type="radio" name="rating" id="" />
                            2 stars & above</label>
                    </div>
                    <div>
                        <label for="">
                            <input 
                            onChange={()=>dispatch({type:"RATING",payload:"ONE_STAR"})}
                            type="radio" name="rating" id="" />
                            1 stars & above</label>
                    </div>
                    <div>
                        <label for="">
                            <input type="radio" onChange={()=>dispatch({type:"RATING",payload:"ZERO_STAR"})} name="rating" id="" />
                            0 stars & above</label>
                    </div>

                </div>
            </div>


            <div className="m-y-4">
                <div className="text-s text-bold">
                    <span>Sort by</span>
                </div>
                <div>
                    <div>
                        <label for="LOW_TO_HIGH">
                            <input type="radio" name="price"
                                checked={state.showSort === "PRICE_LOW_TO_HIGH"}
                                onChange={()=>dispatch({type:"SORT",payload:"PRICE_LOW_TO_HIGH"})}
                           id="LOW_TO_HIGH" />
                            Price - Low to High</label>
                    </div>
                    <div>
                        <label for="High_TO_LOW">
                            <input type="radio" 
                            checked={state.showSort === "PRICE_HIGH_TO_LOW"}
                            onChange={()=>dispatch({type:"SORT",payload:"PRICE_HIGH_TO_LOW"})}
                            name="price"
                           
                            id="High_TO_LOW" />
                            Price - High to Low</label>
                    </div>
                </div>
            </div>

        </div>

    </aside>


</>)
}

export default Filter;