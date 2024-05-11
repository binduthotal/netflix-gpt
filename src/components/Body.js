import React, { useEffect } from "react";
import Login from "./Login";
import Browser from "./Browser";
import {
    RouterProvider,
    createBrowserRouter,
    useNavigate,
} from "react-router-dom";
import SignInForm from "./SignInForm";
import SignUp from "./SignUp";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
    const dispatch = useDispatch();

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

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
            } else {
                // User is signed out
                dispatch(removeUser());
            }
        });
    }, []);
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
};

export default Body;
