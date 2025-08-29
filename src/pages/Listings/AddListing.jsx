import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const AddListing = () => {

    const { userInfo } = useContext(AuthContext);

    const handleAddRoommateListing = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const roommateListingData = Object.fromEntries(formData.entries());
        console.log(roommateListingData);
    }

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 border border-gray-300 rounded-xl shadow-sm bg-white">
            <h2 className="text-2xl font-semibold mb-6 text-center text-base-300">
                Add Roommate Listing
            </h2>

            <form onSubmit={handleAddRoommateListing} className="space-y-4 text-base-300">
                {/* Title */}
                <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input
                        name='title'
                        type="text"
                        placeholder="Looking for a roommate in Dhaka City"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="block text-sm font-medium mb-1">Location</label>
                    <input
                        name='location'
                        type="text"
                        placeholder="Enter location"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>

                {/* Rent Amount */}
                <div>
                    <label className="block text-sm font-medium mb-1">Rent Amount</label>
                    <input
                        name='rent_amount'
                        type="number"
                        placeholder="Enter rent amount"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>

                {/* Room Type */}
                <div>
                    <label className="block text-sm font-medium mb-1">Room Type</label>
                    <select name='room_type' className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300">
                        <option>Single</option>
                        <option>Shared</option>
                        <option>Studio</option>
                    </select>
                </div>

                {/* Lifestyle Preferences */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Lifestyle Preferences
                    </label>
                    <input
                        name='life_style_preference'
                        type="text"
                        placeholder="Pets, Smoking, Night Owl..."
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                        name='description'
                        rows="3"
                        placeholder="Write details about your listing..."
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    ></textarea>
                </div>

                {/* Contact Info */}
                <div>
                    <label className="block text-sm font-medium mb-1">Contact Info</label>
                    <input
                        name='contact'
                        type="text"
                        placeholder="Phone / Messenger / WhatsApp"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>

                {/* Availability */}
                <div>
                    <label className="block text-sm font-medium mb-1">Availability</label>
                    <select name='availability' className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300">
                        <option>Available</option>
                        <option>Not Available</option>
                    </select>
                </div>

                {/* User Email */}
                <div>
                    <label className="block text-sm font-medium mb-1">User Email</label>
                    <input
                        name='email'
                        type="email"
                        value={userInfo.email}
                        readOnly
                        className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                    />
                </div>

                {/* User Name */}
                <div>
                    <label className="block text-sm font-medium mb-1">User Name</label>
                    <input
                        name='name'
                        type="text"
                        value={userInfo.displayName}
                        readOnly
                        className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                    />
                </div>

                {/* Add Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-primary text-white font-medium rounded-md hover:bg-secondary transition"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddListing;