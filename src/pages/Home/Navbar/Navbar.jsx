import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MainLogo from '../../../assets/images/logo/job-seeker.png'
import { AuthContext } from '../../../context/AuthProvider';

const Navbar = () => {
    const { logOut } = useContext(AuthContext)

    const signOut = () => {
        logOut()
            .then(() => {
                console.log("yes");
            })
            .catch(e => console.error(e))
    }
    const navItems = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        <button className='btn btn-xs'><Link to='/login'>Login</Link></button>
        <button onClick={signOut} className='btn btn-xs'><Link>Log Out</Link></button>
    </>
    return (
        <nav className='bg-base-200'>
            <div className="navbar">
                <div className="navbar-start block lg:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                </div>
                <div className="navbar-end lg:navbar-start">
                    <img src={MainLogo} className="w-10 lg:w-20" alt="" srcset="" />
                </div>
                <div className="navbar-end hidden lg:block">
                    <ul className="flex justify-evenly">
                        {navItems}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;