import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'
import { AuthContext } from '../context/AuthContext'
export default function Login() {
  // const [loginInfo, setLoginInfo] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigation = useNavigate()
  const {userToken, setUserToken}= useContext(AuthContext);
   const {
    register,
    handleSubmit,
    reset
  } = useForm()
  async function onSubmit (data)  {
    setLoading(true);
    const response = await axios.post ("https://api.escuelajs.co/api/v1/auth/login", data)
    setUserToken(response.data)
    setLoading(false);
    reset()  
    navigation ("/shop")
    toast.success("Login Successful")
}
    console.log(userToken);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="Enter your password"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            {
              loading ? <span className="loading loading-spinner loading-sm"></span> : "Login"
            }
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <NavLink to="/register" className="text-blue-600 hover:underline">
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
    </>
  )
}
