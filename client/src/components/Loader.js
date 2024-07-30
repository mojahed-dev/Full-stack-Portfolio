import React from 'react'

const Loader = () => {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0'>
      <div className='flex gap-5 text-6xl sm:text-3xl font-semibold items-center'>
        {/* <h1 className="text-secondary l-m">M</h1>
        <h1 className="text-white l-a">A</h1>
        <h1 className="text-tertiary l-h">H</h1> */}
        <div class="w-12 h-12 bg-primary rounded-full l-m"></div>
        <div class="w-12 h-12 bg-secondary rounded-full l-a"></div>
        <div class="w-12 h-12 bg-accent rounded-full l-h"></div>
      </div>
    </div>
  )
}

export default Loader