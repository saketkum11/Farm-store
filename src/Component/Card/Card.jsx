import React from 'react';
import { useFilter } from '../../Context/Filter/Filter-Context';
import { useProduct } from '../../Context/Product/Product-Context';
import { useWishlist } from '../../Context/Wishlist/Wishlist-Context';

function Card() {
  const { sortPriceData } = useFilter();
  const { items } = useProduct();
  const { addItem, wishlist, removeItem } = useWishlist();

  return (
    <>
      <div className='wt-80 bg-black-2'>
        <div className='grid product-content pd-3'>
          {sortPriceData &&
            sortPriceData.map((product) => {
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
                  className='flex flex-column  bg-black-0 wt-100 position-rel'
                >
                  {wishlist.some((prod) => prod._id === _id) ? (
                    <div className='position-ab t-2 r-5'>
                      <button
                        onClick={() => removeItem(product)}
                        className='pd-x-3 bg-black-2 border-none pd-y-2 rounded-full cursor'
                      >
                        <i className='fa-solid fa-heart color-red-7'></i>
                      </button>
                    </div>
                  ) : (
                    <div className='position-ab t-2 r-5'>
                      <button
                        onClick={() => {
                          addItem(product);
                        }}
                        className='pd-x-3 bg-black-2 border-none pd-y-2 rounded-full cursor'
                      >
                        <i className='fa-solid fa-heart color-black-7'></i>
                      </button>
                    </div>
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
                    className=' flex flex-wrap flex-column items-center wt-100 border-none cursor pd-y-3 text-color-0 bg-black-8
                      text-dec '
                  >
                    Add to cart
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Card;
