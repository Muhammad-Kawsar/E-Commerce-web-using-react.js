import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Card() {
  return (
    <>

    
   <NavLink to ="/shop/product/1">
      <div className="border rounded-lg p-4 shadow">
  <div className="w-full h-40 overflow-hidden rounded">
    <img
      src="https://fabrilife.com/products/68a898fac5181-square.jpg?v=20"
      alt="Product"
      className="w-full h-full object-cover"
    />
  </div>
  <h3 className="mt-2 font-semibold">Handmade Fresh Table</h3>
  <p className="text-gray-600">$687</p>
  <p className="text-sm text-gray-400">Others</p>
</div>
   </NavLink>

    </>
  )
}
