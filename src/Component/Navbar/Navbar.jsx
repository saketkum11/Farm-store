import { Link } from 'react-router-dom';
import React from 'react';
import { useAuth } from '../../Context/Auth/Auth';
import { useCart } from '../../Context/Cart/Cart-Context';
import { useWishlist } from '../../Context/Wishlist/Wishlist-Context';
import toast from 'react-hot-toast';
function Navbar() {
  const { authToken, tokenValue, logoutHandler } = useAuth();
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  return (
    <header>
      <div className='pd-5 '>
        <div className='wt-80  m-auto flex items-center justify-btw'>
          <div className='text-xm'>
            <Link className='text-dec text-color-grey-9 text-lg cursor' to='/'>
              Farmgistic
            </Link>
          </div>
          <nav>
            <ul className='style-none flex items-center'>
              <li className='pd-x-4'>
                {tokenValue ? (
                  <Link
                    onClick={() => {
                      logoutHandler();
                      toast.success('Logged Out  successfully');
                    }}
                    to='/login'
                    className='text-dec text-color-0 pd-x-5 pd-y-3 bg-green-7'
                  >
                    logout
                  </Link>
                ) : (
                  <Link
                    to='/login'
                    className='text-dec text-xm text-color-grey-0 pd-x-5 pd-y-3 bg-green-6 rounded-s'
                  >
                    Login
                  </Link>
                )}
              </li>

              <li className='pd-x-4 flex  items-center position-rel justify-center'>
                <Link
                  to='/wishlist'
                  className='text-dec text-color-green-6 cursor text-xm'
                >
                  <i className='fa-solid  fa-heart '></i>
                </Link>
                {wishlist.length >= 0 && (
                  <span className='flex justify-center items-center text-color-green-6  position-ab    rounded-full top--50 right--20 pd-x-3 right--10 text-xm'>
                    {wishlist.length}
                  </span>
                )}
              </li>

              <li className=' pd-x-4 flex  items-center position-rel justify-center'>
                <Link
                  to='/cart'
                  className='text-dec text-color-green-6 cursor text-xm'
                >
                  <i className='fa-solid fa-cart-shopping'></i>
                </Link>
                {cart.length >= 0 && (
                  <span className=' flex justify-center items-center text-color-green-6  position-ab    rounded-full top--50 right--20 pd-x-3 right--10 text-xm'>
                    {cart.length}
                  </span>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
