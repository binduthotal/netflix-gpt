import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { set } from "firebase/database";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const SignUp = () => {
    const navigate = useNavigate();
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
                        navigate("/browse");
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
        <div className=" absolute text-center lg:mt-36 mx-auto right-0 left-0 px-10 pb-10 bg-black bg-opacity-75 sm:mt-16 sm:mb-[50px] sm:py-12 sm:px-16 sm:max-w-[450px]">
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
        <div className="absolute mx-auto left-0 right-0 lg:top-[30%] sm:top-[10%]">
            <div className=" grid justify-center px-20 py-10">
                <h1 className="font-bold text-5xl text-white">
                    Unlimited movies, TV shows and more
                </h1>
                <div className="py-7">
                    <h1 className="text-white font-medium text-3xl">
                        Watch anyWhere, cancel anytime
                    </h1>
                </div>
                <div className="pb-5">
                    <h1 className="text-white font-medium text-2xl">
                        Ready to watch? Enter your email to create or restart your
                        membership.
                    </h1>
                    <div className="flex items-center justify-center py-5">
                        <input
                            type="text"
                            placeholder="Email address"
                            className="w-1/2 px-3 py-5 mr-3 bg-black opacity-70 text-white border border-solid border-gray-200 rounded-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            className="bg-red-600 rounded-lg text-2xl text-white font-semibold px-5 py-4"
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
