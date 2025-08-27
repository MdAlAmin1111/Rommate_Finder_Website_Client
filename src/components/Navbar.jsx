import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/browse-listing'}>Browse Listing</NavLink></li>
        <li><NavLink to={'/add-to-find-roommate'}>Add to Find Roommate</NavLink></li>
        <li><NavLink to={'/my-listing'}>My Listing</NavLink></li>
    </>
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
                <div className="navbar-end space-x-2">
                    <Link to={'/login'} className="btn bg-primary hover:bg-secondary border-none text-white">Login</Link>
                    <Link to={'/signup'} className="btn bg-primary hover:bg-secondary border-none text-white">Signup</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;