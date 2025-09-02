import React from 'react';

const Testimonials = () => {
    const feedbacks = [
        {
            name: 'Tania S.',
            text: 'FindMyRoomie helped me find the perfect roommate in Dhaka within days. Highly recommended!',
        },
        {
            name: 'Rifat K.',
            text: 'Simple, smooth, and trustworthy. The Like feature and contact reveal made connecting easy.',
        },
        {
            name: 'Mitu A.',
            text: 'Loved the dark/light mode and clean design. I found a pet-friendly roommate in my area!',
        },
    ];
    return (
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-15 text-gray-900 dark:text-gray-100">
                    What Our Users Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {feedbacks.map((review, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
                        >
                            <p className="text-gray-800 dark:text-gray-200 italic mb-4">“{review.text}”</p>
                            <h4 className="font-semibold text-orange-600 dark:text-orange-400">— {review.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
