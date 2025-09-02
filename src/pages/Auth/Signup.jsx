import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthContext';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const Signup = () => {
    const [error, setError] = useState('');
    const { createUser, setUserInfo, loginWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        setError('');
        const form = e.target;
        const formData = new FormData(form);

        const name = formData.get('name');
        const email = formData.get('email');
        const photo_url = formData.get('photo_url');
        const password = formData.get('password');

        // password validation
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError("Password must contain at least 1 uppercase, 1 lowercase, and be 6+ characters long.");

            // showing error alert
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must contain at least 1 uppercase, 1 lowercase, and be 6+ characters long.",
            });
            return;
        }

        // create user  with email and password
        createUser(email, password)
            .then(() => {
                // success alert
                Swal.fire({
                    title: "Sign up successful!",
                    icon: "success",
                    draggable: true,
                });

                // update signed up user profile
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo_url
                })
                    .then(() => {
                        // 👇 manually context update
                        setUserInfo({
                            ...auth.currentUser,
                            displayName: name,
                            photoURL: photo_url
                        });
                        navigate("/");
                    })
                    .catch(() => { })

            })
            .catch((firebaseError) => {
                const errorMessage = firebaseError.message;
                setError(errorMessage);

                // showing error alert
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: errorMessage,
                });
            })

        // form.reset();
    }
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
        <div className='min-h-screen flex justify-center items-center mx-2 mt-10'>
            <div className="card bg-base-100 dark:bg-gray-900 w-full max-w-[750px] shrink-0 border border-[#db621f10] shadow-2xl py-8">
                <div className="card-body space-y-5">
                    <h1 className='text-4xl font-semibold text-center text-base-300 dark:text-gray-200'>Sign Up Your Account</h1>
                    <form onSubmit={handleSignup} className="fieldset sm:px-20 space-y-1">

                        {/* name  */}
                        <label className="label font-semibold text-xl text-base-300 dark:text-gray-200">Name</label>
                        <input required name='name' type="text" className="input w-full dark:bg-gray-800 dark:text-gray-200" placeholder="Enter Your Name" />

                        {/* email  */}
                        <label className="label font-semibold text-xl text-base-300 dark:text-gray-200">Email Address</label>
                        <input required name='email' type="email" className="input w-full dark:bg-gray-800 dark:text-gray-200" placeholder="Enter Your Email Address" />

                        {/* photo url  */}
                        <label className="label font-semibold text-xl text-base-300 dark:text-gray-200">Photo Url</label>
                        <input required name='photo_url' type="text" className="input w-full dark:bg-gray-800 dark:text-gray-200" placeholder="Enter Your Photo url" />

                        {/* password  */}
                        <label className="label font-semibold text-xl text-base-300 dark:text-gray-200">Password</label>
                        <input required name='password' type="password" className="input w-full dark:bg-gray-800 dark:text-gray-200" placeholder="Enter Your Password" />

                        <div>
                            <a className="link link-hover text-base-200 dark:text-gray-400 cursor-pointer">Forgot password?</a>
                        </div>

                        {/* error message  */}
                        {error && <p className="text-error">{error}</p>}

                        {/* submit button  */}
                        <button type='submit' className="btn btn-neutral mt-4 bg-base-300 dark:bg-orange-600 dark:hover:bg-orange-700 transition">Sign up</button>
                    </form>

                    <div className='flex items-center justify-between text-base-300 dark:text-gray-400'>
                        <hr className="flex-1 border-gray-400" />
                        <span className='px-2 text-center font-medium'>or</span>
                        <hr className="flex-1 border-gray-400" />
                    </div>

                    <p className='flex items-center justify-center gap-2 text-base-200 dark:text-gray-200 font-semibold'>
                        <FcGoogle className='cursor-pointer' onClick={handleLoginWithGoogle} size={35} />
                        <span>Login with Google</span>
                    </p>

                    <p className='text-center font-semibold text-base-200 dark:text-gray-300'>
                        Already Have An Account? <Link to={'/login'} className='text-[#db621f]'>Login here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
