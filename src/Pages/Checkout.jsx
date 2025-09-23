import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";

export default function CheckoutTable() {
  const {cart} =useContext(CartContext)
  const googleUserInfo = JSON.parse(localStorage.getItem("userFromGoggle"));
  
  function calculateSubtotal (){
    let subtotal = 0;
    cart?.forEach(element => {
      subtotal = subtotal + element?.price;
    });
    return subtotal.toFixed(2)
  }

  async function PayNow() {
    let userPayableAmount = calculateSubtotal()

    let aamarPayJSON = {
    "store_id": "aamarpaytest",
    "tran_id": "asdasdasdasdasd",
    "success_url": "http://www.merchantdomain.com/suc esspage.html",
    "fail_url": "http://www.merchantdomain.com/faile dpage.html",
    "cancel_url": "http://www.merchantdomain.com/can cellpage.html",
    "amount": "userPayableAmount",
    "currency": "BDT",
    "signature_key": "dbb74894e82415a2f7ff0ec3a97e4183",
    "desc": "Merchant Registration Payment",
    "cus_name": "googleUserInfo.name",
    "cus_email": "googleUserInfo.email",
    "cus_add1": "House B-158 Road 22",
    "cus_add2": "Mohakhali DOHS",
    "cus_city": "Dhaka",
    "cus_state": "Dhaka",
    "cus_postcode": "1206",
    "cus_country": "Bangladesh",
    "cus_phone": "+8801704",
    "type": "json"
}

      try {
     const response = await axios.post(
      "https://sandbox.aamarpay.com/jsonpost.php", aamarPayJSON);
    const userInfomation = response.data;
    console.log(userInfomation);
    
   } catch (error) {
    console.log(error);
    
   }
    
  }


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
            {cart.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                {/* Image */}
                <td className="p-3">
                  <img
                    src={item?.images}
                    alt={item?.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>
                {/* Title */}
                <td className="p-3 font-medium">{item?.title}</td>
                {/* Category */}
                <td className="p-3">
                  <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full">
                    {item?.category.name}
                  </span>
                </td>
                {/* Price */}
                <td className="p-3 font-semibold text-green-600">{item?.price}</td>
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
        <div className="text-right">
          <h2 className="text-2xl font-bold">Subtotal: {calculateSubtotal()} Taka</h2>
        <button onClick={PayNow} className="btn btn-success my-4">Pay Now</button>
        </div>
      </div>
    </div>
  );
}
