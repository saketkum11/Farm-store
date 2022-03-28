import { createContext } from "react";
import { useContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children})  => {
  const [loader,setLoader] = useState(false)
  const navigate = useNavigate()


 /* login data */ 

const encodedToken = localStorage.getItem("token");

const fetchLoginDetails = async (email,password) => {
  try{
        
    const response = await axios.post(`/api/auth/login`, 
    
    {
     email,
     password
    }
    );
   
    // saving the encodedToken in the localStorage
    
    localStorage.setItem("token", response.data.encodedToken);
    localStorage.getItem("token", response.data.encodedToken);
     navigate("/");
  }  catch (error) {
    console.log(error);
  }
};

/* signup data colleting backend */

   const signupHandler = async (data) => {
     setLoader(true)
      try {
        
        const response = await axios.post(`/api/auth/signup`, 
        
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
        }
        );
       
        // saving the encodedToken in the localStorage
        
        localStorage.setItem("token", response.data.encodedToken);
       setLoader(true)
        
      } catch (error) {
        console.log(error);
      }
    };

  
   return(<AuthContext.Provider value={{signupHandler,loader,setLoader,fetchLoginDetails}}>{children}</AuthContext.Provider>)
}

export  {useAuth,AuthProvider}
