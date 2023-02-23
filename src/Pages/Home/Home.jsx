import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import { Link } from 'react-router-dom';
import './Home.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useProduct } from '../../Context/Product/Product-Context';
import Footer from '../../Component/Footer/Footer';
import CategoryCard from '../../Component/CategoryCard/CategoryCard';
import { useCart } from '../../Context/Cart/Cart-Context';
import { useWishlist } from '../../Context/Wishlist/Wishlist-Context';
import { useAuth } from '../../Context/Auth/Auth';
import toast from 'react-hot-toast';
function Home() {
  const [categoriesValue, setCategoriesValue] = useState([]);
  const { setCategories, productName, items } = useProduct();
  const { removeCart, addCart, cart } = useCart();
  const { addItem, wishlist, removeItem } = useWishlist();
  const { tokenValue } = useAuth();
  let productToshow = items.slice(4);

  useEffect(() => {
    const categories = async () => {
      try {
        const response = await axios.get('/api/categories');
        setCategoriesValue(response.data.categories);
      } catch (error) {
        console.log(error);
      }
    };
    categories();
  }, []);

  const handleAdRemovedFromCart = (product) => {
    if (tokenValue) {
      removeCart(product);
      toast.success('Removed from Cart');
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
  const handleAddToWishlist = (product) => {
    if (tokenValue) {
      addItem(product);
      toast.success('Added to Wishlist');
    } else if (!tokenValue) {
      navigate('/login');
      toast.error('You must login');
    }
  };

  return (
    <>
      <div className=''>
        <Navbar />
        <main>
          <div className='flex flex-column  justify-center  m-y-11  wt-80 m-auto'>
            <section className='flex flex-wrap gap-3'>
              <div className='flex-1 flex flex-column items-start justify-center width-max-100 gap-3'>
                <div className='flex flex-column text-start gap-2 '>
                  <span className='text-lg'>Farmgistic</span>
                  <p className='text-xm'>
                    A fit body, a calm mind, a house full of love. These things
                    cannot be bought – they must be earned.
                  </p>
                </div>
                <Link
                  to='/product'
                  className='text-dec text-xm text-color-grey-0 pd-x-5 pd-y-3 bg-green-6 rounded-s'
                >
                  Buy Now
                </Link>
              </div>
              <div className='width-max-100 flex items-center'>
                <figure>
                  <img
                    src='/Assets/vegtables.jpg'
                    alt=''
                    className='width-scaled5-7 object-content-center ht-auto rounded-s'
                  />
                </figure>
              </div>
            </section>

            <section className='m-y-11'>
              <div className='text-start m-y-11'>
                <span className='text-lg'>Product</span>
              </div>
              <div className='flex gap-2 justify-center items-center flex-wrap overflow-auto pd-4'>
                {[...productToshow].map((product) => {
                  const { id, title, imageSrc, price, rating } = product;
                  return (
                    <>
                      <div
                        key={id}
                        className='flex flex-column position-rel  width-scaled4-4  box-shadow-1 overflow-hide rounded-s'
                      >
                        <figure>
                          <img
                            src={imageSrc}
                            alt={title}
                            className='object-content-cover rounded-top-3 wt-100 ht-100'
                          />
                        </figure>
                        <div className='flex flex-column justify-start items-start pd-4 '>
                          <span className='m-y-1  text-xm text-semibold'>
                            {title}
                          </span>

                          <span className='m-y-1'>Rs {price} / kg</span>

                          <span className='m-y-1'>Rating - {rating}/5</span>
                        </div>
                        <div className='flex pd-4 justify-btw items-center'>
                          {cart.some((prod) => prod.id === id) ? (
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
                          {wishlist.some((prod) => prod.id === id) ? (
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
                    </>
                  );
                })}
              </div>
            </section>
            <section>
              <div className='text-start m-y-11'>
                <span className='text-lg'>Categories</span>
              </div>
              <CategoryCard />
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;
