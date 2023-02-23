import React, { useRef, useState } from 'react';
import Card from '../../Component/Card/Card';
import Navbar from '../../Component/Navbar/Navbar';
import Filter from './Filter';
import Footer from '../../Component/Footer/Footer';
import SideFilter from '../../Component/SideFilter/SideFilter';
import './Product.css';

function Product() {
  const [filterFlag, setFilterFlag] = useState(false);
  return (
    <>
      <div className='h-100 product overflow-hidden'>
        <Navbar></Navbar>

        <main>
          <div className='pd-x-7 flex wt-100 justify-start filter-hide '>
            <button
              className='text-m bg-black-0 cursor flex '
              onClick={() => {
                console.log(filterFlag);
                setFilterFlag((flag) => !flag);
              }}
            >
              <i class='fa-solid fa-sliders'></i>
            </button>
          </div>
          <div className='width-max-100 flex'>
            <Filter />
            {filterFlag && (
              <SideFilter
                filterFlag={filterFlag}
                setFilterFlag={setFilterFlag}
              />
            )}
            <Card></Card>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Product;
