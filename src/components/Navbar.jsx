import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { userInfo, userLogout } = useContext(AuthContext);

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/browse-listing'}>Browse Listing</NavLink></li>
        <li><NavLink to={'/add-to-find-roommate'}>Add to Find Roommate</NavLink></li>
        <li><NavLink to={'/my-listing'}>My Listing</NavLink></li>
    </>

    // const handleLogout = () 

    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <img src='/menu_icon.png' className="h-6 w-6" alt="" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-base font-bold text-base-300">
                            {navLinks}
                        </ul>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-7' src='/happy.png' alt="" />
                        <p className="text-3xl font-bold text-base-300 hidden sm:block">
                            Find
                            <span className='text-secondary'>My</span>
                            Roomie
                            <span className='text-secondary'>.</span>
                        </p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-base font-semibold text-gray-600 px-1">
                        {navLinks}
                    </ul>
                </div>

                {/* conditional rendering according to user existence */}
                {
                    userInfo
                        ?
                        <div className='navbar-end'>
                            <div className="dropdown dropdown-end dropdown-hover relative">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
                                        <img src={userInfo.photoURL} alt="User Avatar" />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40 text-center absolute top-10"
                                >
                                    <li>
                                        <span className="font-semibold text-base-300">{userInfo.displayName}</span>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={userLogout} className="btn bg-primary hover:bg-secondary border-none text-white w-full mt-1">Logout</Link>
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
        </div>
    );
};

export default Navbar;