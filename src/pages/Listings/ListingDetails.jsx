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
                Swal.fire({
                    title: 'Liked!',
                    text: 'Thanks for liking 💖',
                    icon: 'success',
                    confirmButtonText: 'Close',
                    confirmButtonColor: '#eb671e',
                    timer: 800
                });
            })
    }

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <p className='my-2 font-bold text-error text-lg dark:text-red-400'>[ {likeCount} people interested in! ]</p>
                <h1 className="text-3xl font-bold text-primary dark:text-orange-400 text-center mb-6">
                    {listing.title}
                </h1>

                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 p-6 space-y-4">
                    {[
                        { label: "Location:", value: listing.location },
                        { label: "Rent:", value: `${listing.rent_amount} BDT` },
                        { label: "Room Type:", value: listing.room_type },
                        { label: "Lifestyle Preference:", value: listing.life_style_preference },
                        { label: "Description:", value: listing.description },
                        { label: "Contact:", value: showContact ? listing.contact : '*****' },
                        { label: "Email:", value: listing.email },
                        { label: "Name:", value: listing.name },
                        { label: "Availability:", value: listing.availability },
                    ].map(({ label, value }) => (
                        <div key={label} className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2">
                            <span className="font-medium text-gray-600 dark:text-gray-300">{label}</span>
                            <span className="text-base-300 dark:text-gray-200">{value}</span>
                        </div>
                    ))}

                    <div className="text-center mt-4">
                        <button
                            onClick={handleLike}
                            className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded transition"
                        >
                            Like
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingDetails;
