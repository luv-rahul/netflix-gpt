import { Link } from "react-router-dom";
import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  const handleButtonClick = () => {
    /*Validate*/
    const message = checkValidData(
      isSignInForm ? null : name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
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

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black/80  w-3/12 my-36 mx-auto left-0 right-0 text-white flex flex-col gap-5 rounded-sm"
      >
        <h1 className="text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="px-4 py-4 border rounded-md bg-transparent"
            type="text"
            placeholder="Full Name"
          ></input>
        )}
        <input
          ref={email}
          className="px-4 py-4 border rounded-md bg-transparent"
          type="text"
          placeholder="Email ID"
        ></input>
        <input
          ref={password}
          className="px-4 py-4 border rounded-md bg-transparent"
          type="password"
          placeholder="Password"
        ></input>
        <button
          onClick={handleButtonClick}
          className="px-8 py-2 bg-red-600 rounded-md font-bold"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {errorMessage && (
          <p className="text-red-500 font-semibold">{errorMessage}</p>
        )}

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
