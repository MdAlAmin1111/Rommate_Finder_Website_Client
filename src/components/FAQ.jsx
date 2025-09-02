import React from 'react';

const FAQ = () => {
    const faqs = [
        {
            question: 'Is this platform free to use?',
            answer: 'Yes! Creating an account and browsing roommate listings is completely free.',
        },
        {
            question: 'Can I contact users directly?',
            answer: 'You can view contact info after clicking the like button on a profile (except your own).',
        },
        {
            question: 'How do I update or delete my listings?',
            answer: 'Go to "My Listings" (only visible when logged in), and you’ll find options to update or delete.',
        },
        {
            question: 'Can I like a post multiple times?',
            answer: 'Yes, but you cannot like your own post. Each like reveals the contact number.',
        },
        {
            question: 'What kind of information do I need to add a listing?',
            answer: 'You’ll need to provide a title, location, rent amount, room type, lifestyle preferences, contact info, and availability.',
        },
        {
            question: 'What happens when I click "See More" on a listing?',
            answer: 'You’ll be redirected to a detailed page showing full roommate post info and the Like button.',
        },
        {
            question: 'Are there any password requirements during registration?',
            answer: 'Yes. Your password must include at least 6 characters, one uppercase, and one lowercase letter.',
        },
        {
            question: 'Will reloading a private route log me out?',
            answer: 'No. Reloading private routes will not redirect you to login if you are already authenticated.',
        },
    ];

    return (
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-15 text-gray-800 dark:text-gray-100">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            tabIndex={0}
                            className="collapse collapse-arrow border border-gray-300 dark:border-gray-700 bg-base-100 dark:bg-gray-800 rounded-box"
                        >
                            <div className="collapse-title text-lg font-medium text-gray-900 dark:text-gray-100">
                                {faq.question}
                            </div>
                            <div className="collapse-content text-gray-700 dark:text-gray-300">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
