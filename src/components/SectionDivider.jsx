import React from 'react';

const SectionDivider = ({ text }) => {
    return (
        <div className='bg-[#C85A3C] text-base-100 transition-colors duration-300'>
            <div className='container mx-auto py-20 font-medium'>
                <h1 className='text-4xl text-center'>{text}</h1>
            </div>
        </div>
    );
};

export default SectionDivider;
