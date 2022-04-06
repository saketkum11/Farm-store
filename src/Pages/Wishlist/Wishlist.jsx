import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Component/Navbar/Navbar';
import { useCart } from '../../Context/Cart/Cart-Context';

import { useWishlist } from '../../Context/Wishlist/Wishlist-Context';

function Wishlist() {
  const { wishlist, getWishlist } = useWishlist();

  useEffect(() => getWishlist(), []);

  const { removeItem } = useWishlist();
  const { moveToCart } = useCart();
  return (
    <>
      <div className='h-100'>
        <Navbar></Navbar>
        <main className='wt-80 m-y-11 m-auto bg-black-0  '>
          <div className='text-center m-y-11'>
            <h3 className='text-m'>My wishlist</h3>
          </div>

          <div className='grid product-content '>
            {wishlist.map((product) => {
              const {
                _id,
                imageSrc,
                title,
                price,
                inStock,
                quantity,
                rating,
                categoryName,
              } = product;

              return (
                <div
                  key={_id}
                  className='flex flex-column  bg-black-0 wt-100 position-rel'
                >
                  {wishlist.find((prodt) => prodt._id === _id) ? (
                    <div className='position-ab t-2 r-5'>
                      <button
                        onClick={() => removeItem(product)}
                        className='pd-x-3 bg-black-2 border-none pd-y-2 rounded-full cursor'
                      >
                        <i className='fa-solid fa-heart color-red-7'></i>
                      </button>
                    </div>
                  ) : (
                    <button className='pd-x-3 bg-black-2 border-none pd-y-2 rounded-full cursor'>
                      <Link
                        className='text-dec text-color-0 text-m cursor'
                        to='/product'
                      >
                        Empty list add item
                      </Link>
                    </button>
                  )}

                  <div className='pd-4 bg-black-3 '>
                    <img
                      src={imageSrc}
                      className=' m-t-8 wt-100  rounded-m object-content'
                      alt='have  no imgae'
                    />
                  </div>
                  <div className='wt-100 m-y-9 flex flex-column items-end'>
                    <div className=' flex flex-column items-start pd-x-2 wt-100 '>
                      <span className='text-sm text-light'>{title}</span>
                      <small className=' text-sm'>Rs.{price}</small>
                      {inStock ? (
                        <small className=' text-sm'>inStock</small>
                      ) : (
                        <small className=' text-sm'>outofStock</small>
                      )}
                      <small className=' text-sm'>{quantity}</small>
                      <small className=' text-sm'>{categoryName}</small>
                      <small className=' text-sm'>rating - {rating}/5</small>
                    </div>
                  </div>

                  <button
                    onClick={() => moveToCart(product)}
                    className=' flex flex-wrap flex-column items-center wt-100 border-none cursor pd-y-3  text-color-0 bg-black-8 text-dec '
                  >
                    Move to cart
                  </button>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}

export default Wishlist;
