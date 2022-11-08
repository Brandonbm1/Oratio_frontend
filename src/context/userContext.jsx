import { useContext, createContext, useState } from "react";
import { login, register } from "../api/auth.api";

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserContextProvider");
  }
  return context;
};

export const UserContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const LogIn = async (credentials) => {
    try {
      return await login(credentials);
    } catch (error) {
      console.log(error.message);
    }
  };

  const Register = async (user) => {
    try {
      return await register(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const LogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("id");
  };
  return (
    <UserContext.Provider value={{ isAuth, LogIn, Register, LogOut }}>
      {children}
    </UserContext.Provider>
  );
};
