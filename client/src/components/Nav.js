import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavLinks = () => (
    <>
        <NavLink to="#about" className="px-4 py-2">About</NavLink>
        <NavLink to="#projects" className="px-4 py-2">Projects</NavLink>
        <NavLink to="#contact" className="px-4 py-2">Contact</NavLink>
    </>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => setIsOpen(!isOpen);

    return (
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="text-lg font-bold">My Portfolio</div>
            <div className="hidden md:flex md:flex-col">
                <NavLinks />
            </div>
            <div className="flex md:hidden">
                <button onClick={toggleNavbar}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>
            {isOpen && (
                <div className="absolute left-0 right-0 bg-gray-800 flex flex-col items-start mt-2 md:hidden">
                    <NavLinks />
                </div>
            )}
        </nav>
    );
};


export default Navbar;
