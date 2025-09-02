import React from 'react';
import { Link, useLoaderData } from 'react-router';

const BrowseListing = () => {
    const listings = useLoaderData();

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4 py-10">
                <h2 className="text-2xl font-bold mb-6 text-[var(--color-base-300)] dark:text-gray-100">
                    Browse Listings
                </h2>

                <div className="overflow-x-auto shadow rounded-lg border border-gray-200 dark:border-gray-700">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-[var(--color-base-200)] text-white dark:bg-gray-700">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Title</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Location</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Rent</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Room Type</th>
                                <th className="px-4 py-3"></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                            {listings.map((listing) => (
                                <tr
                                    key={listing._id}
                                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                                >
                                    <td className="px-4 py-3 font-medium">{listing?.title}</td>
                                    <td className="px-4 py-3">{listing?.location}</td>
                                    <td className="px-4 py-3">৳ {listing?.rent_amount}</td>
                                    <td className="px-4 py-3">{listing?.room_type}</td>
                                    <td className="px-4 py-3">
                                        <Link
                                            to={`/listing-details/${listing._id}`}
                                            className="inline-block px-4 py-1 rounded-md bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] transition"
                                        >
                                            See More
                                        </Link>
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

export default BrowseListing;
