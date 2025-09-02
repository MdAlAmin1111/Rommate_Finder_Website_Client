import React from 'react';

const HowItWorks = () => {
    const steps = [
        {
            title: 'Create an Account',
            description: 'Sign up and set up your profile with preferences like location, budget, and lifestyle.',
        },
        {
            title: 'Browse Listings',
            description: 'Explore available roommate posts and filter by your ideal living conditions.',
        },
        {
            title: 'Connect & Like',
            description: 'Like profiles you’re interested in and get contact info to start chatting.',
        },
    ];
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-15 text-gray-900">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300"
                        >
                            <div className="text-4xl font-extrabold text-orange-600 mb-4">{index + 1}</div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                            <p className="text-gray-700">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
