import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [userToken, setUserToken] = useState(null);
  const [loggedUser, setLoggedUser] = useState(null);
  const [user, setUser] = useState(null);
  const [googleUser, setGoogleUser] = useState(null);
  console.log(googleUser);
  async function fetchProfile() {
    const userToken = JSON.parse(localStorage.getItem("token"))?.access_token;
    if (!userToken) return;

    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/auth/profile",
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  }

  useEffect(() => {
    fetchProfile();
  }, []);

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
      localStorage.setItem("token", JSON.stringify(userToken));
      localStorage.setItem("loggedUser", JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUserInfo();
  }, [userToken]);

  //

  //
  return (
    <AuthContext.Provider
      value={{
        userToken,
        setUserToken,
        loggedUser,
        setLoggedUser,
        user,
        setUser,
        googleUser,
        setGoogleUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
