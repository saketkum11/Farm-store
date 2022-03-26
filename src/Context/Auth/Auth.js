import { createContext } from "react";
import { useContext } from "react";
import axios from "axios";
const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children})  => {

   const signupHandler = async (data) => {
     
      try {
        const response = await axios.post(`/api/auth/signup`, {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
        });
        // saving the encodedToken in the localStorage
        localStorage.setItem("token", response.data.encodedToken);
        
      } catch (error) {
        console.log(error);
      }
    };

  
   return(<AuthContext.Provider value={{signupHandler,firstName,lastName,email,password}}>{children}</AuthContext.Provider>)
}

export  {useAuth,AuthProvider}
