import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/Footer/Footer';
import Home from '../pages/Home/Home';
import Navbar from '../pages/Home/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;