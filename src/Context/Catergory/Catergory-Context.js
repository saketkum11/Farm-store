import axios from 'axios';
import { createContext, useContext, useState } from 'react';

const categoryContext = createContext();
const useCategory = () => useContext(categoryContext);

const CategoryProvider = ({ children }) => {
  const [categoryItem, setCategoryItem] = useState([]);
  const getCategory = async () => {
    try {
      const response = await axios.get('/api/categories');
      setCategoryItem(response.data.categories);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <categoryContext.Provider value={{ getCategory, categoryItem }}>
      {children}
    </categoryContext.Provider>
  );
};

export { CategoryProvider, useCategory };
