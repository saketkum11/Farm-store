import "./App.css";
import logo from "./logo.png";
import {Routes,Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
     </Routes>
    </div>
  );
}

export default App;
