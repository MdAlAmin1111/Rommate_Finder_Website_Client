import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-[750px] shrink-0 border border-[#db621f10] shadow-2xl py-15">
                <div className="card-body space-y-10">
                    <h1 className='text-4xl font-semibold text-center text-gray-800'>Login Your Account</h1>
                    <form onSubmit={''} className="fieldset px-25 space-y-3">
                        {/* email  */}
                        <label className="label font-semibold text-xl text-gray-800">Email Address</label>
                        <input required name='email' type="email" className="input w-full" placeholder="Enter Your Email Address" />
                        {/* password  */}
                        <label className="label font-semibold text-xl text-gray-800">Password</label>
                        <input required name='password' type="password" className="input w-full" placeholder="Enter Your Password" />

                        <div><a className="link link-hover text-gray-600">Forgot password?</a></div>
                        {/* error message  */}

                        {/* {error && <p className="text-error">${error}</p>} */}

                        {/* submit button  */}
                        <button type='submit' className="btn btn-neutral mt-4 bg-gray-800">Login</button>
                    </form>
                    <p className='text-center font-semibold text-gray-600'>Don't Have An Account? <Link to={'/signup'} className='text-[#db621f]'>Signup</Link></p>
                </div>
            </div>
        </div>

    );
};

export default Login;