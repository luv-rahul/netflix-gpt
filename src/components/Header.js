import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const store = useSelector((store) => store);
  const { user } = store;

  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between items-center px-10">
      <img
        className="w-40 "
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-01-09/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      ></img>
      <div className="flex gap-5">
        {user && (
          <img
            className="w-10 rounded-md"
            src={user.photoURL}
            alt="user-icon"
          ></img>
        )}
        <button
          onClick={handleSignOut}
          className="bg-red-500 text-white px-3 py-1 rounded-md"
        >
          {user ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Header;
