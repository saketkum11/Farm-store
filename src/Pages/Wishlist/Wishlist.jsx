import React from "react";
import Navbar from "../../Component/Navbar/Navbar";

function Wishlist() {
    return (
      <>
      <div className="h-100">
      <Navbar></Navbar>
          <main className="wt-80 m-y-11 m-auto bg-black-0  ">
  
              <div className="text-center m-y-11">
                  <h3 className="text-m">My wishlist</h3>
              </div>
  
              <div className="grid product-content ">
  
  
                  <div className="flex flex-column  box-shadow bg-black-0 wt-100 position-rel">
  
                      <div className="position-ab t-2 r-5">
                          <button className="pd-x-3 bg-black-0 border-none pd-y-2 rounded-full cursor"><i
                                  className="fa-solid fa-heart color-red-7"></i></button>
                      </div>
                      <div className="pd-4 bg-black-3 ">
                          <img src="/css/image/Guava.jpg" className=" m-t-8 wt-100  rounded-m object-content" alt="" />
                      </div>
                      <div className="wt-100 m-t-8">
                          <div className=" flex flex-column items-center wt-100 ">
                              <span className="text-xm text-light">Fruit</span>
                              <small className="text-bold text-xm">₹50</small>
                              <button
                                  className="wt-100 border-none cursor pd-y-3 m-t-5 text-color-0 bg-black-5 text-dec text-xm ">Move
                                  to cart</button>
                          </div>
                      </div>
                  </div>
  
  
  
                  <div className="flex flex-column box-shadow bg-black-0 wt-100 position-rel">
  
                      <div className="position-ab t-2 r-5">
                          <button className="pd-x-3 bg-black-0 border-none pd-y-2 rounded-full cursor"><i
                                  className="fa-solid fa-heart color-red-7"></i></button>
                      </div>
                      <div className="pd-4 bg-black-3 ">
                          <img src="/css/image/Grain.jpg" className=" m-t-8 wt-100  rounded-m object-content" alt="" />
                      </div>
                      <div className="wt-100 m-t-8">
                          <div className=" flex flex-column items-center wt-100 ">
                              <span className="text-xm text-light">Grain</span>
                              <small className="text-bold text-xm">₹100</small>
                              <button
                                  className="wt-100 border-none cursor pd-y-3 m-t-5 text-color-0 bg-black-5 text-dec text-xm">Move
                                  to cart</button>
                          </div>
                      </div>
                  </div>
  
  
  
                  <div className="flex flex-column box-shadow bg-black-0 wt-100 position-rel">
  
                      <div className="position-ab t-2 r-5">
                          <button className="pd-x-3 bg-black-0 border-none pd-y-2 rounded-full cursor"><i
                                  className="fa-solid fa-heart color-red-7"></i></button>
                      </div>
                      <div className="pd-4 bg-black-3 ">
                          <img src="/css/image/strawberri.jpg" className=" m-t-8 wt-100  rounded-m object-content" alt="" />
                      </div>
                      <div className="wt-100 m-t-8">
                          <div className=" flex flex-column items-center wt-100 ">
                              <span className="text-xm text-light">Fruit</span>
                              <small className="text-bold text-xm">₹200</small>
                              <button
                                  className="wt-100 border-none cursor pd-y-3 m-t-5 text-color-0 bg-black-5 text-dec text-xm">Move
                                  to cart</button>
                          </div>
                      </div>
                  </div>
  
  
  
                  <div className="flex flex-column box-shadow bg-black-0 wt-100 position-rel">
  
                      <div className="position-ab t-2 r-5">
                          <button className="pd-x-3 bg-black-0 border-none pd-y-2 rounded-full cursor"><i
                                  className="fa-solid fa-heart color-red-7"></i></button>
                      </div>
                      <div className="pd-4 bg-black-3 ">
                          <img src="/css/image/Apple.jpg" className=" m-t-8 wt-100  rounded-m object-content" alt="" />
                      </div>
                      <div className="wt-100 m-t-8">
                          <div className=" flex flex-column items-center wt-100 ">
                              <span className="text-xm text-light">Fruit</span>
                              <small className="text-bold text-xm">₹150</small>
                              <button
                                  className="wt-100 border-none cursor pd-y-3 m-t-5 text-color-0 bg-black-5 text-dec text-xm ">Move
                                  to cart</button>
                          </div>
                      </div>
                  </div>
  
              </div>
          </main>
      </div>
  </>
    );
  }
  
  export default Wishlist;