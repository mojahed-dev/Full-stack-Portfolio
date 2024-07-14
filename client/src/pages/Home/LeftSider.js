import React from 'react'

const LeftSider = () => {
    return (
        <div className='fixed left-0 bottom-0 px-10 sm:static'>
            <div className="flex flex-col items-center gap-3">
                <div className="flex flex-col gap-3 sm:flex-row">
                    <a href="mailto:mojahed.alo.habib@gmail.com">
                        <i className="ri-mail-line text-gray-600 text-2xl"></i>
                    </a>
                    <a href="tel:+639651582228">
                        <i className="ri-phone-fill text-gray-600 text-2xl"></i>
                    </a>
                    <a href="https://github.com/mojahed-dev" target="_blank" rel="noopener noreferrer">
                        <i className="ri-github-fill text-gray-600 text-2xl"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/mojahed-habib/" target="_blank" rel="noopener noreferrer">
                        <i className="ri-linkedin-box-fill text-gray-600 text-2xl"></i>
                    </a>
                </div>
                <div className='w-[1px] h-52 bg-[#645f5f] sm:hidden'></div>
            </div>
        </div>
    )
}

export default LeftSider