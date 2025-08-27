import React from 'react';

const BannerTwo = () => {
    return (
        <div className="bg-cover bg-center" style={{ backgroundImage: `url('/roombg7.jpg')` }}>
            <div className='container mx-auto flex justify-center py-26 px-6'>
                <div className="text-white flex flex-col gap-9 items-center">
                    <h1 className="text-4xl sm:text-7xl lg:text-8xl font-bold mb-4">How It Works<span className='text-primary'>?</span></h1>

                    <div className='text-center space-y-2 text-lg sm:text-2xl' >
                        <p><span className="font-bold text-primary">FindMyRoomie</span> makes roommate searching simple:</p>
                        <p>1. Create your profile </p>
                        <p>2. Browse available rooms & roommates</p>
                        <p>3. Connect & chat securely</p>
                    </div>

                    <button className="w-full bg-primary hover:bg-secondary text-white font-semibold py-5 px-6 rounded transition">START FREE SEARCH</button>
                </div>
            </div>
        </div>
    );
};

export default BannerTwo;