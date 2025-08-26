import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Signup = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-[750px] shrink-0 border border-[#db621f10] shadow-2xl py-10">
                <div className="card-body space-y-5">
                    <h1 className='text-4xl font-semibold text-center text-gray-800'>Sign Up Your Account</h1>
                    <form onSubmit={''} className="fieldset sm:px-20 space-y-1">

                        {/* name  */}
                        <label className="label font-semibold text-xl text-gray-800">Name</label>
                        <input required name='name' type="text" className="input w-full" placeholder="Enter Your Name" />

                        {/* email  */}
                        <label className="label font-semibold text-xl text-gray-800">Email Address</label>
                        <input required name='email' type="email" className="input w-full" placeholder="Enter Your Email Address" />

                        {/* photo url  */}
                        <label className="label font-semibold text-xl text-gray-800">Photo Url</label>
                        <input required name='photo_url' type="text" className="input w-full" placeholder="Enter Your Photo url" />

                        {/* password  */}
                        <label className="label font-semibold text-xl text-gray-800">Password</label>
                        <input required name='password' type="password" className="input w-full" placeholder="Enter Your Password" />

                        <div><a className="link link-hover text-gray-600">Forgot password?</a></div>
                        {/* error message  */}

                        {/* {error && <p className="text-error">${error}</p>} */}

                        {/* submit button  */}
                        <button type='submit' className="btn btn-neutral mt-4 bg-gray-800">Sign up</button>
                    </form>

                    <div className='flex items-center justify-between text-gray-800'>
                        <p ><hr /></p>
                        <p className='text-center font-medium'>or</p>
                        <p><hr /></p>
                    </div>

                    <p className='flex items-center justify-center gap-2 text-gray-600 font-semibold'><FcGoogle size={25} /> <span>Login with Google</span></p>

                    <p className='text-center font-semibold text-gray-600'>Already Have An Account? <Link to={'/login'} className='text-[#db621f]'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;