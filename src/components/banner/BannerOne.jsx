import React from 'react';

const BannerOne = () => {
    return (
        <div className="bg-cover bg-center" style={{ backgroundImage: `url('/roombg10.jpg')` }}>
            <div className='container mx-auto flex justify-center py-25 px-6'>
                <div className="text-white flex flex-col gap-8 items-center">
                    <h1 className="text-4xl sm:text-7xl lg:text-8xl font-bold mb-4">The Best & Fastest <br /> Roommate Finder<span className='text-primary'>.</span></h1>

                    <p className='text-center' >Looking for a roommate, renting out a room, or teaming up to find a new place? <br /> <span className="font-bold text-primary">FindMyRoomie</span> helps you find compatible roommates easily with a safe, hassle-free experience. <br /> Start your free search today!</p>

                    <button className="w-full bg-primary hover:bg-secondary text-white font-semibold py-5 px-6 rounded transition">FIND ROOMMATES & ROOMS</button>
                </div>
            </div>
        </div>
    );
};

export default BannerOne;