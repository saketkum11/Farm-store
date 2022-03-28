import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Cauliflower",
    imageSrc: ["Assets/products/cauliflower"],
    price: "250",
    categoryName: "Fruit",
  },
];
