import axios from 'axios';
import { createContext, useContext, useReducer } from 'react';
import { useAuth } from '../Auth/Auth';

const AddressContext = createContext();
const useAddress = () => useContext(AddressContext);

const AddressProvider = ({ children }) => {
  const initialState = {
    address: {
      name: '',
      city: '',
      state: '',
      phoneNo: '',
      pincode: '',
      country: '',
    },
  };
  const [userState, userDispatch] = useReducer(initialState);

  return (
    <AddressContext.Provider value={{ userState, userDispatch }}>
      {children}
    </AddressContext.Provider>
  );
};
export { useAddress, AddressProvider };
