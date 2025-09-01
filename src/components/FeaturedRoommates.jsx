import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Loader from './Loader';


const FeaturedRoommates = () => {
    const [roommates, setRoommates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch('http://localhost:3000/api/featured-roommates')
            .then(res => res.json())
            .then(data => {
                setRoommates(data);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return (
            <Loader></Loader>
        );
    }

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                    Featured Roommates
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {roommates.map((roommate) => (
                        <div
                            key={roommate._id}
                            className="card bg-base-100 shadow-md border border-gray-200"
                        >
                            <div className="card-body">
                                <h2 className="card-title text-orange-600">{roommate.title}</h2>
                                <p><span className="font-semibold">Location:</span> {roommate.location}</p>
                                <p><span className="font-semibold">Rent:</span> ৳{roommate.rent_amount}</p>
                                <p><span className="font-semibold">Room Type:</span> {roommate.room_type}</p>
                                <div className="card-actions justify-end mt-4">
                                    <Link to={`/listing-details/${roommate._id}`}>
                                        <button className="btn btn-sm btn-outline btn-primary">See More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedRoommates;
