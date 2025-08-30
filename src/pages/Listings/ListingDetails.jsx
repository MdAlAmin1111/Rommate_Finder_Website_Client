import React from 'react';

const ListingDetails = () => {
    const listing = {
        _id: "68b267ee6ddccabf0796dddb",
        title: "Looking for a roommate in Dhaka city.",
        location: "Mirpur",
        rent_amount: "10000",
        room_type: "Single",
        life_style_preference: "Night owl",
        description: "This is description",
        contact: "01777777771",
        availability: "Available",
        email: "mdalamin.iubian@gmail.com",
        name: "Alamin",
    };

    return (
        <div>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-base-300 text-center mb-6">
                    {listing.title}
                </h1>

                <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6 space-y-4">
                    <div className="flex justify-between border-b border-gray-200 py-2">
                        <span className="font-medium text-gray-600">Location:</span>
                        <span className="text-base-300">{listing.location}</span>
                    </div>

                    <div className="flex justify-between border-b border-gray-200 py-2">
                        <span className="font-medium text-gray-600">Rent:</span>
                        <span className="text-base-300">{listing.rent_amount} BDT</span>
                    </div>

                    <div className="flex justify-between border-b border-gray-200 py-2">
                        <span className="font-medium text-gray-600">Room Type:</span>
                        <span className="text-base-300">{listing.room_type}</span>
                    </div>

                    <div className="flex justify-between border-b border-gray-200 py-2">
                        <span className="font-medium text-gray-600">Lifestyle Preference:</span>
                        <span className="text-base-300">{listing.life_style_preference}</span>
                    </div>

                    <div className="flex justify-between border-b border-gray-200 py-2">
                        <span className="font-medium text-gray-600">Description:</span>
                        <span className="text-base-300">{listing.description}</span>
                    </div>

                    <div className="flex justify-between border-b border-gray-200 py-2">
                        <span className="font-medium text-gray-600">Contact:</span>
                        <span className="text-base-300">{listing.contact}</span>
                    </div>

                    <div className="flex justify-between border-b border-gray-200 py-2">
                        <span className="font-medium text-gray-600">Email:</span>
                        <span className="text-base-300">{listing.email}</span>
                    </div>

                    <div className="flex justify-between border-b border-gray-200 py-2">
                        <span className="font-medium text-gray-600">Name:</span>
                        <span className="text-base-300">{listing.name}</span>
                    </div>

                    <div className="flex justify-between border-b border-gray-200 py-2">
                        <span className="font-medium text-gray-600">Availability:</span>
                        <span className="text-base-300">{listing.availability}</span>
                    </div>

                    <div className="text-center mt-4">
                        <button className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-500 transition">
                            Like
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ListingDetails;