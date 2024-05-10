import React from "react";
import { Link } from "react-router-dom";

const SignInForm = () => {
    return (
        // <div className="absolute mt-[10%] mx-[36%] text-center px-16 pb-5  bg-black bg-opacity-75">
        // <div className="absolute top-[50%] left-1/2 transform -translate-x-[50%] -translate-y-[50%] px-10 pb-5 bg-black bg-opacity-75">
        <div className="absolute w-3/12 my-36 mx-auto right-0 left-0 px-10 pb-5 bg-black bg-opacity-75">
            <form className="grid gap-5">
                <label className="text-white text-3xl font-bold text-left py-9">Sign In</label>
                <input
                    type="email"
                    className="px-5 py-4 rounded-lg text-white bg-black bg-opacity-75 border border-solid border-gray-400"
                    placeholder="Email or mobile number"
                />
                <input
                    type="password"
                    className="px-5 py-4 rounded-lg text-white bg-black bg-opacity-75 border border-solid border-gray-400"
                    placeholder="Password"
                />
                <button className="bg-red-600 text-white font-semibold px-5 py-2 rounded-lg">
                    Sign In
                </button>
                <h1 className="text-white text-lg">OR</h1>
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
