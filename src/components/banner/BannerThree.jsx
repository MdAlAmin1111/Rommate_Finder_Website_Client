import React from 'react';

const BannerThree = () => {
    return (
        <div className="bg-cover bg-center" style={{ backgroundImage: `url('/roombg4.jpg')` }}>
            <div className='container mx-auto flex justify-center py-24 sm:py-33 px-6'>
                <div className="text-white flex flex-col gap-8 items-center">
                    <h1 className="text-4xl sm:text-7xl lg:text-8xl font-bold mb-4">What Our Users Say<span className='text-primary'>?</span></h1>

                    <p className="italic">
                        "I found a perfect roommate within 2 weeks! <br />
                        Highly recommend <span className="font-bold text-primary">FindMyRoomie</span> to anyone looking for a safe and reliable way to connect."
                    </p>
                    <p className="font-semibold">– Sarah K.</p>
                    <button className="w-full bg-primary hover:bg-secondary text-white font-semibold py-5 px-6 rounded transition">JOIN THE COMMUNITY</button>
                </div>
            </div>
        </div>
    );
};

export default BannerThree;