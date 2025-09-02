import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const AddListing = () => {
    const { userInfo } = useContext(AuthContext);

    const handleAddRoommateListing = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const userData = Object.fromEntries(formData.entries());

        fetch('http://localhost:3000/api/listings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then((res) => res.json())
            .then(() => {
                Swal.fire({
                    title: "Your roommate listing has been posted.",
                    icon: "success",
                    draggable: true
                });
                e.target.reset();
            })
    }

    return (
        <div className='bg-white dark:bg-gray-900 py-10 min-h-screen'>
            <div className="max-w-3xl mx-auto p-6 border border-gray-300 rounded-xl shadow-sm bg-white
                            dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                            dark:border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700
                               dark:text-gray-200 tracking-wide drop-shadow-sm">
                    Add Roommate Listing
                </h2>

                <form onSubmit={handleAddRoommateListing} className="space-y-4 text-gray-700 dark:text-gray-300">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium mb-1 dark:text-gray-200">Title</label>
                        <input
                            name='title'
                            type="text"
                            placeholder="Looking for a roommate in Dhaka City"
                            className="w-full p-2 border border-gray-300 rounded-md
                                       focus:outline-none focus:ring focus:ring-blue-300
                                       dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-500 dark:focus:ring-orange-600 dark:text-gray-300"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-sm font-medium mb-1 dark:text-gray-200">Location</label>
                        <input
                            name='location'
                            type="text"
                            placeholder="Enter location"
                            className="w-full p-2 border border-gray-300 rounded-md
                                       focus:outline-none focus:ring focus:ring-blue-300
                                       dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-500 dark:focus:ring-orange-600 dark:text-gray-300"
                        />
                    </div>

                    {/* Rent Amount */}
                    <div>
                        <label className="block text-sm font-medium mb-1 dark:text-gray-200">Rent Amount</label>
                        <input
                            name='rent_amount'
                            type="number"
                            placeholder="Enter rent amount"
                            className="w-full p-2 border border-gray-300 rounded-md
                                       focus:outline-none focus:ring focus:ring-blue-300
                                       dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-500 dark:focus:ring-orange-600 dark:text-gray-300"
                        />
                    </div>

                    {/* Room Type */}
                    <div>
                        <label className="block text-sm font-medium mb-1 dark:text-gray-200">Room Type</label>
                        <select
                            name='room_type'
                            className="w-full p-2 border border-gray-300 rounded-md
                                       focus:outline-none focus:ring focus:ring-blue-300
                                       dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 dark:focus:ring-orange-600"
                        >
                            <option>Single</option>
                            <option>Shared</option>
                            <option>Studio</option>
                        </select>
                    </div>

                    {/* Lifestyle Preferences */}
                    <div>
                        <label className="block text-sm font-medium mb-1 dark:text-gray-200">
                            Lifestyle Preferences
                        </label>
                        <input
                            name='life_style_preference'
                            type="text"
                            placeholder="Pets, Smoking, Night Owl..."
                            className="w-full p-2 border border-gray-300 rounded-md
                                       focus:outline-none focus:ring focus:ring-blue-300
                                       dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-500 dark:focus:ring-orange-600 dark:text-gray-300"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium mb-1 dark:text-gray-200">Description</label>
                        <textarea
                            name='description'
                            rows="3"
                            placeholder="Write details about your listing..."
                            className="w-full p-2 border border-gray-300 rounded-md
                                       focus:outline-none focus:ring focus:ring-blue-300
                                       dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-500 dark:focus:ring-orange-600 dark:text-gray-300"
                        ></textarea>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <label className="block text-sm font-medium mb-1 dark:text-gray-200">Contact Info</label>
                        <input
                            name='contact'
                            type="text"
                            placeholder="Phone / Messenger / WhatsApp"
                            className="w-full p-2 border border-gray-300 rounded-md
                                       focus:outline-none focus:ring focus:ring-blue-300
                                       dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-500 dark:focus:ring-orange-600 dark:text-gray-300"
                        />
                    </div>

                    {/* Availability */}
                    <div>
                        <label className="block text-sm font-medium mb-1 dark:text-gray-200">Availability</label>
                        <select
                            name='availability'
                            className="w-full p-2 border border-gray-300 rounded-md
                                       focus:outline-none focus:ring focus:ring-blue-300
                                       dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 dark:focus:ring-orange-600"
                        >
                            <option>Available</option>
                            <option>Not Available</option>
                        </select>
                    </div>

                    {/* User Email */}
                    <div>
                        <label className="block text-sm font-medium mb-1 dark:text-gray-200">User Email</label>
                        <input
                            name='email'
                            type="email"
                            value={userInfo.email}
                            readOnly
                            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100
                                       dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 cursor-not-allowed"
                        />
                    </div>

                    {/* User Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1 dark:text-gray-200">User Name</label>
                        <input
                            name='name'
                            type="text"
                            value={userInfo.displayName}
                            readOnly
                            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100
                                       dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 cursor-not-allowed"
                        />
                    </div>

                    {/* Add Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-primary text-white font-medium rounded-md hover:bg-secondary transition
                                       dark:bg-orange-600 dark:hover:bg-orange-700"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddListing;
