import toast from 'react-hot-toast';
import { useCart } from '../../Context/Cart/Cart-Context';

const CartCard = ({ product }) => {
  const { removeCart, incrementQuantity, decrementQuantity, moveToWishlist } =
    useCart();

  return (
    <>
      <section className='box-shadow flex justify-btw wt-60 m-b-8 rounded-s '>
        <img
          src={product.imageSrc}
          className='wt-50 pd-2 object-content m-r-6'
          alt=''
        />

        <div className='pd-11 wt-80 flex flex-column justify-even '>
          <div className=' flex flex-column items-start '>
            <div className='flex flex-column items-start '>
              <span className='text-xm text-light'>{product.title}l</span>
              <span className='text-m'>Rs {product.price}</span>
              <span className='text-s'>{product.categoryName}</span>
              <span className='text-s'>{product.quantity}</span>
              <span className='text-s'>Discount - Rs {product.discount}</span>
            </div>
            <div className='flex justify-even items-center '>
              <span>Quantity: </span>
              <button
                onClick={() => decrementQuantity(product)}
                className='cursor rounded-full wt-fixed-5 h-fixed-5 '
              >
                -
              </button>
              <span className=''>{product.qty}</span>
              <button
                onClick={() => incrementQuantity(product)}
                className='cursor rounded-full wt-fixed-5 h-fixed-5'
              >
                +
              </button>
            </div>
          </div>
          <div className='flex flex-column items-center m-y-3'>
            <button
              onClick={() => {
                removeCart(product);
                toast.success('removed from cart');
              }}
              className='cursor bg-red-7 text-color-0 rounded-xs outline-none border-none text-s pd-y-3 m-y-2 wt-100'
            >
              Remove from cart
            </button>
            <button
              onClick={() => {
                moveToWishlist(product);
                toast.success('Moved to wishlist');
              }}
              className='cursor bg-black-8 text-color-0 rounded-xs outline-none border-none text-s pd-y-3 m-y-2 wt-100'
            >
              move to wishlist
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export { CartCard };
