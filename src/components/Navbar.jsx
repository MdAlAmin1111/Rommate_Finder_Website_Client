import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const { userInfo, userLogout } = useContext(AuthContext);

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/browse-listing'}>Browse Listing</NavLink></li>
        <li><NavLink to={'/add-to-find-roommate'}>Add to Find Roommate</NavLink></li>
        <li><NavLink to={'/my-listing'}>My Listing</NavLink></li>
    </>

    return (
        <div className='bg-gray-900 dark:bg-gray-900 shadow-sm border-b border-b-gray-700'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <img src='/menu_icon.png' className="h-7 w-7" alt="" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-800 rounded-box z-1 mt-3 w-52 p-2 shadow text-base font-bold text-base-300 dark:text-gray-300">
                            {navLinks}
                        </ul>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-7' src='/happy.png' alt="" />
                        <p
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Need a roommate? You're at the right place!"
                            className="text-3xl font-bold text-base-100  dark:text-gray-100 hidden sm:block"
                        >
                            Find<span className='text-secondary'>My</span>Roomie<span className='text-secondary'>.</span>
                        </p>
                    </div>

                    <ThemeToggle></ThemeToggle>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-base font-semibold text-base-100 dark:text-gray-300 px-1">
                        {navLinks}
                    </ul>
                </div>

                {
                    userInfo
                        ?
                        <div className='navbar-end space-x-4'>
                            <ThemeToggle></ThemeToggle>
                            <div className="dropdown dropdown-end dropdown-hover relative">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
                                        <img src={userInfo.photoURL} alt="User Avatar" />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu p-2 shadow bg-base-300 dark:bg-gray-800 rounded-box w-40 text-center absolute top-10"
                                >
                                    <li>
                                        <span className="font-semibold text-base-100 dark:text-gray-100">{userInfo.displayName}</span>
                                    </li>
                                    <li>
                                        <Link to="/"
                                            onClick={userLogout}
                                            className="btn bg-primary hover:bg-secondary border-none text-white w-full mt-1">
                                            Logout
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        :
                        <div className="navbar-end space-x-4">

                            <Link to={'/login'} className="btn bg-primary hover:bg-secondary border-none text-white">Login</Link>
                            <Link to={'/signup'} className="btn bg-primary hover:bg-secondary border-none text-white">Signup</Link>
                        </div>
                }
            </div>
            <Tooltip id="my-tooltip" style={{ backgroundColor: "#FF9900", color: "#fff", zIndex: 9999 }} />
        </div>
    );
};

export default Navbar;
