import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdateMyListing = () => {
    const navigate = useNavigate();

    const { _id, title, location, rent_amount, room_type, life_style_preference, description, contact, availability, email, name } = useLoaderData();

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const toBeUpdatedDate = Object.fromEntries(formData.entries());
        fetch(`https://rommate-finder-website-server.vercel.app/api/listings/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toBeUpdatedDate)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    Swal.fire({
                        title: "Update successful!",
                        icon: "success",
                        draggable: true
                    });
                }
                navigate('/my-listing')
            })

    }

    return (
        <div>
            <div className="max-w-3xl mx-auto my-10 p-6 border border-gray-300 rounded-xl shadow-sm bg-white dark:bg-gray-900 dark:border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-center text-base-300 dark:text-gray-200">
                    Update Roommate Listing
                </h2>

                <form onSubmit={handleUpdate} className="space-y-4 text-base-300 dark:text-gray-300">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Title</label>
                        <input
                            name='title'
                            type="text"
                            defaultValue={title}
                            placeholder="Looking for a roommate in Dhaka City"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-500 dark:text-gray-200"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Location</label>
                        <input
                            name='location'
                            type="text"
                            defaultValue={location}
                            placeholder="Enter location"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-500 dark:text-gray-200"
                        />
                    </div>

                    {/* Rent Amount */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Rent Amount</label>
                        <input
                            name='rent_amount'
                            defaultValue={rent_amount}
                            type="number"
                            placeholder="Enter rent amount"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-500 dark:text-gray-200"
                        />
                    </div>

                    {/* Room Type */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Room Type</label>
                        <select
                            name='room_type'
                            defaultValue={room_type}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-500 dark:text-gray-200"
                        >
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
                            defaultValue={life_style_preference}
                            type="text"
                            placeholder="Pets, Smoking, Night Owl..."
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-500 dark:text-gray-200"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <textarea
                            name='description'
                            defaultValue={description}
                            rows="3"
                            placeholder="Write details about your listing..."
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-500 dark:text-gray-200"
                        ></textarea>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Contact Info</label>
                        <input
                            name='contact'
                            defaultValue={contact}
                            type="text"
                            placeholder="Phone / Messenger / WhatsApp"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-500 dark:text-gray-200"
                        />
                    </div>

                    {/* Availability */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Availability</label>
                        <select
                            name='availability'
                            defaultValue={availability}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-500 dark:text-gray-200"
                        >
                            <option>Available</option>
                            <option>Not Available</option>
                        </select>
                    </div>

                    {/* User Email */}
                    <div>
                        <label className="block text-sm font-medium mb-1">User Email</label>
                        <input
                            name='email'
                            defaultValue={email}
                            type="email"
                            readOnly
                            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                        />
                    </div>

                    {/* User Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">User Name</label>
                        <input
                            name='name'
                            defaultValue={name}
                            type="text"
                            readOnly
                            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                        />
                    </div>

                    {/* Update Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-primary text-white font-medium rounded-md hover:bg-secondary transition dark:bg-orange-600 dark:hover:bg-orange-700"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateMyListing;