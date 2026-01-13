import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const store = useSelector((store) => store);
  const { user } = store;
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); // Unsubscribe onAuthStateChanged Callback when component unmount.
  }, []);

  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between items-center px-10 py-5">
      <img className="w-40 " src={LOGO_URL} alt="logo"></img>
      <div className="flex gap-5">
        {user && (
          <img
            className="w-10 h-10 rounded-md"
            src={user?.photoURL}
            alt="user-icon"
          ></img>
        )}
        <button
          onClick={handleSignOut}
          className="bg-red-500 text-white px-4 py-1 rounded-sm"
        >
          {user ? "Sign out" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Header;
