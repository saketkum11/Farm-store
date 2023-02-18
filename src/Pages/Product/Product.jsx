import React from 'react';
import Card from '../../Component/Card/Card';
import Navbar from '../../Component/Navbar/Navbar';
import Filter from './Filter';
import './Product.css';

function Product() {
  return (
    <>
      <div className='h-100 product overflow-hidden'>
        <Navbar></Navbar>

        <main>
          <div className='flex width-max-100 '>
            <Filter></Filter>
            <Card></Card>
          </div>
        </main>
      </div>
    </>
  );
}

export default Product;
