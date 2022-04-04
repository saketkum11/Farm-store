import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import { useProduct } from "../../Context/Product/Product-Context";
import { useWishlist } from "../../Context/Wishlist/Wishlist-Context";

function Wishlist() {
    const {items} = useProduct()
    const {wishlistProduct,addItem,removeItem} = useWishlist();

    
    return (
      <>
      <div className="h-100">
      <Navbar></Navbar>
          <main className="wt-80 m-y-11 m-auto bg-black-0  ">
  
              <div className="text-center m-y-11">
                  <h3 className="text-m">My wishlist</h3>
              </div>
  
              <div className="grid product-content ">{
                  wishlistProduct.map((items)=>{
                    const {_id,imageSrc,title,price,inStock,quantity,rating,categoryName} = items
                          return ( <div key={_id} className="flex flex-column  bg-black-0 wt-100 position-rel">

                          <div className="position-ab t-2 r-5">
                            <button className="pd-x-3 bg-black-2 border-none pd-y-2 rounded-full cursor"><i
                                className="fa-solid fa-heart color-red-7"></i></button>
                          </div>
                          <div className="pd-4 bg-black-3 ">
                            <img src={imageSrc} className=" m-t-8 wt-100  rounded-m object-content" alt="have  no imgae" />
                          </div>
                          <div className="wt-100 m-y-9 flex flex-column items-end">
                            <div className=" flex flex-column items-start pd-x-2 wt-100 ">
                              <span className="text-sm text-light">{title}</span>
                              <small className=" text-sm">Rs.{price}</small>
                              {inStock?<small className=" text-sm">inStock</small>:<small className=" text-sm">outofStock</small>}
                              <small className=" text-sm">{quantity}</small>
                              <small className=" text-sm">{categoryName}</small>
                              <small className=" text-sm">rating - {rating}/5</small>
                  
                            </div>
                  
                          </div>
                          
                          {wishlistProduct.find((prod)=> prod._id === _id?<button
                              className=" flex flex-wrap flex-column items-center wt-100 border-none cursor pd-y-3  text-color-0 bg-black-8 text-dec ">Move
                              to cart</button>: <button onClick={()=>addItem(items)}
                              className=" flex flex-wrap flex-column items-center wt-100 border-none cursor pd-y-3  text-color-0 bg-black-8 text-dec ">Move
                              to cart</button>)}
                        </div>)
  
                  })
              }
  
              </div>
          </main>
      </div>
  </>
    );
  }
  
  export default Wishlist;