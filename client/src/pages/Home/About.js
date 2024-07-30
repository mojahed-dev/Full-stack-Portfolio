import React from 'react'
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

const About = () => {
    const { loading, portfolioData } = useSelector((state) => state.root);
    const { about } = portfolioData;
    const { lottieUrl, description1, description2, skills } = about;

    return (
        <>
            <div id="about" className='min-h-screen w-full flex flex-col justify-center'>
                <div className='flex min-h-screen w-full justify-center items-center gap-10 sm:gap-0 sm:flex-col'>
                    <div className='h-[70vh] w-1/2 sm:w-full sm:p-0 sm:hidden'>
                        <dotlottie-player src={lottieUrl || ''} background="transparent" speed="1" autoplay></dotlottie-player>
                    </div>
                    <div className="flex flex-col gap-5 w-1/2 sm:w-full">
                        <SectionTitle title='About' className='mb-5' />
                        <p className="">{description1 || ''}</p>
                        <p className="">{description2 || ''}</p>
                        <div>
                            <h2 className='my-3  text-xl'>Technology I am using:</h2>
                            <div className="w-full flex items-center ">
                                <div className='flex flex-wrap  gap-3 sm:gap-3'>
                                    {skills.map((skill, index) => (
                                        <div  key={index} className="badge badge-b badge-primary py-4 px-4 badge-outline sm:py-2 sm:px-2">{skill}</div>
                                        // <div key={index} className='border color-primary py-3 px-10 sm:py-1 sm:px-2'>
                                        //     <p className='text-tertiary'>{skill}</p>
                                        // </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className='my-3  text-xl'>Work Experience:</h2>
                            <ul className="timeline  sm:flex-row sm:overflow-x-scroll sm:w-full">
                                <li>
                                    <div className="timeline-start">2018</div>
                                    <div className="timeline-middle">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-5 w-5">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="timeline-end timeline-box"><p>Software QA [Internship]</p>at Coreproc Inc.,</div>
                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-start">2020-2023</div>
                                    <div className="timeline-middle">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-5 w-5">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="timeline-end timeline-box"><p>Wordpress Developer</p>at SEOWerkz</div>
                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-start">2023-2024</div>
                                    <div className="timeline-middle">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-5 w-5">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="timeline-end timeline-box"><p>Wordpress Developer</p>at Samasu Digital</div>
                                    <hr />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About