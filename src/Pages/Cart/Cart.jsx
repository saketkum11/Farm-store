import Navbar from '../../Component/Navbar/Navbar';
import React from 'react';
import { useCart } from '../../Context/Cart/Cart-Context';
import toast from 'react-hot-toast';
import Footer from '../../Component/Footer/Footer';
function Cart() {
  const {
    cart,
    removeCart,
    incrementQuantity,
    decrementQuantity,
    priceData,
    moveToWishlist,
  } = useCart();

  const { totalDiscount, totalProductPrice, deliveryPrice } = priceData;
  const handlePlacedOrder = () => {
    if (cart.length !== 0) {
      toast.success(
        'Thanks for placing your. Your order has been proceed successfully'
      );
    }
  };

  return (
    <>
      <div className=''>
        <Navbar></Navbar>
        <main>
          <div className='text-center m-y-8  m-y-11 m-auto  flex items-center justify-center flex-column  flex-wrap width-max-100'>
            <h2 className='text-light text-center'>My Carts</h2>
          </div>
          <div className='flex  justify-center flex-wrap gap-3 width-max-100 '>
            <div className=' flex flex-column justify-around  pd-5 gap-3  width-scaled4-7'>
              {[...cart].map((product) => {
                const {
                  _id,
                  imageSrc,
                  title,
                  price,
                  inStock,
                  quantity,
                  rating,
                  qty,
                  discount,
                  categoryName,
                } = product;
                return (
                  <>
                    <div
                      key={_id}
                      className='flex flex-column gap-2 bg-black-0 rounded-s cursor border-black-700 border-solid border-1 pd-x-5 pd-y-4 '
                    >
                      <div className='flex justify-center items-center gap-1'>
                        <div className='width-max-100'>
                          <img
                            src={imageSrc}
                            className='width-scaled4-10 ht-100 object-content-cover'
                            alt=''
                          />
                        </div>

                        <div className='flex flex-column items-start '>
                          <div className=' flex flex-column items-start '>
                            <div className='flex flex-column items-start gap-1 '>
                              <span className='text-m text-light'>{title}</span>
                              <span className='text-s'>
                                Rs {price} / {quantity}
                              </span>
                              <span className='text-s'>
                                Discount - Rs {discount}
                              </span>
                            </div>

                            <div className='flex justify-even gap-2 items-center'>
                              <button
                                onClick={() => decrementQuantity(product)}
                                className='flex-1 cursor  border-black-700 border-solid border-1 pd-4'
                              >
                                -
                              </button>
                              <span className=''>{qty}</span>
                              <button
                                onClick={() => incrementQuantity(product)}
                                className=' flex-1 cursor border-black-700 border-solid border-1 pd-4'
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className='flex flex-column items-start m-y-3 gap-1 '>
                            <button
                              onClick={() => {
                                removeCart(product);
                                toast.success('removed from cart');
                              }}
                              className='flex-1  rounded-s cursor border-black-700 border-solid border-1 pd-y-4 pd-x-3 wt-100'
                            >
                              Remove from cart
                            </button>
                            <button
                              onClick={() => {
                                moveToWishlist(product);
                                toast.success('Moved to wishlist');
                              }}
                              className='flex-1 rounded-s cursor border-black-700 border-solid border-1 pd-y-4 pd-x-3 wt-100'
                            >
                              move to wishlist
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className='flex flex-column width-scaled4-9'>
              <section className='box-shadow pd-8  flex flex-column justify-even rounded-s '>
                <div>
                  <h3>Price Details</h3>
                </div>

                <div className='flex items-center justify-btw pd-2'>
                  <span className='text-s'>Product Price</span>
                  <span>Rs {totalProductPrice}</span>
                </div>
                <div className='flex items-center justify-btw pd-2'>
                  <span className='text-s'>Discount Price </span>
                  <span>-Rs {totalDiscount}</span>
                </div>

                <div className='flex items-center justify-btw pd-2'>
                  <h4>Total Amount</h4>
                  <span className='text-bold'>
                    Rs {totalProductPrice - totalDiscount}
                  </span>
                </div>

                <div className='pd-2'>
                  <p>You have saved Rs {totalDiscount}!</p>
                  <button
                    onClick={() => handlePlacedOrder()}
                    className='cursor bg-green-7 text-color-grey-0 rounded-s  border-none text-s pd-y-3 m-y-2 wt-100'
                  >
                    Place your Order
                  </button>
                </div>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Cart;
