import React from 'react'

export default function Product() {
   const products = [
    {
      title: "Handmade Fresh Table",
      price: 687,
      category: "Others",
      description: "Andy shoes are designed to keeping in...",
      images: [
        "https://i.imgur.com/wXuQ7bm.jpeg",
        "https://i.imgur.com/ZKGofuB.jpeg",
        "https://i.imgur.com/ZANVnHE.jpeg",
      ],
    },
  ];
 const product = products[0];
  return (
    <>
 <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-6 max-w-4xl w-full flex flex-col md:flex-row gap-6">
        
        {/* Images Section */}
        <div className="md:w-1/2">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-72 object-cover rounded-xl mb-4"
          />
          <div className="flex gap-3">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumbnail ${i + 1}`}
                className={`w-20 h-20 object-cover rounded-lg ${
                  i === 0 ? "border-2 border-blue-500" : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {product.category}
            </span>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-xl font-semibold text-green-600 mb-6">
              ${product.price}
            </p>
          </div>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-lg font-medium shadow-md hover:scale-105 transition-transform">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
    </>
  )
}
