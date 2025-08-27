import React from 'react'
import { NavLink } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";

export default function Register() {
  return (
    <>
<div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full mx-auto max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form className="space-y-2">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-400"
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
            />
          </div>
          {/* Role */}
          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <select
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-400"
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
            </select>
          </div>
          {/* Avatar */}
          <div>
            <label className="block text-sm font-medium mb-1">Avatar</label>
            <input
              type="file"
              accept="image/*"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition"
          >
            Register
          </button>

          {/* Google Sign Up Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            <FcGoogle className="text-xl" />
            Sign up with Google
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
