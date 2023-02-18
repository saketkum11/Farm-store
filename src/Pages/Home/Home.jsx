import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import { Link } from 'react-router-dom';
import './Home.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useProduct } from '../../Context/Product/Product-Context';
import Footer from '../../Component/Footer/Footer';
import CategoryCard from '../../Component/CategoryCard/CategoryCard';

function Home() {
  const [categoriesValue, setCategoriesValue] = useState([]);
  const { setCategories, productName, items } = useProduct();
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
                {[...productToshow].map(
                  ({ id, title, imageSrc, price, rating }) => {
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
                            <span className='text-dec text-s text-color-grey-0 pd-x-5 pd-y-3 bg-green-6 rounded-s'>
                              Add to Cart
                            </span>
                            <span className='text-lg text-color-grey-4'>
                              <i class='fa-solid fa-heart'></i>
                            </span>
                          </div>
                        </div>
                      </>
                    );
                  }
                )}
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
