import React from "react";

export default function CheckoutTable() {
  // Array of products (without id)
  const products = [
    {
      title: "Wireless Headphones",
      price: "$120",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=200",
      category: "Electronics",
    },
    {
      title: "Running Shoes",
      price: "$90",
      image: "https://images.unsplash.com/photo-1528701800489-20be9c63b1f0?w=200",
      category: "Fashion",
    },
    {
      title: "Smart Watch",
      price: "$150",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=200",
      category: "Accessories",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 p-6 flex justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-5xl overflow-x-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Checkout Page</h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-left">
              <th className="p-3 rounded-tl-xl">Image</th>
              <th className="p-3">Title</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3 rounded-tr-xl">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                {/* Image */}
                <td className="p-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>
                {/* Title */}
                <td className="p-3 font-medium">{item.title}</td>
                {/* Category */}
                <td className="p-3">
                  <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </td>
                {/* Price */}
                <td className="p-3 font-semibold text-green-600">{item.price}</td>
                {/* Checkout Button */}
                <td className="p-3">
                  <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1.5 rounded-lg shadow hover:scale-105 transition-transform">
                    Checkout
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
