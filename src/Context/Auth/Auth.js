import { createContext } from "react";
import { useContext } from "react";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children})  => {
   return(<AuthContext.Provider value={{id:"saket",password:"djshdjhf"}}>{children}</AuthContext.Provider>)
}

export  {useAuth,AuthProvider}
