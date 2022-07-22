import { createContext } from 'react';
import { useContext } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  const itemToken = localStorage.getItem('token') ? true : false;
  const tokenValue = localStorage.getItem('token');
  const [authToken, setAuthToken] = useState(itemToken);
  const navigate = useNavigate();

  /* login data */

  const fetchLoginDetails = async (email, password) => {
    try {
      const response = await axios.post(
        '/api/auth/login',

        {
          email,
          password,
        }
      );

      // saving the encodedToken in the localStorage

      localStorage.setItem('token', response.data.encodedToken);

      navigate('/');
      console.log('reposnse from login', response.data);
    } catch (error) {
      console.error(error);
    }
  };

  /* signup data colleting backend */

  const signupHandler = async (data) => {
    setLoader(true);
    try {
      const response = await axios.post('/api/auth/signup', {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem('token', response.data.encodedToken);

      setLoader(true);
    } catch (error) {
      console.error(error);
    }
  };
  const logoutHandler = async () => {
    try {
      localStorage.removeItem('token');
    } catch (error) {
      console.error(error);
    }
  };
  console.log('auth', tokenValue);
  return (
    <AuthContext.Provider
      value={{
        signupHandler,
        loader,
        authToken,
        tokenValue,
        setLoader,
        fetchLoginDetails,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
