import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthContext';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const Signup = () => {
    const [error, setError] = useState('');
    const { createUser, userInfo, setUserInfo } = useContext(AuthContext);

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
                // html: '<p style="color:#f87171;">Password must contain at least 1 uppercase, 1 lowercase, and be 6+ characters long.</p>',
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
                    })
                    .catch(() => {

                    })

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
    console.log(userInfo);

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-[750px] shrink-0 border border-[#db621f10] shadow-2xl py-8">
                <div className="card-body space-y-5">
                    <h1 className='text-4xl font-semibold text-center text-base-300'>Sign Up Your Account</h1>
                    <form onSubmit={handleSignup} className="fieldset sm:px-20 space-y-1">

                        {/* name  */}
                        <label className="label font-semibold text-xl text-base-300">Name</label>
                        <input required name='name' type="text" className="input w-full" placeholder="Enter Your Name" />

                        {/* email  */}
                        <label className="label font-semibold text-xl text-base-300">Email Address</label>
                        <input required name='email' type="email" className="input w-full" placeholder="Enter Your Email Address" />

                        {/* photo url  */}
                        <label className="label font-semibold text-xl text-base-300">Photo Url</label>
                        <input required name='photo_url' type="text" className="input w-full" placeholder="Enter Your Photo url" />

                        {/* password  */}
                        <label className="label font-semibold text-xl text-base-300">Password</label>
                        <input required name='password' type="password" className="input w-full" placeholder="Enter Your Password" />

                        <div><a className="link link-hover text-gray-600">Forgot password?</a></div>

                        {/* error message  */}
                        {error && <p className="text-error">${error}</p>}

                        {/* submit button  */}
                        <button type='submit' className="btn btn-neutral mt-4 bg-base-300">Sign up</button>
                    </form>

                    <div className='flex items-center justify-between text-base-300'>
                        <hr className="flex-1 border-gray-400" />
                        <span className='px-2 text-center font-medium'>or</span>
                        <hr className="flex-1 border-gray-400" />
                    </div>


                    <p className='flex items-center justify-center gap-2 text-gray-600 font-semibold'><FcGoogle size={25} /> <span>Login with Google</span></p>

                    <p className='text-center font-semibold text-gray-600'>Already Have An Account? <Link to={'/login'} className='text-[#db621f]'>Login here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;