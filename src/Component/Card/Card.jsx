import React from 'react';
import { useCart } from '../../Context/Cart/Cart-Context';
import { useFilter } from '../../Context/Filter/Filter-Context';
import { useProduct } from '../../Context/Product/Product-Context';
import { useWishlist } from '../../Context/Wishlist/Wishlist-Context';
import { useAuth } from '../../Context/Auth/Auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
function Card() {
  const { sortPriceData } = useFilter();
  const { items, categories, setCatrgories } = useProduct();
  const { addItem, wishlist, removeItem } = useWishlist();
  const { removeCart, addCart, cart } = useCart();
  const { tokenValue } = useAuth();
  const navigate = useNavigate();

  const filteredCategories = (category) => {
    if (category) {
      return sortPriceData?.filter((item) => item.categoryName === category);
    }
    return sortPriceData;
  };

  const filterCategories = filteredCategories(categories);
  const handleAddToWishlist = (product) => {
    if (tokenValue) {
      addItem(product);
      toast.success('Added to Wishlist');
    } else if (!tokenValue) {
      navigate('/login');
      toast.error('You must login');
    }
  };
  const handleRemovedFromWishlist = (product) => {
    if (tokenValue) {
      removeItem(product);
      toast.success('removed from Wishlist');
    } else if (!tokenValue) {
      navigate('/login');
      toast.error('You must login');
    }
  };
  const handleAddCart = (product) => {
    if (tokenValue) {
      addCart(product);
      toast.success('Added to Cart');
    } else if (!tokenValue) {
      navigate('/login');
      toast.error('You must login');
    }
  };
  const handleAdRemovedFromCart = (product) => {
    if (tokenValue) {
      removeCart(product);
      toast.success('Removed from Cart');
    } else if (!tokenValue) {
      navigate('/login');
      toast.error('You must login');
    }
  };
  return (
    <>
      <div className=' width-max-100 m-y-9 pd-4 m-auto'>
        <div className='flex gap-3 flex-wrap justify-center'>
          {filterCategories &&
            [...filterCategories].map((product) => {
              const {
                _id,
                imageSrc,
                price,
                categoryName,
                title,
                quantity,
                rating,
                inStock,
              } = product;
              return (
                <div
                  key={_id}
                  className='flex flex-column  bg-black-0 width-scaled4-4 position-rel overflow-hide rounded-m box-shadow-1'
                >
                  <img
                    src={imageSrc}
                    className=' rounded-top-3 object-content-cover'
                    alt='have  no imgae'
                  />

                  <div className='pd-4'>
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
                  </div>
                  <div className='flex pd-4 justify-btw items-center'>
                    {cart.some((prod) => prod._id === _id) ? (
                      <button
                        onClick={() => handleAdRemovedFromCart(product)}
                        className=' rounded-s cursor border-red-700 border-solid border-1  text-color-red-7 pd-x-5 pd-y-4 text-m"'
                      >
                        Remove from cart
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAddCart(product)}
                        className='bg-black-0 rounded-s cursor border-green-700 border-solid border-1  text-color-green-7 pd-x-5 pd-y-4 text-xm"'
                      >
                        Add to cart
                      </button>
                    )}
                    {wishlist.some((prod) => prod._id === _id) ? (
                      <button
                        onClick={() => handleRemovedFromWishlist(product)}
                        className='text-m bg-none cursor text-color-red-9'
                      >
                        <i className='fa-solid fa-heart '></i>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAddToWishlist(product)}
                        className=' text-m  cursor text-color-grey-8'
                      >
                        <i className='fa-solid fa-heart '></i>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Card;
