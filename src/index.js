import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom"
import { AuthProvider } from "./Context/Auth/Auth";
import { ProductProvider } from "./Context/Product/Product-Context";
import { FilterProvider } from "./Context/Filter/Filter-Context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
      
        <ProductProvider>
        <FilterProvider>
            <App />
            </FilterProvider>
        </ProductProvider>
       
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
