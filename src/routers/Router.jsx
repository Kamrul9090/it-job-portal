import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ContactUs from "../pages/ContactUs/ContactUs";
import FresherJob from "../pages/Home/FresherJob/FresherJob";
import Home from "../pages/Home/Home";
import Login from "../pages/SignUp/Login";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/fresherJob',
                element: <FresherJob></FresherJob>
            },

        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    }
])