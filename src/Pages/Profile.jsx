import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

export default function Profile() {

  const {setLoggedUser, userToken, loggedUser}=useContext(AuthContext);


    
  return (
    <>
         <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm text-center">
        {/* Avatar */}
        <img
          src={loggedUser?.avatar}
          alt="User Avatar"
          className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500 shadow-md"
        />
        
      </div>
    </div>
    </>
  )
}
