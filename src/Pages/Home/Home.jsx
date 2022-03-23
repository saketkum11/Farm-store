import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import { Link } from "react-router-dom";
function Home() {
return (
    <>
    <Navbar></Navbar>
    <main class="wt-80 m-auto ">
        <div class="flex items-start justify-center h-lg m-y-11 position-rel">
            <img src="./assets/apple.jpg" alt="" class="rounded-L object-content wt-100 h-100" />
            <Link to="/product"
                className="text-color-9 text-dec text-m rounded-m pd-x-9 pd-y-3 position-ab bg-black-1 p-t-7 p-lf-1">
            More
            </Link>
        </div>
        <div class="m-y-9">
            <span class="text-lg text-bold">Categories</span>
        </div>
        <section class="flex m-y-3 justify-around flex-wrap">
            <div class=" wt-20 flex flex-column justify-center items-center  position-rel">
                <Link to="/product">
                <img src="./assets/egg.jpg" class="wt-100 h-100 object-content rounded-m" alt="" /></Link>
                <span class=" position-ab text-color-0 text-m text-bold p-t-5">Egg and Meat </span>

            </div>
            <div class=" wt-20 flex justify-center position-rel">
                <Link to="/product">
                <img src="./assets/grain.jpg" class="wt-100 h-100 object-content rounded-m" alt="" /></Link>
                <span class="position-ab  text-color-0 text-m text-bold p-t-5">Grain</span>
            </div>
            <div class="  wt-20 flex justify-center position-rel">
                <Link to="/product" class=" object-content rounded-m">
                <img src="./assets/vegetable.jpg" class="wt-100 h-100 object-content rounded-m" alt="" /></Link>
                <span class="position-ab  text-color-0 text-m text-bold p-t-5">Vegetable</span>

            </div>
            <div class="rounded-s wt-20 flex justify-center position-rel">
                <Link to="/product" class="wt-100 h-100 object-content rounded-m">
                <img src="./assets/apple.jpg" class="wt-100 h-100 object-content rounded-m" alt="" /></Link>

                <span class="position-ab  text-color-0 text-m text-bold p-t-5">Fruits</span>
            </div>
        </section>
        <section class="m-y-11">
            <div class="m-y-11">
                <span class="text-lg text-bold">Coming Soon</span>
            </div>
            <div class="flex wt-100 justify-btw m-x-4">
                <div class=" rounded-s wt-30  flex justify-center position-rel items-start">
                    <img src="./assets/apple.jpg" alt="" class="rounded-L object-content wt-100 h-50" />
                    <Link to="/product" class="wt-100 h-100 object-content rounded-m">
                    </Link>

                </div>
                <div class="roounded-s wt-80 flex justify-center position-rel  m-x-4">
                    <img src="./assets/apple.jpg" alt="" class="rounded-L object-content wt-100 h-50" />
                    <Link to="/product" class="wt-100 h-100 object-content rounded-m">
                    </Link>
                </div>
            </div>
        </section>
    </main>
</>


);
}

export default Home;