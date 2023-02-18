import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import BDItCompany from "../pages/Company/BDItCompany";
import WordWideCompany from "../pages/Company/WordWideCompany";
import ContactUs from "../pages/ContactUs/ContactUs";
import ExperienceJob from "../pages/Home/ExperienceJob/ExperienceJob";
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
            {
                path: '/experienceJob',
                element: <ExperienceJob></ExperienceJob>
            },
            {
                path: '/bdCompany',
                element: <BDItCompany></BDItCompany>
            },
            {
                path: '/worldWideCompany',
                element: <WordWideCompany></WordWideCompany>
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