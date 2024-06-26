import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebaseConfig";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { clearGptMovieResults, toggleGptSearchView } from "../utils/gptSlice";
import {changeLanguage} from "../utils/langSlice"

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const toggleGpt = useSelector((store) => store.gptSearch.showGptSearch);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unSubscribe when component unmounts
    return () => unSubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
    dispatch(clearGptMovieResults())
  };

  const handleLanguage = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return user === null ? (
    <div className="sm:absolute md:absolute bg-gradient-to-t from black sm:bg-gradient-to-b sm:from-black md:bg-gradient-to-b md:from-black w-full h-fit top-0 left-0 ">
      <div className="flex justify-between mx-10 md:mx-28  items-center">
        <a href="/">
          <img className="w-48 " src={LOGO_URL} alt="logo" />
        </a>
        <div>
          <Link to="/login">
            <button className="bg-red-600 rounded-lg text-white px-3 py-1 font-semibold">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="absolute bg-gradient-to-b from-black w-full h-fit top-0 left-0 border-none ">
      <div className="flex justify-evenly md:justify-between mx-2 my-1 md:mx-16  items-center text-center">
        <div className="">
          <a href="/">
            <img className="w-40" src={LOGO_URL} alt="logo" />
          </a>
        </div>
        <div className="flex items-center">
          {toggleGpt && (
            <select
              className="bg-black bg-opacity-50 border border-solid border-white rounded-lg text-white px-4 py-1 mr-5 cursor-pointer"
              onChange={handleLanguage}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  className="bg-black text-white rounded-lg"
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-800 rounded-lg  px-3 py-1 text-white mr-5 font-semibold"
            onClick={handleGptSearchClick}
          >
            {toggleGpt ? "Home" : "GPT Search"}
          </button>
          {!toggleGpt && (
            <div className="flex items-baseline">
              <img
                src={USER_AVATAR}
                alt="userIcon"
                className="mr-1 rounded-md"
              />
              <p className="text-white font-bold ml-1 mr-9">{user.displayName}</p>
            </div>
          )}
          <div>
            <Link to="/login" className="cursor-pointer">
              <button
                className="bg-red-600 rounded-lg text-white px-3 py-1 font-semibold"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
