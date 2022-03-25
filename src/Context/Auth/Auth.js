import { createContext } from "react";
import { useContext } from "react";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children})  => {

   const signupHandler = async () => {
      try {
        const response = await axios.post(`/api/auth/signup`, {
          firstName: "Adarsh",
          lastName: "Balika",
          email: "adarshbalika@neog.camp",
          password: "adarshBalika",
        });
        // saving the encodedToken in the localStorage
        localStorage.setItem("token", response.data.encodedToken);
      } catch (error) {
        console.log(error);
      }
    };

  
   return(<AuthContext.Provider value={{id:"saket",password:"djshdjhf"}}>{children}</AuthContext.Provider>)
}

export  {useAuth,AuthProvider}
