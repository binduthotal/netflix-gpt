import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const SignUp = () => {
    const dispatch = useDispatch();

    const [isSignupForm, setIsSignUpForm] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [email, setEmail] = useState("");

    const fullName = useRef(null);
    // const email = useRef(null);
    const password = useRef(null);

    const toggleForm = () => {
        setIsSignUpForm(true);
    };

    const handleSignUpform = () => {
        // Validate the form data
        const validation = checkValidData(
            fullName.current.value,
            email,
            password.current.value
        );
        setErrorMessage(validation);

        if (validation) return;

        createUserWithEmailAndPassword(auth, email, password.current.value)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: fullName.current.value,
                    photoURL: "https://example.com/jane-q-user/profile.jpg",
                })
                    .then(() => {
                        // Profile updated!
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(
                            addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName,
                            })
                        );
                    })
                    .catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message);
                    });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " " + errorMessage);
                // ..
            });
    };

    return isSignupForm ? (
        <div className="sm:absolute md:absolute w-full sm:w-full md:w-full lg:w-1/3 mx-auto left-0 right-0 md:mt-0 sm:top-16 md:top-14  lg:top-32 text-center px-10 pb-10 bg-black md:bg-black md:bg-opacity-75">
            <form onSubmit={(e) => e.preventDefault()} className="grid gap-5">
                <label className="text-white text-3xl font-bold text-left py-9">
                    Sign up
                </label>
                <input
                    ref={fullName}
                    type="text"
                    className="px-5 py-4 rounded-lg text-white bg-black bg-opacity-75 border border-solid border-gray-400"
                    placeholder="Full Name"
                />
                <input
                    type="email"
                    className="px-5 py-4 rounded-lg text-white bg-black bg-opacity-75 border border-solid border-gray-400"
                    placeholder="Email or mobile number"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    ref={password}
                    type="password"
                    className="px-5 py-4 rounded-lg text-white bg-black bg-opacity-75 border border-solid border-gray-400"
                    placeholder="Add a Password"
                    required
                />
                <p className="text-red-600 m-0 font-semibold text-lg text-left p-0">
                    {errorMessage}
                </p>
                <button
                    className="bg-red-600 text-white font-semibold px-5 py-2 rounded-lg"
                    onClick={handleSignUpform}
                >
                    Sign Up
                </button>
                <div className="text-left px-2 flex items-center">
                    <input type="checkbox" className="size-5 mr-2" />
                    <label className="text-white text-lg">Remember me?</label>
                </div>
                <h1 className="text-white text-left px-2">
                    Already a member?
                    <Link to="/login" className="font-semibold hover:underline">
                        Sign In
                    </Link>
                </h1>
            </form>
        </div>
    ) : (
        <div className="sm:absolute md:absolute mx-auto left-0 right-0 md:mt-0 sm:top-16 md:top-10  lg:top-32 text-center md:bg-transparent sm:bg-transparent md:bg-blackmd:bg-opacity-75 bg-black ">
            <div className=" grid justify-center px-5 md:px-20 py-10">
                <h1 className="font-bold text-2xl md:text-5xl text-white">
                    Unlimited movies, TV shows and more
                </h1>
                <div className="py-2 md:py-7">
                    <h1 className="text-white font-medium text-xl md:text-3xl">
                        Watch anyWhere, cancel anytime
                    </h1>
                </div>
                <div className="pb-5">
                    <h1 className="text-white font-medium text-xl md:text-2xl">
                        Ready to watch? Enter your email to create or restart your
                        membership.
                    </h1>
                    <div className="md:flex sm:flex items-center md:justify-center sm:justify-center py-5">
                        <input
                            type="text"
                            placeholder="Email address"
                            className="w-full sm:w-1/3 md:w-1/2 px-2 py-3 sm:px-2 sm:py-3 md:px-3 md:py-5 mr-3 bg-black opacity-70 text-white border border-solid border-gray-200 rounded-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            className="bg-red-600 rounded-lg text-xl sm:px-2 sm:py-3  md:text-2xl text-white font-semibold px-2 py-3 md:px-5 md:py-4 sm:mt-0 md:mt-0 mt-6"
                            onClick={toggleForm}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
