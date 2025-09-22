import React, { useContext, useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { loggedUser} = useContext(AuthContext);
  const userInfo = JSON.parse(localStorage.getItem("loggedUser"));
  const googleUserInfo = JSON.parse(localStorage.getItem("userFromGoggle"));
  const {cart} = useContext(CartContext);
  console.log(cart);
  
// console.log(googleUserInfo);


//
  const userToken = JSON.parse(localStorage.getItem("token"))?.access_token;

  const [token, setToken] = useState(null); 
  async function fetchProfile() {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${userToken}`, 
          },
        }
      );
      setToken(response.data); 
    } catch (error) {
      // console.error("Error fetching profile:", error);
    }
  }
  useEffect(() => {
    fetchProfile();
  }, []);
  
  //



  const navigation = useNavigate();
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedUser");
    localStorage.removeItem("userFromGoggle");
    localStorage.clear();
    navigation("/login");
  }
  return (
    <>
      <div className=" bg-green-300">
        <div className="navbar container mx-auto z-50">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52 z-50"
              >
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/shop">Shop</NavLink>
                </li>
                <li>
                  <NavLink to="/checkout">Checkout</NavLink>
                </li>
                {!userToken && (
                  <>
                    <li>
                      <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                      <NavLink to="/register">Register</NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <NavLink to={"/"} className="btn btn-ghost normal-case text-xl">
              E-Commerce
            </NavLink>
          </div>
          <div className="navbar-end">
            <NavLink to={"/checkout"}>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">{cart.length}</span>
                  </div>
                </label>
              </div>
            </NavLink>

            {userToken || googleUserInfo && (
              <div className="dropdown dropdown-end z-10">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                    alt="User Avatar"
                      src={
                        token || googleUserInfo
                          ? token?.avatar || googleUserInfo?.photoURL
                          : "https://media.istockphoto.com/id/935941772/photo/diverse-people-holding-emoticon.jpg?s=1024x1024&w=is&k=20&c=chW6cByVoJVetLXfF-YpKT3cBbct0xL80MvM90l6psI="
                      }
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <NavLink to={"/profile"} className="justify-between">
                      {userToken || googleUserInfo ? token?.name || googleUserInfo.displayName : "Profile"}
                      <span className="badge">New</span>
                    </NavLink>
                  </li>
                  <li
                    className="cursor-pointer pl-2 hover:bg-slate-200 rounded-lg"
                    onClick={logout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
