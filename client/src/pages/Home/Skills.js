import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';


const Skills = () => {
    const { loading, portfolioData } = useSelector((state) => state.root);
    const { about } = portfolioData;
    const { lottieUrl, description1, description2, skills } = about;
    return (

        <div id='skills' className='h-lvh'>
            <SectionTitle title='Skills' />
            <div className="min-h-screen w-full flex items-center ">
                <div className='flex flex-wrap  gap-10 sm:gap-5'>
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

export default Skills