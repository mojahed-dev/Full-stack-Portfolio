import React from 'react'

const SectionTitle = ({
    title,
}) => {
  return (
    <div className='flex gap-10 items-center py-10 sm:py-20'>
        <h1 className='text-3xl text-secondary'>{title}</h1>
        <div className='w-60 h-[1px] bg-tertiary fle'></div>
    </div>
  )
}

export default SectionTitle