import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { FcGoogle } from "react-icons/fc";

const provider = new GoogleAuthProvider();

export default function Login() {

  function logInWithGoogle() {
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    setGoogleUser(user);
    localStorage.setItem("userFromGoggle", JSON.stringify(user));
    toast.success("Login Successful");
    navigation("/shop");
    // console.log(user);
    
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }

  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();
  const {setUserToken, setLoggedUser, setGoogleUser} = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  
  async function onSubmit(data) {
    setLoading(true);
   try {
     const response = await axios.post(
      "https://api.escuelajs.co/api/v1/auth/login",
      data
    );
    const userInfomation = response.data;
    setUserToken(userInfomation);
    setLoading(false);
    reset();
    navigation("/shop");
    toast.success("Login Successful");
    
   } catch (error) {
    console.log(error);
    
   }
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="Enter your password"
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Login"
              )}
            </button>
          </form>
      <button onClick={logInWithGoogle}
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg font-medium hover:bg-gray-100 transition mt-4"
          >
            <FcGoogle className="text-xl" />
            Sign in with Google
          </button>
          <p className="text-sm text-center mt-4 text-gray-600">
            Don’t have an account?{" "}
            <NavLink to="/register" className="text-blue-600 hover:underline">
              Sign up
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}
