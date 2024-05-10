import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [isSignupForm, setIsSignUpForm] = useState(false);
    const [email, setEmail] = useState("");

    const toggleForm = () => {
        setIsSignUpForm(true);
    };

    return (
        <div className=" absolute text-center w-full">
            {isSignupForm ? (
                <div className="w-3/12 my-36 mx-auto right-0 left-0 px-10 pb-10 bg-black bg-opacity-75">
                    <form className="grid gap-5">
                        <label className="text-white text-3xl font-bold text-left py-9">
                            Sign up
                        </label>
                        <input
                            type="text"
                            className="px-5 py-4 rounded-lg text-white bg-black bg-opacity-75 border border-solid border-gray-400"
                            placeholder="Full Name"
                        />
                        <input
                            type="email"
                            className="px-5 py-4 rounded-lg text-white bg-black bg-opacity-75 border border-solid border-gray-400"
                            placeholder="Email or mobile number"
                            value={email}
                        />
                        <input
                            type="password"
                            className="px-5 py-4 rounded-lg text-white bg-black bg-opacity-75 border border-solid border-gray-400"
                            placeholder="Add a Password"
                        />
                        <button className="bg-red-600 text-white font-semibold px-5 py-2 rounded-lg">
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
                <div className="mt-[20%] mx-auto right-0 left-0">
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
                                className="w-1/4 px-3 py-5 mr-3 bg-black opacity-70 text-white border border-solid border-gray-200 rounded-lg"
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
            )}
        </div>
    );
};

export default SignUp;
