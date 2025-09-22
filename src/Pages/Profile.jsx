import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Await } from "react-router-dom";

export default function Profile() {
  const { loggedUser, user, google } = useContext(AuthContext);
  const googleUserInfo = JSON.parse(localStorage.getItem("userFromGoggle"));

  // const userInfo = JSON.parse(localStorage.getItem("loggedUser"));

//

  // const userToken = JSON.parse(localStorage.getItem("token"))?.access_token;

  // const [token, setToken] = useState(null); 
  // async function fetchProfile() {
  //   try {
  //     const response = await axios.get(
  //       "https://api.escuelajs.co/api/v1/auth/profile",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${userToken}`, 
  //         },
  //       }
  //     );
  //     setToken(response.data); 
  //   } catch (error) {
  //     console.error("Error fetching profile:", error);
  //   }
  // }
  // useEffect(() => {
  //   fetchProfile();
  // }, []);
  // console.log(token?.name, token?.email);

//



  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm text-center">
          {/* Avatar */}
          <img
            src={user?.avatar || googleUserInfo?.photoURL || "https://media.istockphoto.com/id/935941772/photo/diverse-people-holding-emoticon.jpg?s=1024x1024&w=is&k=20&c=chW6cByVoJVetLXfF-YpKT3cBbct0xL80MvM90l6psI="}
            alt="User Avatar"
            className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500 shadow-md"
          />
          <h2 className="text-2xl text-green-700 font-semibold">
            {user?.name || googleUserInfo?.displayName || "User Name"}
          </h2>
          <p>{user?.email || googleUserInfo.email}</p>
          <p>{user?.role}</p>
        </div>
      </div>
    </>
  );
}
