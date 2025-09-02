import React from 'react';
import { Fade } from 'react-awesome-reveal';

const SectionDivider = ({ text }) => {
    return (
        <div className="bg-[#C85A3C] dark:bg-[#9E4B33] text-base-100 transition-colors duration-300">
            <div className="container mx-auto py-10 sm:py-20 font-medium">
                <Fade delay={300} duration={800} direction="right" triggerOnce={false}>
                    <h1 className="text-4xl md:text-5xl text-center dark:text-gray-100">
                        {text}
                    </h1>
                </Fade>
            </div>
        </div>
    );
};

export default SectionDivider;
