import React from "react";
import Navbar from "../../Component/Navbar/Navbar";

function Wishlist() {
    return (
      <>
      <div class="h-100">
      <Navbar></Navbar>
          <main class="wt-80 m-y-11 m-auto bg-black-0  ">
  
              <div class="text-center m-y-11">
                  <h3 class="text-m">My wishlist</h3>
              </div>
  
              <div class="grid product-content ">
  
  
                  <div class="flex flex-column  box-shadow bg-black-0 wt-100 position-rel">
  
                      <div class="position-ab t-2 r-5">
                          <button class="pd-x-3 bg-black-0 border-none pd-y-2 rounded-full cursor"><i
                                  class="fa-solid fa-heart color-red-7"></i></button>
                      </div>
                      <div class="pd-4 bg-black-3 ">
                          <img src="/css/image/Guava.jpg" class=" m-t-8 wt-100  rounded-m object-content" alt="" />
                      </div>
                      <div class="wt-100 m-t-8">
                          <div class=" flex flex-column items-center wt-100 ">
                              <span class="text-xm text-light">Fruit</span>
                              <small class="text-bold text-xm">₹50</small>
                              <button
                                  class="wt-100 border-none cursor pd-y-3 m-t-5 text-color-0 bg-black-5 text-dec text-xm ">Move
                                  to cart</button>
                          </div>
                      </div>
                  </div>
  
  
  
                  <div class="flex flex-column box-shadow bg-black-0 wt-100 position-rel">
  
                      <div class="position-ab t-2 r-5">
                          <button class="pd-x-3 bg-black-0 border-none pd-y-2 rounded-full cursor"><i
                                  class="fa-solid fa-heart color-red-7"></i></button>
                      </div>
                      <div class="pd-4 bg-black-3 ">
                          <img src="/css/image/Grain.jpg" class=" m-t-8 wt-100  rounded-m object-content" alt="" />
                      </div>
                      <div class="wt-100 m-t-8">
                          <div class=" flex flex-column items-center wt-100 ">
                              <span class="text-xm text-light">Grain</span>
                              <small class="text-bold text-xm">₹100</small>
                              <button
                                  class="wt-100 border-none cursor pd-y-3 m-t-5 text-color-0 bg-black-5 text-dec text-xm">Move
                                  to cart</button>
                          </div>
                      </div>
                  </div>
  
  
  
                  <div class="flex flex-column box-shadow bg-black-0 wt-100 position-rel">
  
                      <div class="position-ab t-2 r-5">
                          <button class="pd-x-3 bg-black-0 border-none pd-y-2 rounded-full cursor"><i
                                  class="fa-solid fa-heart color-red-7"></i></button>
                      </div>
                      <div class="pd-4 bg-black-3 ">
                          <img src="/css/image/strawberri.jpg" class=" m-t-8 wt-100  rounded-m object-content" alt="" />
                      </div>
                      <div class="wt-100 m-t-8">
                          <div class=" flex flex-column items-center wt-100 ">
                              <span class="text-xm text-light">Fruit</span>
                              <small class="text-bold text-xm">₹200</small>
                              <button
                                  class="wt-100 border-none cursor pd-y-3 m-t-5 text-color-0 bg-black-5 text-dec text-xm">Move
                                  to cart</button>
                          </div>
                      </div>
                  </div>
  
  
  
                  <div class="flex flex-column box-shadow bg-black-0 wt-100 position-rel">
  
                      <div class="position-ab t-2 r-5">
                          <button class="pd-x-3 bg-black-0 border-none pd-y-2 rounded-full cursor"><i
                                  class="fa-solid fa-heart color-red-7"></i></button>
                      </div>
                      <div class="pd-4 bg-black-3 ">
                          <img src="/css/image/Apple.jpg" class=" m-t-8 wt-100  rounded-m object-content" alt="" />
                      </div>
                      <div class="wt-100 m-t-8">
                          <div class=" flex flex-column items-center wt-100 ">
                              <span class="text-xm text-light">Fruit</span>
                              <small class="text-bold text-xm">₹150</small>
                              <button
                                  class="wt-100 border-none cursor pd-y-3 m-t-5 text-color-0 bg-black-5 text-dec text-xm ">Move
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