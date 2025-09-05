import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [userToken, setUserToken] = useState(null);
  const [loggedUser, setLoggedUser] = useState(null);

  async function getUserInfo() {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${userToken?.access_token}`,
          },
        }
      );
      setLoggedUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUserInfo();
  }, [userToken]);

  return (
    <AuthContext.Provider
      value={{ userToken, setUserToken, loggedUser, setLoggedUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
