import { createContext } from "react";
import { useContext } from "react";
import axios from "axios";
import { useState } from "react";
const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children})  => {
  const [loader,setLoader] = useState(false)
  
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
       setLoader(false)
        console.log(response)
      } catch (error) {
        console.log(error);
      }
    };

  
   return(<AuthContext.Provider value={{signupHandler,loader,setLoader}}>{children}</AuthContext.Provider>)
}

export  {useAuth,AuthProvider}
