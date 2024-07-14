import React from 'react'
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

const Experiences = () => {
    const [selecteditemIndex,setSelectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);
    const { experience } = portfolioData;

  return (
    <div>
        <SectionTitle title='Experience' />
        <div className="flex py-10 gap-20 sm:flex-col">
            <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                {experience.map((exp, index) => (
                    <div onClick={() => {setSelectedItemIndex(index)}} className='cursor-pointer'>
                        <h1 className={`text-xl px-5 ${
                            selecteditemIndex === index 
                            ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 sm:w-full" 
                            : "text-white"}`}
                        >
                            {exp.period  || ''}
                        </h1>
                    </div>
                ))}
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className="text-secondary text-2xl">{experience[selecteditemIndex].title  || ''}</h1>
                <h1 className="text-tertiary text-xl">{experience[selecteditemIndex].company  || ''}</h1>
                <p className='text-white'>{experience[selecteditemIndex].description  || ''}</p>
            </div>
        </div>
    </div>
  )
}

export default Experiences