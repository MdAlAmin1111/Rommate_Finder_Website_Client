import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-[750px] shrink-0 border border-[#db621f10] shadow-2xl">
                <div className="card-body space-y-10 py-20">
                    <h1 className='text-4xl font-semibold text-center text-base-300'>Login Your Account</h1>
                    <form  className="fieldset sm:px-20 space-y-2">
                        {/* email  */}
                        <label className="label font-semibold text-xl text-base-300">Email Address</label>
                        <input required name='email' type="email" className="input w-full" placeholder="Enter Your Email Address" />
                        {/* password  */}
                        <label className="label font-semibold text-xl text-base-300">Password</label>
                        <input required name='password' type="password" className="input w-full" placeholder="Enter Your Password" />

                        <div><a className="link link-hover text-gray-600">Forgot password?</a></div>
                        {/* error message  */}

                        {/* {error && <p className="text-error">${error}</p>} */}

                        {/* submit button  */}
                        <button type='submit' className="btn btn-neutral mt-4 bg-base-300">Login</button>
                    </form>
                    <div className='flex items-center justify-between text-base-300'>
                        <hr className="flex-1 border-gray-400" />
                        <span className='px-2 text-center font-medium'>or</span>
                        <hr className="flex-1 border-gray-400" />
                    </div>

                    <p className='flex items-center justify-center gap-2 text-base-300 font-semibold'><FcGoogle size={25} /> <span>Login with Google</span></p>
                    <p className='text-center font-semibold text-base-300'>Don't Have An Account? <Link to={'/signup'} className='text-[#db621f]'>Signup here</Link></p>
                </div>
            </div>
        </div>

    );
};

export default Login;