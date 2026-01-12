import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ce462eb6-4d7f-4c9a-9f61-93cb535a64fd/web/IN-en-20260105-TRIFECTA-perspective_5ec818ea-11f4-4bff-a409-8f36e9f9a1e2_small.jpg"
          alt="background"
        ></img>
      </div>

      <form className="absolute p-12 bg-black/80  w-3/12 my-36 mx-auto left-0 right-0 text-white flex flex-col gap-5 rounded-sm">
        <h1 className="text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="px-4 py-4 border rounded-md bg-transparent"
            type="text"
            placeholder="Full Name"
          ></input>
        )}
        <input
          className="px-4 py-4 border rounded-md bg-transparent"
          type="text"
          placeholder="Email or mobile number"
        ></input>
        <input
          className="px-4 py-4 border rounded-md bg-transparent"
          type="text"
          placeholder="Password"
        ></input>
        <button className="px-8 py-2 bg-red-600 rounded-md font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p>
          {isSignInForm ? "New to Netflix?" : "Already a User?"}
          <Link
            to="/"
            className="font-bold hover:underline"
            onClick={toggleSignUpForm}
          >
            {isSignInForm ? "Sign up now." : "Sign in now."}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
