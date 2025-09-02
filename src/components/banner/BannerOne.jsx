import React from 'react';

const BannerOne = () => {
    return (
        <div
            className="bg-cover bg-center relative"
            style={{ backgroundImage: `url('/roombg10.jpg')` }}
        >
            {/* Overlay: lighter in light mode, darker in dark mode */}
            <div className="bg-opacity-60 dark:bg-black/70" />

            <div className="container mx-auto flex justify-center py-27 sm:py-25 px-6">
                <div className="text-white dark:text-gray-100 flex flex-col gap-8 items-center text-center">
                    <h1 className="text-4xl sm:text-7xl lg:text-8xl font-bold mb-4">
                        The Best & Fastest <br />
                        Roommate Finder<span className="text-primary">.</span>
                    </h1>

                    <p>
                        Looking for a roommate, renting out a room, or teaming up to find a new place? <br />
                        <span className="font-bold text-primary">FindMyRoomie</span> helps you find compatible roommates easily with a safe, hassle-free experience. <br />
                        Start your free search today!
                    </p>

                    <button className="w-full bg-primary hover:bg-secondary text-white font-semibold py-5 px-6 rounded transition">
                        FIND ROOMMATES & ROOMS
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BannerOne;
