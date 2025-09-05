import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
export default function Product() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchsingleProduct() {
    setLoading(true);
    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    setSingleProduct(response.data);
    setLoading(false);
  }
  useEffect(() => {
    fetchsingleProduct();
  }, []);
  return (
    <>
      {loading && <Loading />}
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-2xl rounded-2xl p-6 max-w-4xl w-full flex flex-col md:flex-row gap-6">
          {/* Images Section */}
          <div className="md:w-1/2">
            <img
              src={singleProduct?.images[0]}
              alt={singleProduct?.title}
              className="w-full h-72 object-cover rounded-xl mb-4"
            />
            <div className="flex gap-3">
              {singleProduct?.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${singleProduct?.title} ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-blue-500"
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                {singleProduct?.title}
              </h1>
              <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {singleProduct?.category?.name}
              </span>
              <p className="text-gray-700 mb-4">{singleProduct?.description}</p>
              <p className="text-xl font-semibold text-green-600 mb-6">
                ${singleProduct?.price}
              </p>
            </div>
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-lg font-medium shadow-md hover:scale-105 transition-transform">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
