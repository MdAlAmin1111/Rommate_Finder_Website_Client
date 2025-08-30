
import React from 'react';

const MyListing = () => {
    const listings = [
        {
            id: 1,
            title: "Looking for a roommate in Dhaka city.",
            location: "Mirpur",
            rent: "10,000 BDT",
            roomType: "Single",
        },
        {
            id: 2,
            title: "Shared flat in Banani",
            location: "Banani",
            rent: "12,000 BDT",
            roomType: "Shared",
        },
    ];

    return (
        <div>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6 text-center text-[var(--color-base-300)]">
                    My Listings
                </h1>

                <div className="overflow-x-auto border border-gray-200 rounded-lg shadow">
                    <table className="w-full bg-white">
                        <thead className="bg-[var(--color-base-200)] text-white">
                            <tr>
                                <th className="py-3 px-4 text-left">Title</th>
                                <th className="py-3 px-4 text-left">Location</th>
                                <th className="py-3 px-4 text-left">Rent</th>
                                <th className="py-3 px-4 text-left">Room Type</th>
                                <th className="py-3 px-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listings.map((listing) => (
                                <tr key={listing.id} className="border-b hover:bg-gray-50 transition">
                                    <td className="py-3 px-4 text-[var(--color-base-300)] font-medium">
                                        {listing.title}
                                    </td>
                                    <td className="py-3 px-4 text-base-200">{listing.location}</td>
                                    <td className="py-3 px-4 text-base-200">{listing.rent}</td>
                                    <td className="py-3 px-4 text-base-200">{listing.roomType}</td>
                                    <td className="py-3 px-4 text-center">
                                        <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-2 gap-1">
                                            <button className="px-3 py-1 bg-[var(--color-primary)] text-white rounded hover:bg-[var(--color-secondary)] transition">
                                                Update
                                            </button>
                                            <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition">
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
