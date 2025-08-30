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
                // success alert
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
                // showing error alert
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: errorMessage,
                });
            })
    }

    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then(() => {
                // success alert
                Swal.fire({
                    title: "Login successful!",
                    icon: "success",
                    draggable: true,
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                // showing error alert
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: errorMessage,
                });
            })

    }

    return (
        <div className='min-h-screen flex justify-center items-center mx-2 mt-10'>
            <div className="card bg-base-100 w-full max-w-[750px] shrink-0 shadow-2xl">
                <div className="card-body space-y-10 py-20">
                    <h1 className='text-4xl font-semibold text-center text-base-300'>Login Your Account</h1>
                    <form onSubmit={handleLogin} className="fieldset sm:px-20 space-y-2">
                        {/* email  */}
                        <label className="label font-semibold text-xl text-base-300">Email Address</label>
                        <input required name='email' type="email" className="input w-full" placeholder="Enter Your Email Address" />
                        {/* password  */}
                        <label className="label font-semibold text-xl text-base-300">Password</label>
                        <input required name='password' type="password" className="input w-full" placeholder="Enter Your Password" />

                        <div><a className="link link-hover text-base-200">Forgot password?</a></div>

                        {/* error message  */}
                        {error && <p className="text-error">${error}</p>}

                        {/* submit button  */}
                        <button type='submit' className="btn btn-neutral mt-4 bg-base-300">Login</button>
                    </form>
                    <div className='flex items-center justify-between text-base-300'>
                        <hr className="flex-1 border-gray-400" />
                        <span className='px-2 text-center font-medium'>or</span>
                        <hr className="flex-1 border-gray-400" />
                    </div>

                    <p className='flex items-center justify-center gap-2 text-base-300 font-semibold'><FcGoogle onClick={handleLoginWithGoogle} size={25} className='cursor-pointer' /> <span>Login with Google</span></p>
                    <p className='text-center font-semibold text-base-300'>Don't Have An Account? <Link to={'/signup'} className='text-[#db621f]'>Signup here</Link></p>
                </div>
            </div>
        </div>

    );
};

export default Login;