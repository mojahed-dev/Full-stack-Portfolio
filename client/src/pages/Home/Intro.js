import React from 'react';
import { useSelector } from 'react-redux';

const Intro = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, description, caption } = intro;
  return (
    <div id='intro' className='h-lvh flex flex-col items-start justify-center gap-8 py-10 sm:items-center'>
      <p>{welcomeText || ''}</p>
      <p className='text-7xl sm:text-3xl text-secondary font-semibold'>{firstName || ''} {lastName || ''}</p>
      <p className='text-7xl sm:text-3xl sm:text-center font-semibold'>{caption || ''}</p>
      <p className=" w-2/3 sm:text-center">{description || ''}</p>
      <div className='flex gap-3'>
        <a className='btn btn-outline btn-primary' href="mailto:mojahed.alo.habib@gmail.com">Contact Me</a>
        <button className='btn  btn-primary'>Download Resume</button>
      </div>
    </div>
  )
}

export default Intro