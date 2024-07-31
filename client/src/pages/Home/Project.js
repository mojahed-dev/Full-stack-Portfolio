import React from 'react'
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

const Project = () => {
    const [selecteditemIndex, setSelectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);
    const { project } = portfolioData;
    return (
        <div id='projects' className='min-h-screen w-full flex flex-col justify-center'>
            <SectionTitle title="Recent Projects" />
            {/* <div className="flex py-10 gap-20 sm:flex-col">
                <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {project.map((proj, index) => (
                        <div onClick={() => { setSelectedItemIndex(index) }} className='cursor-pointer'>
                            <p className={`text-xl px-5 ${selecteditemIndex === index
                                ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 sm:w-full"
                                : "text-white"}`}
                            >
                                {proj.title || ''}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center gap-10 sm:flex-col">
                    <img src={project[selecteditemIndex].image  || ''} alt="project image" className=' max-w-full object-contain' />
                    <div className='flex gap-4 mt-4'>
                        <a href={project[selecteditemIndex].link  || ''} target="_blank" rel="noopener noreferrer">
                            <button className='px-4 py-2 bg-tertiary text-white rounded'>Demo</button>
                        </a>
                        <a href={project[selecteditemIndex].code  || ''} target="_blank" rel="noopener noreferrer">
                            <button className='px-4 py-2 bg-secondary text-white rounded'>Code</button>
                        </a>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className="text-secondary text-2xl">{project[selecteditemIndex].title}</p>
                    <p className="text-tertiary text-md">{project[selecteditemIndex].description}</p>
                    <p className='text-white'>{project[selecteditemIndex].description}</p>
                    <div className='flex flex-row text-white'>
                        {project[selecteditemIndex].technologies.map((tech, techIndex) => (
                            <span key={techIndex  || ''} className='mr-2 border border-tertiary py-1 px-1 rounded'>{tech  || ''}</span>
                        ))}
                    </div>
                </div>
            </div> */}
            <div className='flex gap-10 items-center justify-center sm:flex-col lg:grid lg:grid-cols-3  grow'>
                {project.map((pro, index) => (
                    <div className="card bg-base-100 w-96 shadow-xl z-0 w-full">
                        <figure>
                            <img
                                src={(pro.image) ? pro.image : ''}
                                alt="Project" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{pro.title || ''}</h2>
                            {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                            <div className='flex flex-wrap gap-1'>
                                <span className='text-sm'>Tech used: </span>
                                {pro.technologies.map((tech, techIndex) => (
                                     <span className='badge badge-secondary' key={techIndex}>{tech || ''}</span>
                                ))}
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-sm btn-link"><a href={pro.code || ''} target="_blank" rel="noopener noreferrer">Code Link</a></button>
                                <button className="btn btn-sm btn-primary"><a href={pro.link || ''} target="_blank" rel="noopener noreferrer">Demo</a></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project