import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Component/Navbar/Navbar';
import { useCart } from '../../Context/Cart/Cart-Context';
import toast from 'react-hot-toast';
import { useWishlist } from '../../Context/Wishlist/Wishlist-Context';
import { useAuth } from '../../Context/Auth/Auth';
import Card from '../../Component/Card/Card';

function Wishlist() {
  const { wishlist, getWishlist } = useWishlist();
  const { tokenData } = useAuth();
  useEffect(() => getWishlist(), []);

  const { removeItem } = useWishlist();
  const { moveToCart } = useCart();

  return (
    <>
      <div className='h-100'>
        <Navbar></Navbar>
        <main className='m-y-11 m-auto bg-black-0  '>
          <div className='text-center m-y-11'>
            <h3 className='text-m'>My wishlist</h3>
          </div>

          <div className=' flex justify-center items-center width-max-100 gap-2 flex-wrap'>
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
                  className='flex flex-column  bg-black-0 width-scaled4-4 position-rel overflow-hide rounded-m box-shadow-1'
                >
                  <figure className=''>
                    <img
                      src={imageSrc}
                      className=' rounded-top-3 object-content-cover wt-100'
                      alt='have  no imgae'
                    />
                  </figure>
                  <div className='pd-4 '>
                    <div className=' flex flex-column items-start '>
                      <span className='text-xm text-bold'>{title}</span>

                      {inStock ? (
                        <small className=' text-sm'>inStock</small>
                      ) : (
                        <small className=' text-sm'>outofStock</small>
                      )}

                      <span className=' text-s pd-y-2 '>
                        Rs.{price} / {quantity}
                      </span>

                      <span className=' text-sm pd-y-2 '>{categoryName}</span>
                      <div class='text-color-green-6 pd-y-2 '>
                        <small className='text-color-0 text-sm'>
                          rating {rating}/5
                        </small>
                      </div>
                    </div>
                    <div className='flex pd-4 justify-btw items-center'>
                      <button
                        onClick={() => {
                          moveToCart(product);
                          toast.success('Moved to Cart');
                        }}
                        className=' flex flex-wrap flex-column items-center  border-none cursor pd-y-3 rounded-s pd-x-3 text-color-grey-0 bg-green-7
                      text-dec '
                      >
                        Move to cart
                      </button>
                      {wishlist.find((prodt) => prodt._id === _id) ? (
                        <button
                          onClick={() => {
                            removeItem(product);
                            toast.success('Successfully removed');
                          }}
                          className='pd-x-3  border-none text-xm pd-y-2 rounded-full cursor'
                        >
                          <i className='fa-solid fa-heart color-red-7'></i>
                        </button>
                      ) : (
                        <button className='pd-x-3  border-none pd-y-2 rounded-full cursor'>
                          <Link
                            className='text-dec  text-m cursor'
                            to='/product'
                          >
                            Empty list add item
                          </Link>
                        </button>
                      )}
                    </div>
                  </div>
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
