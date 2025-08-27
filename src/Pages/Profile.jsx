import React from 'react'

export default function Profile() {
    const user = {
    avatar: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww",
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Admin",
  };
  return (
    <>
         <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm text-center">
        {/* Avatar */}
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500 shadow-md"
        />
        {/* Name */}
        <h2 className="mt-4 text-xl font-bold">{user.name}</h2>
        {/* Email */}
        <p className="text-gray-600 text-sm">{user.email}</p>
        {/* Role */}
        <span className="mt-2 inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
          {user.role}
        </span>
      </div>
    </div>
    </>
  )
}
