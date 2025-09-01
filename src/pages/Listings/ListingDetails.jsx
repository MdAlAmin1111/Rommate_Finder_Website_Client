import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const ListingDetails = () => {

    const listing = useLoaderData();
    const { userInfo } = useContext(AuthContext);

    const [likeCount, setLikeCount] = useState(listing.likeCount || 0);
    const [showContact, setShowContact] = useState(false);

    const handleLike = () => {
        if (userInfo?.email === listing.email) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: 'You can not like your own post!',
            });
            return;
        }
        fetch(`http://localhost:3000/api/listings/like/${listing._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ likeCount: likeCount + 1 }),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setLikeCount(likeCount + 1);
                setShowContact(true);
            })
    }

    return (
        <div>
            <div className="container mx-auto px-4 py-8">
                <p className='my-2 font-bold text-error text-lg'>[ {likeCount} people interested in! ]</p>
                <h1 className="text-3xl font-bold text-primary text-center mb-6">
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
                        <button onClick={handleLike} className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-500 transition">
                            Like
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ListingDetails;