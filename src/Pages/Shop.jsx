import React, {useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";
import Loading from "../Components/Loading";
import { AuthContext } from "../context/AuthContext";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [seacrchQuery, setSearchQuery] = useState("");
  console.log(seacrchQuery);
  


  async function fetchProducts() {
    setLoading(true);
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products?offset=0&limit=30"
    );
    setProducts(response.data);
    setLoading(false);
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  // console.log(products);

    // Filter products based on search query
const filteredProduct = products.filter((product) =>
  product.title.toLowerCase().includes(seacrchQuery.toLowerCase())
);


  
  return (
    <>
      <div className="p-6 max-w-6xl mx-auto">
        {/* Search */}
        <div className="mb-4">
          <input
            value={seacrchQuery}
            type="text"
            placeholder="Search products..."
            className="w-full border p-2 rounded-lg"
            onChange={(e) => setSearchQuery(e.target.value)}
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

        {
          loading ? <Loading /> :   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
         {
          filteredProduct.map ((product) => <Card key={product.id} productInfo={product} /> )
         }
        </div>
        }


       
       
      </div>
    </>
  );
}
