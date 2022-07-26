import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import Wishlist from './Pages/Wishlist/Wishlist';
import Cart from './Pages/Cart/Cart';
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup';
import Mockman from 'mockman-js';
import { RequireAuth } from './utilities/RequireAuth';
import { NotFound } from './Pages/NotFound/NotFound';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route
          path='/wishlist'
          element={
            <RequireAuth>
              <Wishlist />
            </RequireAuth>
          }
        ></Route>
        <Route
          path='/cart'
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        ></Route>

        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/mock' element={<Mockman />}></Route>
      </Routes>
      <Toaster position='top-right' />
    </div>
  );
}

export default App;
