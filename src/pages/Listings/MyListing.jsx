import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyListing = () => {
    const { userInfo } = useContext(AuthContext);
    const [myListingData, setMyListingData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/listings/${userInfo.email}`)
            .then(res => res.json())
            .then(data => {
                setMyListingData(data);
            });
    }, [userInfo]);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/api/listings/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.deletedCount) {
                            const remainingListing = myListingData.filter(data => data._id !== _id);
                            setMyListingData(remainingListing);

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        } else {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Something went wrong!",
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6 text-center text-[var(--color-base-300)] dark:text-gray-200">
                    My Listings
                </h1>

                <div className="overflow-x-auto border border-gray-200 rounded-lg shadow bg-white
                                dark:bg-gray-900 dark:border-gray-700">
                    <table className="w-full">
                        <thead className="bg-[var(--color-base-200)] text-white dark:bg-gray-800">
                            <tr>
                                <th className="py-3 px-4 text-left">Title</th>
                                <th className="py-3 px-4 text-left">Location</th>
                                <th className="py-3 px-4 text-left">Rent</th>
                                <th className="py-3 px-4 text-left">Room Type</th>
                                <th className="py-3 px-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myListingData?.map((listing) => (
                                <tr
                                    key={listing._id}
                                    className="border-b border-gray-200 hover:bg-gray-50 transition
                                               dark:border-gray-700 dark:hover:bg-gray-800"
                                >
                                    <td className="py-3 px-4 text-[var(--color-base-300)] font-medium dark:text-gray-200">
                                        {listing.title}
                                    </td>
                                    <td className="py-3 px-4 text-base-200 dark:text-gray-300">
                                        {listing.location}
                                    </td>
                                    <td className="py-3 px-4 text-base-200 dark:text-gray-300">
                                        ৳ {listing.rent_amount}
                                    </td>
                                    <td className="py-3 px-4 text-base-200 dark:text-gray-300">
                                        {listing.room_type}
                                    </td>
                                    <td className="py-3 px-4 text-center">
                                        <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-2 gap-1">
                                            <Link
                                                to={`/update-my-listing/${listing._id}`}
                                                className="px-3 py-1 bg-[var(--color-primary)] text-white rounded
                                                           hover:bg-[var(--color-secondary)] transition
                                                           dark:bg-orange-600 dark:hover:bg-orange-700"
                                            >
                                                Update
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(listing._id)}
                                                className="px-3 py-1 bg-red-600 text-white rounded
                                                           hover:bg-red-700 transition cursor-pointer"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyListing;
