import "./App.css";
import logo from "./logo.png";
import {Routes,Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Mockman from "mockman-js"
import Forgot from "./Pages/Auth/forgot";
function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/product" element={<Product></Product>}></Route>
       <Route path="/wishlist" element={<Wishlist></Wishlist>}></Route>
       <Route path="/cart" element={<Cart></Cart>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/signup" element={<Signup></Signup>}></Route>
       <Route path="/forgot" element={<Forgot></Forgot>}></Route>
       <Route path="/mock" element={<Mockman/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
