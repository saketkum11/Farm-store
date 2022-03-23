import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import "./Product.css";
import apple from "../../Assets/Apple.jpg"
import egg from "../../Assets/Egg.jpg"
import grain from "../../Assets/Grain.jpg"
import guava from "../../Assets/Guava.jpg"
import strawberri from "../../Assets/strawberri.jpg"
function Product() {
return (<>

<div className="h-100 product overflow-hidden">


  <Navbar></Navbar>


  <main className="flex h-vh-100 overflow-hidden ">


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
            <input type="range" name="" className="wt-100" id="" />
          </div>
        </div>





        <div className="m-y-2">
          <div className="text-s text-bold">
            <span>Categories</span>
          </div>
          <div>
            <div className="">
              <label for="">
                <input type="checkbox" name="" id="" />
                Fruits</label>
            </div>
            <div>
              <label for="">
                <input type="checkbox" name="" id="" />
                Grains</label>
            </div>
            <div>
              <label for="">
                <input type="checkbox" name="" id="" />
                Egg & Meat</label>
            </div>
            <div>
              <label for="">
                <input type="checkbox" name="" id="" />
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
                <input type="radio" name="rating" id="" />
                4 stars & above</label>
            </div>
            <div>
              <label for="">
                <input type="radio" name="rating" id="" />
                3 stars & above</label>
            </div>
            <div>
              <label for="">
                <input type="radio" name="rating" id="" />
                2 stars & above</label>
            </div>
            <div>
              <label for="">
                <input type="radio" name="rating" id="" />
                1 stars & above</label>
            </div>
            <div>
              <label for="">
                <input type="radio" name="rating" id="" />
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
              <label for="">
                <input type="radio" name="price" id="" />
                Price - Low to High</label>
            </div>
            <div>
              <label>
                <input type="radio" name="price" id="" />
                Price - High to Low</label>
            </div>
          </div>
        </div>

      </div>

    </aside>


    <div className="wt-80 bg-black-2">
      <div className="grid product-content pd-3">


        <div className="flex flex-column bg-black-0 wt-100 position-rel">

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
              <small className="text-bold text-xm">₹250</small>
              <button className="wt-100 border-none cursor pd-y-3 m-t-5 text-color-0 bg-red-7 text-dec ">Added
                to cart</button>
            </div>
          </div>
        </div>

        <div className="flex flex-column bg-black-0 wt-100 position-rel">

          <div className="position-ab t-2 r-5">
            <button className="pd-x-3 bg-black-0 border-none pd-y-2 rounded-full cursor"><i
                className="fa-regular fa-heart color-red-7"></i></button>
          </div>
          <div className="pd-4 bg-black-3 ">
            <img src="/css/image/Apple.jpg" className=" m-t-8 wt-100  rounded-m object-content" alt="" />
          </div>
          <div className="wt-100 m-t-8">
            <div className=" flex flex-column items-center wt-100 ">
              <span className="text-xm text-light">Fruit</span>
              <small className="text-bold text-xm">₹250</small>
              <button className="wt-100 border-none cursor pd-y-3 m-t-5 text-color-0 bg-black-5 text-dec ">Add
                to cart</button>
            </div>
          </div>
        </div>

        <div className="flex flex-column bg-black-0 wt-100 position-rel">

          <div className="position-ab t-2 r-5">
            <button className="pd-x-3 bg-black-0 border-none pd-y-2 rounded-full cursor"><i
                className="fa-regular fa-heart color-red-7"></i></button>
          </div>
          <div className="pd-4 bg-black-3 ">
            <img src="/css/image/Apple.jpg" className=" m-t-8 wt-100  rounded-m object-content" alt="" />
          </div>
          <div className="wt-100 m-t-8">
            <div className=" flex flex-column items-center wt-100 ">
              <span className="text-xm text-light">Fruit</span>
              <small className="text-bold text-xm">₹250</small>
              <button className="wt-100 border-none cursor pd-y-3 m-t-5 text-color-0 bg-black-5 text-dec ">Add
                to cart</button>
            </div>
          </div>
        </div>

        <div className="flex flex-column bg-black-0 wt-100 position-rel">

          <div className="position-ab t-2 r-5">
            <button className="pd-x-3 bg-black-0 border-none pd-y-2 rounded-full cursor"><i
                className="fa-regular fa-heart color-red-7"></i></button>
          </div>
          <div className="pd-4 bg-black-3 ">
            <img src="/css/image/strawberri.jpg" className=" m-t-8 wt-100  rounded-m object-content" alt="" />
          </div>
          <div className="wt-100 m-t-8">
            <div className=" flex flex-column items-center wt-100 ">
              <span className="text-xm text-light">Fruit</span>
              <small className="text-bold text-xm">₹250</small>
              <button className="wt-100 border-none cursor pd-y-3 m-t-5 text-color-0 bg-black-5 text-dec ">Add
                to cart</button>
            </div>
          </div>
        </div>

        <div className="flex flex-column bg-black-0 wt-100 position-rel">

          <div className="position-ab t-2 r-5">
            <button className="pd-x-3 bg-black-0 border-none pd-y-2 rounded-full cursor"><i
                className="fa-regular fa-heart color-red-7"></i></button>
          </div>
          <div className="pd-4 bg-black-3  ">
            <img src="/css/image/strawberri.jpg" className=" m-t-8 wt-100 rounded-m object-content" alt="" />
          </div>
          <div className="wt-100 m-t-8">
            <div className=" flex flex-column items-center wt-100 ">
              <span className="text-xm text-light">Fruit</span>
              <small className="text-bold text-xm">₹250</small>
              <button className="wt-100 border-none cursor pd-y-3 m-t-5 text-color-0 bg-black-5 text-dec ">Add
                to cart</button>
            </div>
          </div>
        </div>

        <div className="flex flex-column bg-black-0 wt-100 position-rel">

          <div className="position-ab t-2 r-5">
            <button className="pd-x-3 bg-black-0 border-none pd-y-2 rounded-full cursor"><i
                className="fa-regular fa-heart color-red-7"></i></button>
          </div>
          <div className="pd-4 bg-black-3 ">
            <img src="/css/image/strawberri.jpg" className=" m-t-8 wt-100  rounded-m object-content" alt="" />
          </div>
          <div className="wt-100 m-t-8">
            <div className=" flex flex-column items-center wt-100 ">
              <span className="text-xm text-light">Fruit</span>
              <small className="text-bold text-xm">₹250</small>
              <button className="wt-100 border-none cursor pd-y-3 m-t-5 text-color-0 bg-black-5 text-dec ">Add
                to cart</button>
            </div>
          </div>
        </div>

        <div className="flex flex-column bg-black-0 wt-100 position-rel">

          <div className="position-ab t-2 r-5">
            <button className="pd-x-3 bg-black-0 border-none pd-y-2 rounded-full cursor"><i
                className="fa-regular fa-heart color-red-7"></i></button>
          </div>
          <div className="pd-4 bg-black-3 ">
            <img src="/css/image/strawberri.jpg" className=" m-t-8 wt-100  rounded-m object-content" alt="" />
          </div>
          <div className="wt-100 m-t-8">
            <div className=" flex flex-column items-center wt-100 ">
              <span className="text-xm text-light">Fruit</span>
              <small className="text-bold text-xm">₹100</small>
              <button className="wt-100 border-none cursor pd-y-3 m-t-5 text-color-0 bg-black-5 text-dec ">Add
                to cart</button>
            </div>
          </div>
        </div>

        <div className="flex flex-column bg-black-0 wt-100 position-rel">

          <div className="position-ab t-2 r-5">
            <button className="pd-x-3 bg-black-0 border-none pd-y-2 rounded-full cursor"><i
                className="fa-regular fa-heart color-red-7"></i></button>
          </div>
          <div className="pd-4 bg-black-3 ">
            <img src="/css/image/Apple.jpg" className=" m-t-8 wt-100  rounded-m object-content" alt="" />
          </div>
          <div className="wt-100 m-t-8">
            <div className=" flex flex-column items-center wt-100 ">
              <span className="text-xm text-light">Fruit</span>
              <small className="text-bold text-xm">₹250</small>
              <button className="wt-100 border-none cursor pd-y-3 m-t-5 text-color-0 bg-black-5 text-dec ">Add
                to cart</button>
            </div>
          </div>
        </div>
      </div>


    </div>


  </main>
</div>
</>
);
}

export default Product;