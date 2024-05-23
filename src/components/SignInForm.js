import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";

const SignInForm = () => {
    const email = useRef(null);
    const password = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
            })
            .catch((error) => {
                console.log(auth.user);
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
                
            });
    };
    return (
        <div className="absolute lg:mt-36 mx-auto right-0 left-0 px-14 pb-5 bg-black bg-opacity-75 sm:mt-16 sm:mb-[50px] sm:py-12 sm:px-16 max-w-[450px] ">
            <form className="grid gap-5" onSubmit={(e) => e.preventDefault()}>
                <label className="text-white text-3xl font-bold text-left py-9">
                    Sign In
                </label>
                <input
                    ref={email}
                    type="email"
                    className="px-5 py-4 rounded-lg text-white bg-black bg-opacity-75 border border-solid border-gray-400"
                    placeholder="Email"
                />
                <input
                    ref={password}
                    type="password"
                    className="px-5 py-4 rounded-lg text-white bg-black bg-opacity-75 border border-solid border-gray-400"
                    placeholder="Password"
                />
                <p className="text-red-600 m-0 font-semibold text-lg text-left p-0 w-full">
                    {errorMessage}
                </p>
                <button
                    className="bg-red-600 text-white font-semibold px-5 py-2 rounded-lg"
                    onClick={handleSignIn}
                >
                    Sign In
                </button>
                <h1 className="text-white text-lg text-center">OR</h1>
                <button className="bg-gray-600 bg-opacity-65 text-white font-semibold px-5 py-2 rounded-lg">
                    Use a sign-in code
                </button>
                <h1 className="text-white text-lg hover:underline">Forgot password?</h1>
                <div className="text-left px-2 flex items-center">
                    <input type="checkbox" className="size-5 mr-2" />
                    <label className="text-white text-lg">Remember me?</label>
                </div>
                <h1 className="text-white text-left px-2">
                    New to Netflix?{" "}
                    <Link to="/" className="font-semibold hover:underline">
                        Sign up now.
                    </Link>
                </h1>
            </form>
        </div>
    );
};

export default SignInForm;
