import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
    const [error, setError] = useState('');
    const { loginUser, loginWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');

        loginUser(email, password)
            .then(() => {
                Swal.fire({
                    title: "Login successful!",
                    icon: "success",
                    draggable: true,
                });
                navigate(location.state ? location.state : '/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: errorMessage,
                });
            });
    };

    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then(() => {
                Swal.fire({
                    title: "Login successful!",
                    icon: "success",
                    draggable: true,
                });
                navigate(location.state ? location.state : '/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: errorMessage,
                });
            });
    };

    return (
        <div className="min-h-screen flex justify-center items-center mx-2 mt-10">
            <div className="card bg-base-100 w-full max-w-[750px] shrink-0 shadow-2xl transition-colors duration-300 dark:bg-gray-900">
                <div className="card-body space-y-10 py-20">
                    <h1 className="text-4xl font-semibold text-center text-base-300 dark:text-gray-200">
                        Login Your Account
                    </h1>
                    <form onSubmit={handleLogin} className="fieldset sm:px-20 space-y-2">
                        {/* Email */}
                        <label className="label font-semibold text-xl text-base-300 dark:text-gray-200">
                            Email Address
                        </label>
                        <input
                            required
                            name="email"
                            type="email"
                            className="input w-full dark:bg-gray-800 dark:text-gray-200"
                            placeholder="Enter Your Email Address"
                        />
                        {/* Password */}
                        <label className="label font-semibold text-xl text-base-300 dark:text-gray-200">
                            Password
                        </label>
                        <input
                            required
                            name="password"
                            type="password"
                            className="input w-full dark:bg-gray-800 dark:text-gray-200"
                            placeholder="Enter Your Password"
                        />

                        <div>
                            <a className="link link-hover text-base-200 dark:text-gray-400 cursor-pointer">
                                Forgot password?
                            </a>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <p className="text-error">{error}</p>
                        )}

                        {/* Submit Button */}
                        <button type="submit" className="btn btn-neutral mt-4 bg-base-300 dark:bg-orange-600 dark:hover:bg-orange-700 transition">
                            Login
                        </button>
                    </form>

                    <div className="flex items-center justify-between text-base-300 dark:text-gray-400">
                        <hr className="flex-1 border-gray-400" />
                        <span className="px-2 text-center font-medium">or</span>
                        <hr className="flex-1 border-gray-400" />
                    </div>

                    <p className="flex items-center justify-center gap-2 text-base-300 font-semibold dark:text-gray-200 cursor-pointer">
                        <FcGoogle onClick={handleLoginWithGoogle} size={35} />
                        <span>Login with Google</span>
                    </p>
                    <p className="text-center font-semibold text-base-300 dark:text-gray-300">
                        Don't Have An Account?{' '}
                        <Link to={'/signup'} className="text-[#db621f]">
                            Signup here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;