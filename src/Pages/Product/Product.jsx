import React from "react";
import Card from "../../Component/Card/Card";
import Navbar from "../../Component/Navbar/Navbar";
import Filter from "./Filter";
import "./Product.css";

function Product() {
return (<>

  <div className="h-100 product overflow-hidden">


    <Navbar></Navbar>


    <main className="flex h-vh-100 overflow-hidden ">

       <Filter></Filter>
       <Card></Card>
    </main>
  </div>
</>
);
}

export default Product;