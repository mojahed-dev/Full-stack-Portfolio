import React from 'react'
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

const About = () => {
    const { loading, portfolioData } = useSelector((state) => state.root);
    const { about } = portfolioData;
    const  { lottieUrl, description1, description2, skills } = about;

    return (
        <div>
            <SectionTitle title='About' />
            <div className='flex w-full items-center gap-10 sm:flex-col'>
                <div className='h-[70vh] w-1/2 sm:w-full'>
                    <dotlottie-player src={lottieUrl  || ''} background="transparent" speed="1" autoplay></dotlottie-player>
                </div>
                <div className="flex flex-col gap-5 w-1/2 sm:w-full">
                    <p className="text-white">{description1 || ''}</p>
                    <p className="text-white">{description2  || ''}</p>
                </div>
            </div>
            <div>
                <p className="text-white text-xl py-5">Here are the technologies I am using: </p>
                <div className="flex flex-wrap gap-10 mt-5 sm:gap-5">
                    {skills.map((skill, index) => (
                        <div key={index} className='border border-tertiary py-3 px-10 sm:py-1 sm:px-2'>
                                <p className='text-tertiary'>{skill}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About