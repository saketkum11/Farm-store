import React, { useEffect } from 'react';
import { useCart } from '../../Context/Cart/Cart-Context';
import { useNavigate } from 'react-router-dom';
import { CartCard } from '../../Component/CartCard/CartCard';

function Cart() {
  const { cart, getCart, priceData } = useCart();

  useEffect(() => {
    getCart();
  }, []);
  const navigate = useNavigate();
  const handleOrder = () => {
    navigate('/checkout');
  };
  const { totalDiscount, totalProductPrice, deliveryPrice } = priceData;
  return (
    <>
      <div className='h-100'>
        <main className='wt-80 m-y-11 m-auto bg-black-0 flex  items-center flex-wrap'>
          <div className='text-center m-y-8'>
            <h2 className='text-light text-center'>My Carts</h2>
          </div>
          <div className='flex wt-100 '>
            <div className=' flex flex-column justify-around pd-5 '>
              <div className='flex flex-column'>
                {[...cart]?.reverse().map((product) => {
                  return (
                    <>
                      <CartCard product={product} key={product._id} />
                    </>
                  );
                })}
              </div>
            </div>
            <div className='flex flex-column wt-50'>
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
                  <span className='text-s'>Delivery Charges </span>
                  <span>Rs {deliveryPrice}</span>
                </div>

                <div className='flex items-center justify-btw pd-2'>
                  <h4>Total Amount</h4>
                  <span className='text-bold'>
                    Rs {totalProductPrice + deliveryPrice - totalDiscount}
                  </span>
                </div>

                <div className='pd-2'>
                  <p>You have saved Rs {totalDiscount}!</p>
                  <button
                    onClick={handleOrder}
                    className='cursor bg-red-7 text-color-0 rounded-xs outline-none border-none text-s pd-y-3 m-y-2 wt-100'
                  >
                    Place your Order
                  </button>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Cart;
