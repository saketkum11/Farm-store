import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'egg and meat',
    imageSrc: ['/Assets/Egg.jpg'],
  },
  {
    _id: uuid(),
    categoryName: 'grain',
    imageSrc: ['/Assets/Grain.jpg'],
  },
  {
    _id: uuid(),
    categoryName: 'vegetable',
    imageSrc: ['/Assets/vegetable (2).jpg'],
  },
  {
    _id: uuid(),
    categoryName: 'fruit',
    imageSrc: ['/Assets/Apple.jpg'],
  },
];
