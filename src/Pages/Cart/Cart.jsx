import Navbar from "../../Component/Navbar/Navbar";
import React from "react"
function Cart() {
    return (
      <>
      <div className="h-100">
  
        <Navbar></Navbar>
          <main className="wt-80 m-y-11 m-auto bg-black-0 flex flex-column items-center flex-wrap">
  
              <div className="text-center m-y-8">
                  <h2 className="text-light text-center">My Carts</h2>
              </div>
              <div className="flex wt-100  justify-around pd-5 ">
  
                 
                  <section className=" box-shadow flex justify-btw wt-50 m-b-8 rounded-s ">
                      <img src="/css/image/strawberri.jpg" className="wt-50 pd-2 object-content m-r-6" alt=""/>
  
                      <div className="pd-11 wt-80 flex flex-column justify-even ">
                          <div className=" flex flex-column items-start ">
                              <div className="flex flex-column items-start ">
                                  <span className="text-xm">Fruit</span>
                                  <span className="text-bold text-xm">₹100</span>
                                  <span className="text-bold">10%off </span>
                              </div>
                              <div className="flex justify-even items-center ">
                                  <span>Quantity: </span>
                                  <button className="cursor rounded-full wt-fixed-5 h-fixed-5 ">-</button>
                                  <input type="number" placeholder="1" className="wt-fixed-9 h-fixed-6"/>
                                  <button className="cursor rounded-full wt-fixed-5 h-fixed-5">+</button>
                              </div>
                          </div>
  
                          <div className="flex flex-column items-center m-y-3">
                              <button
                                  className="cursor bg-red-7 text-color-0 rounded-xs outline-none border-none text-s pd-y-3 m-y-2 wt-100">Remove
                                  from cart
                              </button>
  
                              <button
                                  className="cursor border-none rounded-xs text-color-0 pd-y-3 bg-black-4 text-color-0 outline-none text-s m-y-2 wt-100">Move
                                  to wishlist
                              </button>
                          </div>
                      </div>
                  </section>
  
                
                  <section className="box-shadow pd-8  wt-30 flex flex-column justify-even rounded-s ">
                      <div>
                          <h3>Price Details</h3>
                      </div>
  
               
  
                      <div className="flex items-center justify-btw pd-2">
                          <span className="text-s">Product Price</span>
                          <span>Rs 100</span>
                      </div>
                      <div className="flex items-center justify-btw pd-2">
                          <span className="text-s">Discount Price </span>
                          <span>-Rs 10</span>
                      </div>
                      <div className="flex items-center justify-btw pd-2">
                          <span className="text-s">Delivery Charges </span>
                          <span>Rs 40</span>
                      </div>
                   
  
                      <div className="flex items-center justify-btw pd-2">
                          <h4>Total Amount</h4>
                          <span className="text-bold">Rs 130</span>
                      </div>
                  
                      <div className="pd-2">
                          <p>You have saved Rs 10!</p>
                          <button
                              className="cursor bg-red-7 text-color-0 rounded-xs outline-none border-none text-s pd-y-3 m-y-2 wt-100">
                              Place your Order
                          </button>
                      </div>
                  </section>
              </div>
          </main>
      </div>
  </>
    );
  }
  
  export default Cart;