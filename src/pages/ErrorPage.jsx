import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center px-4">
            <h1 className="text-9xl font-extrabold text-error dark:text-red-600">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold mt-4 text-warning dark:text-yellow-400">
                Oops! Page Not Found
            </h2>
            <p className="text-base-200 mt-2 max-w-md dark:text-gray-300">
                The page you’re looking for doesn’t exist or may have been moved.
            </p>

            <Link
                to="/"
                className="mt-6 inline-block px-6 py-3 text-white bg-primary hover:bg-secondary rounded-lg shadow-md transition-all duration-200"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;
