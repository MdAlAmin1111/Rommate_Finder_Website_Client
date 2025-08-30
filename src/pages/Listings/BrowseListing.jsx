import React from 'react';
import { Link, useLoaderData } from 'react-router';

const BrowseListing = () => {

    const listings = useLoaderData();
    // title, location, rent_amount, room_type 

    return (
        <div>
            <div className="container mx-auto px-4 py-10">
                <h2 className="text-2xl font-bold mb-6 text-[var(--color-base-300)]">
                    Browse Listings
                </h2>

                <div className="overflow-x-auto shadow rounded-lg">
                    <table className="table w-full">
                        <thead className="bg-[var(--color-base-200)] text-white">
                            <tr>
                                <th>Title</th>
                                <th>Location</th>
                                <th>Rent</th>
                                <th>Room Type</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listings.map((listing => {
                                    return <tr className="hover:bg-gray-50">
                                        <td className="text-[var(--color-base-300)] font-medium">
                                            {listing?.title}
                                        </td>
                                        <td className="text-base-200">{listing?.location}</td>
                                        <td className="text-base-200">৳ {listing?.rent_amount}</td>
                                        <td className="text-base-200">{listing?.room_type}</td>
                                        <td>
                                            <Link to={'/listing-details'} className="px-4 py-1 rounded-md bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] transition">
                                                See More
                                            </Link>
                                        </td>
                                    </tr>

                                }))
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BrowseListing;