import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Card({productInfo}) {

  const { id, title, price, category, description, images } = productInfo;
    return (
    <>

    
   <NavLink to ={`/shop/product/${id}`}>
      <div className="border rounded-lg p-4 shadow">
  <div className="w-full h-40 overflow-hidden rounded">
    <img
      src={images[0]}
      alt="Product"
      className="w-full h-full object-cover"
    />
  </div>
  <h3 className="mt-2 font-semibold">{title}</h3>
  <p className='text-gray-500'>{description.slice(0,60)}</p>
  <p className="text-gray-600">{price}</p>
  <p className="text-sm text-gray-400">{category.name}</p>
</div>
   </NavLink>

    </>
  )
}
