import React from 'react'
import Card from '../Components/Card'

export default function Shop() {
  return (
    <>
       <div className="p-6 max-w-6xl mx-auto">
      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full border p-2 rounded-lg"
        />
      </div>

      {/* Categories */}
      <div className="flex gap-2 mb-6 flex-wrap">
        <button className="px-4 py-1 rounded-full border bg-blue-600 text-white">
          All
        </button>
        <button className="px-4 py-1 rounded-full border bg-gray-100 text-gray-600">
          Furniture
        </button>
        <button className="px-4 py-1 rounded-full border bg-gray-100 text-gray-600">
          Electronics
        </button>
        <button className="px-4 py-1 rounded-full border bg-gray-100 text-gray-600">
          Fashion
        </button>
        <button className="px-4 py-1 rounded-full border bg-gray-100 text-gray-600">
          Others
        </button>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>

      </div>
    </div>
    </>
  )
}
