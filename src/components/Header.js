import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const store = useSelector((store) => store);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const { user } = store;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
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
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between items-center px-10 py-3">
      <img className="w-40 " src={LOGO_URL} alt="logo"></img>
      <div className="flex gap-5 items-center">
        {showGptSearch && (
          <select
            className="py-1 px-2 bg-[#221F1F] text-white"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option value={lang.id} key={lang.id}>
                {lang.name}
              </option>
            ))}
          </select>
        )}

        {user && (
          <img
            className="w-10 h-10 rounded-md"
            src={user?.photoURL}
            alt="user-icon"
          ></img>
        )}
        {user && (
          <button
            className="text-white bg-[#221F1F] px-4 py-1 rounded-sm"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
        )}
        <button
          onClick={handleSignOut}
          className="bg-[#B20710] text-white px-4 py-1 rounded-sm"
        >
          {user ? "Sign out" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Header;
