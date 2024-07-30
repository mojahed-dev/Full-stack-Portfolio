import React from 'react'

const SectionTitle = ({
    title,
}) => {
  return (
    <div className='flex gap-10 py-10 items-center sm:py-5'>
        <h1 className='text-3xl text-secondary'>{title}</h1>
        <div className='w-60 h-[1px] bg-[#FF52D9]'></div>
    </div>
  )
}

export default SectionTitle