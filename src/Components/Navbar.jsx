import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

export default function Navbar() {

  return (
    <>
<div className=" bg-green-300">
    <div className="navbar container mx-auto z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 z-50">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/shop">Shop</NavLink></li>
        <li><NavLink to="/checkout">Checkout</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <NavLink to={"/"} className="btn btn-ghost normal-case text-xl">E-Commerce</NavLink>
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
      <span className="badge badge-sm indicator-item">8</span>
    </div>
  </label>

</div>
    </NavLink>

<div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <NavLink to={"/profile"} className="justify-between">
            Profile
            <span className="badge">New</span>
          </NavLink>
        </li>
        <li><NavLink to={"/"}>Logout</NavLink></li>
      </ul>
    </div>
  </div>
</div>
</div>
    </>
  );
}
