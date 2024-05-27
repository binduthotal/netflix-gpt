import React from "react";
import Login from "./Login";
import Browser from "./Browser";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignInForm from "./SignInForm";
import SignUp from "./SignUp";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
            children: [
                {
                    path: "/",
                    element: <SignUp />,
                },
                {
                    path: "/login",
                    element: <SignInForm />,
                },
            ],
        },
        {
            path: "/browse",
            element: <Browser />,
        },
    ]);

    return (
            <RouterProvider router={appRouter} />
    );
};

export default Body;
