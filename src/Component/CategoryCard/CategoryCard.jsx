import { useEffect } from 'react';
import { useCategory } from '../../Context/Catergory/Catergory-Context';

const CategoryCard = () => {
  const { getCategory, categoryItem } = useCategory();

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <div className='flex justify-center items-center gap-2 width-max-100 flex-wrap m-y-11 cursor'>
        {[...categoryItem].map(({ categoryName, imageSrc, _id }) => {
          return (
            <div className='width-scaled4-4  position-rel'>
              <img
                src={imageSrc}
                alt={categoryName}
                className=' rounded-m object-content-cover wt-100 ht-auto '
              />
              <div class='position-ab flex justify-center items-center top-0 ht-100 bg-overlay z-index-2 wt-100 text-color-grey-0 text-bold text-m rounded-m overflow-hide'>
                <p>{categoryName}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CategoryCard;
