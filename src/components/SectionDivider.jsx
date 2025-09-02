import React from 'react';
// import { Fade } from 'react-awesome-reveal';

const SectionDivider = ({ text }) => {
    return (
        <div className='bg-[#C85A3C] text-base-100 transition-colors duration-300'>
            <div className='container mx-auto py-20 font-medium'>
                {/* <Fade delay={300} duration={800} triggerOnce={false}> */}
                <h1 className='text-4xl md:text-5xl text-center'>{text}</h1>
                {/* </Fade> */}
            </div>
        </div>
    );
};

export default SectionDivider;
