import {Link} from "react-router-dom";
import React from  "react";
import { useCart } from "../Cart/Cart-Context";

function Navbar() {
    const {counter} = useCart();
   return (<div>
    <nav className=" bg-green-7 text-color-0 pd-5 position-fixed t-0">
        <div className="wt-80  m-auto  flex items-center">
            <div className="text-xm">
                <Link className="text-dec text-color-0 text-m cursor" to="/">Farmgistic</Link>
            </div>
            <div className="flex items-center justify-even m-lf">
                <input type="search" placeholder="search"
                    className="pd-y-3 pd-x-5 rounded-L border-none text-center outline-none" />
                <i className="fa-solid fa-magnifying-glass bg-black-0 text-color-9 rounded-L pd-3 text-xm"></i>
            </div>
            <div className="m-lf">


                <ul className="style-none flex items-center">
                    <li className="pd-x-4">
                        <Link to="/login" target="_blank" className="text-dec text-color-0 pd-x-5 pd-y-3 bg-red-7">Login
                        </Link>
                    </li>

                    <li className="pd-x-4 flex  items-center position-rel justify-center">
                        <Link to="/wishlist" target="_blank" className="text-dec text-color-0 cursor"><i
                            className="fa-solid  fa-heart text-color-0"></i></Link>
                        <span
                            className=" text-s position-ab p-t-n-2 flex items-center justify-center bg-red-7 wt-fixed-5 h-fixed-5 rounded-full p-r-0">0</span>
                    </li>

                    <li className=" pd-x-4 flex  items-center position-rel justify-center">
                        <Link to="/cart" className="text-dec text-color-0 cursor" target="_blank"><i
                            className="fa-solid fa-cart-shopping"></i></Link>
                        <span
                            className=" text-s position-ab p-t-n-2 flex items-center justify-center bg-red-7 wt-fixed-5 h-fixed-5 rounded-full p-r-0">{counter}</span>
                    </li>
                    <li className="pd-x-4">
                        <small>cart</small>
                    </li>

                </ul>

            </div>
        </div>

    </nav>
</div>

);
}

export default Navbar;