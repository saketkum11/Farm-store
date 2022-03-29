import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Cauliflower",
    imageSrc: ["/Assets/products/cauliflower.jpg"],
    price: 250,
    quantity: 1,
    inStock: true,
    rating: 3,
    categoryName: "vegetable",
  },
  {
    _id: uuid(),
    title: "Green-Peas",
    imageSrc: ["/Assets/products/green-peas.jpg"],
    price: 250,
    quantity: 1,
    inStock: true,
    rating: 4,
    categoryName: "vegetable",

  },
  {
    _id: uuid(),
    title: "Sapodta",
    imageSrc: ["/Assets/products/sapodilla.jpg"],
    price: 96,
    quantity: 1,
    inStock: true,
    rating: 3,
    categoryName: "fruit",
  },
  {
    _id: uuid(),
    title: "Coconut",
    imageSrc: ["/Assets/products/coconut.jpg"],
    price: 23,
    quantity: 1,
    inStock: true,
    rating: 2,
    categoryName: "fruit",
  },
  {
    _id: uuid(),
    title: "Egg",
    imageSrc: ["/Assets/products/egg.jpg"],
    price: 210,
    quantity: 30,
    inStock: true,
    rating: 1,
    categoryName: "egg & meat",
  },{
    _id: uuid(),
    title: "BoneLess chicken",
    imageSrc: ["/Assets/products/chicken.jpg"],
    price: 724,
    quantity: 1,
    inStock: true,
    rating: 1,
    categoryName: "egg & meat",
  },
  {
    _id: uuid(),
    title: "Wheat Sharbati",
    imageSrc: ["/Assets/products/wheat.jpg"],
    price: 57,
    quantity: 1,
    inStock: true,
    rating: 3,
    categoryName: "grain",
  },{
    _id: uuid(),
    title: "Salt",
    imageSrc: ["/Assets/products/salt.jpg"],
    price: 36,
    quantity: 1,
    inStock: true,
    rating: 4,
    categoryName: "grain",
  },
];
