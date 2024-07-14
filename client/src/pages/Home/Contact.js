import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

const Contact = () => {

    const { portfolioData } = useSelector((state) => state.root);
    const { contact } = portfolioData;
    return (
        <div>
            <SectionTitle title='Reach me out!' />
            <div className="flex sm:flex-col items-center justify-between">
                <div className="flex flex-col gap-1">
                    <p className='text-tertiary'>{'{'}</p>
                    {Object.keys(contact)
                        .filter(key => key !== '_id') // Filter out the _id key
                        .map((key) => (
                            <h1 className='ml-5' key={key}>
                                <span className="text-tertiary">{key}: </span>
                                <span className='text-white'>{`"${contact[key]}"` || ''}</span>
                            </h1>
                        ))}
                    <p className='text-tertiary'>{'}'}</p>

                </div>
                <div className='h-[400px]'><script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>

                    <dotlottie-player src="https://lottie.host/7e6a0902-fd18-4228-a564-92143a027d22/wxtZIzDjS9.json" background="transparent" speed="1" autoplay></dotlottie-player></div>
            </div>
        </div>
    )
}

export default Contact