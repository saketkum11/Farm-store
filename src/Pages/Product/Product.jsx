import React from 'react';
import Card from '../../Component/Card/Card';
import Navbar from '../../Component/Navbar/Navbar';
import { useFilter } from '../../Context/Filter/Filter-Context';
import { useProduct } from '../../Context/Product/Product-Context';
import Filter from './Filter';
import './Product.css';

function Product() {
  const { items, categories, setCategories } = useProduct();
  const { sortPriceData } = useFilter();

  const filteredCategories = (category) => {
    if (category) {
      return sortPriceData?.filter((item) => item.categoryName === category);
    }

    return sortPriceData;
  };
  const filterCategories = filteredCategories(categories);

  return (
    <>
      <div className='h-100 product overflow-hidden'>
        <main className='flex h-vh-100 overflow-hidden '>
          <Filter></Filter>
          <div className='wt-80 bg-black-2'>
            <div className='grid product-content pd-3'>
              {filterCategories &&
                filterCategories?.map((item) => {
                  return (
                    <>
                      <Card product={item} key={item._id} />
                    </>
                  );
                })}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Product;
