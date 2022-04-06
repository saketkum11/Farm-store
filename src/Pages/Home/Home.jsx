import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import { Link } from 'react-router-dom';
import './Home.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [categoriesValue, setCategoriesValue] = useState([]);

  useEffect(() => {
    const categories = async () => {
      try {
        const response = await axios.get('/api/categories');
        setCategoriesValue(response.data.categories);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    categories();
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <main className='wt-80 m-auto '>
        <div className='flex items-start justify-center h-lg m-y-11 position-rel'>
          <img
            src='/Assets/Apple.jpg'
            alt='no image'
            className='rounded-L object-content wt-100 h-100'
          />
          <Link
            to='/product'
            className='text-color-9 text-dec text-m rounded-m pd-x-9 pd-y-3 position-ab bg-black-1 p-t-7 p-lf-1'
          >
            More
          </Link>
        </div>
        <div className='m-y-9'>
          <span className='text-lg text-bold'>Categories</span>
        </div>

        <section className='flex m-y-3 justify-around flex-wrap'>
          {categoriesValue.map((categ) => {
            const { imageSrc, categoryName } = categ;
            return (
              <>
                <div className=' wt-20 flex justify-center  items-center position-rel flex-wrap'>
                  <Link to='/product' className=' object-content rounded-m'>
                    <img
                      src={imageSrc}
                      className='wt-100 h-100 object-content rounded-m'
                      alt='no image'
                    />
                  </Link>
                  <span className=' position-ab text-color-0 text-m text-bold p-t-5'>
                    {categoryName}{' '}
                  </span>
                </div>
              </>
            );
          })}
        </section>
        <section className='m-y-11'>
          <div className='m-y-11'>
            <span className='text-lg text-bold'>Coming Soon</span>
          </div>
          <div className='flex wt-100 justify-btw m-x-4'>
            <div className=' rounded-s wt-30  flex justify-center position-rel items-start'>
              <Link
                to='/product'
                className='wt-100 h-100 object-content rounded-m'
              >
                <img
                  src='/Assets/Egg.jpg'
                  alt='no image'
                  className='rounded-L object-content wt-100 h-50'
                />
              </Link>
            </div>
            <div className='roounded-s wt-80 flex justify-center position-rel  m-x-4'>
              <Link
                to='/product'
                className='wt-100 h-100 object-content rounded-m'
              >
                <img
                  src='/Assets/Guava.jpg'
                  alt='no image'
                  className='rounded-L object-content wt-100 h-50'
                />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
