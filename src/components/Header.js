import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebaseConfig";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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
        navigate("/")
      }
    });

    // unSubscribe when component unmounts 
    return ()=>unSubscribe();
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
  return user === null ? (
    <div className="absolute bg-gradient-to-br from-black w-full h-full top-0 left-0 ">
      <div className="flex justify-between mx-28  items-center">
        <a href="/">
          <img
            className="w-48 "
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
          />
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
    <div className="absolute bg-gradient-to-br from-black w-full top-0 left-0 ">
      <div className="flex justify-between mx-16  items-center">
        <a href="/">
          <img
            className="w-40"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
          />
        </a>
        <div className="flex">
          <img
            src="https://occ-0-2042-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
            alt="userIcon"
            className="mr-2 rounded-md"
          />

          {/* {displayName && ( */}
          <p className="text-white font-bold mr-5">
            Welcome {user.displayName}
          </p>
          {/* )} */}
          <div>
            <Link to="/login">
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
