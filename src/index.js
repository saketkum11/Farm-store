import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom"
import { CartProvider } from "./Component/Cart/Cart-Context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
       <App />
       </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
