import { useContext, createContext, useState, useEffect } from "react";
import { login, register, isAdmin } from "../api/auth.api";

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
  const [isAdministrator, setIsAdministrator] = useState(false);

  const adminValidator = async (token) => {
    const response = await isAdmin(token);
    setIsAdministrator(response);
  };

  useEffect(() => {
    const tok = localStorage.getItem("token");
    if (tok) {
      setIsAuth(true);
      adminValidator(tok);
    }
  }, []);

  const LogIn = async (credentials) => {
    try {
      const response = await login(credentials);
      if (response.token) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("username", response.user.usuario);
        localStorage.setItem("id", response.user.id);
        setIsAuth(true);
      }
      const res = await isAdmin(response.token);
      setIsAdministrator(res);
      return response;
    } catch (error) {
      console.error(error.message);
    }
  };

  const Register = async (user) => {
    try {
      return await register(user);
    } catch (error) {
      console.error(error.message);
    }
  };

  const LogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    setIsAuth(false);
    setIsAdministrator(false);
  };
  return (
    <UserContext.Provider
      value={{
        isAuth,
        isAdministrator,
        LogIn,
        Register,
        LogOut,
        adminValidator,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
