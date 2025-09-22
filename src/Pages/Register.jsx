import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';
export default function Register() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigation = useNavigate()
    const {
    register,
    handleSubmit,
    reset
  } = useForm()

  async function registerOnSubmit(userData) {

    try {
    setLoading (true);
    const response = await axios.post ("https://api.escuelajs.co/api/v1/users/", userData)
    setUser(response.data)
    setLoading(false);
    reset()
    navigation ("/login")
    toast.success("Registration Successful")
    } catch (error) {
      console.error( error);
    }
  }
  console.log(user);
  
  return (
    <>
<div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full mx-auto max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleSubmit(registerOnSubmit)} className="space-y-2">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-400"
              {...register("name")}
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-400"
              {...register("email")}
            />
          </div>
          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-400"
              {...register("password")}
            />
          </div>
          {/* Role */}
          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <select
            {...register("role")}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-400"
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="customer">Customer</option>
            </select>
          </div>
          {/* Avatar */}
          <div>
            <label className="block text-sm font-medium mb-1">Avatar</label>
            <input
              type="text"
              placeholder='Paste image URL'
              accept="image/*"
              className="w-full px-3 py-2 border rounded-lg"
              {...register("avatar")}
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition"
          >
            {loading ? <span className="loading loading-spinner loading-sm"></span> : 'Register'}
          </button>


          <p className="text-center text-sm mt-3">
            Already have an account?{" "}
            <NavLink to="/login" className="text-blue-500 hover:underline">
              Login
            </NavLink>
          </p>
        </form>
      </div>
</div>
    </>
  )
}
