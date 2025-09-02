import React from 'react';

const Footer = () => {
    return (
        <div className="bg-base-300 dark:bg-gray-900 text-gray-200 dark:text-gray-300 py-8 border-t border-gray-300 dark:border-gray-700">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Contact Details */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                    <p>Email: support@findmyroomie.com</p>
                    <p>Phone: +880 1759-572081</p>
                    <p>Address: Dhaka, Bangladesh</p>
                </div>

                {/* Terms & Conditions */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Legal</h3>
                    <a href="/terms" className="hover:text-primary dark:hover:text-secondary transition-colors">
                        Terms & Conditions
                    </a>
                </div>

                {/* Social Media Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <div className="flex gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">🌐 FB</a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦 Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">📷 Insta</a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">💼 LinkedIn</a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="text-center text-base-200 dark:text-gray-500 mt-6 border-t border-gray-200 dark:border-gray-600 pt-4">
                © {new Date().getFullYear()} FindMyRoomie | All Rights Reserved
            </div>
        </div>
    );
};

export default Footer;
