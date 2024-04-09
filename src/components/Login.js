import React, { useState } from "react";
import Header from "./Header";
import { Form } from "react-router-dom";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSigninForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img className="w-screen" src="159932.jpg.png" alt="bimg" />
      </div>

      <form className="bg-black py-12 relative w-3/12 my-36 mx-auto text-white text-center ">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 bg-gray-300"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-300 "
        />

        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 bg-gray-300"
        />
        <button className="py-3 my-10 w-52  bg-red-700 rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSigninForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up"
            : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
