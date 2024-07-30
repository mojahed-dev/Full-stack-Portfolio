import { useState, useEffect } from "react";
import Nav from './Nav';
import { Link as ScrollLink } from 'react-scroll';


const Header = () => {
  // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    // <div className='p-5 bg-primary flex justify-between lg:hidden'>
    //     <h1 className='text-secondary text-4xl font-semibold'>M</h1>
    //     <h1 className='text-white text-4xl font-semibold'>A</h1>
    //     <h1 className='text-tertiary text-4xl font-semibold'>H</h1>
    // </div>
    // <header className='bg-dark-background sticky top-0 z-[20] mx-auto flex flex-wrap w-full items-center justify-between border-gray-500 p-8' >
    //   <p className="text-secondary">Mojahed</p>
    //   <Nav />
    // </header>
    // <div> <Nav /></div>
    <>
      <div className="navbar bg-base-200 sticky top-0 sm:sticky sm:z-[1000]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <span className="btn btn-ghost text-xl">
            <ScrollLink
              to="intro"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              exact="true"
            >{"<DevMo />"}
            </ScrollLink>
          </span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-lg"> <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              exact="true"
            >
              About
            </ScrollLink></li>
            <li className="text-lg">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                exact="true"
              // activeClass='active-link'
              >
                Projects
              </ScrollLink>
            </li>
            <li className="text-lg">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                exact="true"
              // activeClass='active-link'
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-2 items-center">
            <div className="tooltip tooltip-bottom" data-tip="Message me!">
              <a href="mailto:mojahed.alo.habib@gmail.com">
                <i className="ri-mail-line text-gray-600 text-2xl"></i>
              </a>
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Call me">
              <a href="tel:+639651582228">
                <i className="ri-phone-fill text-gray-600 text-2xl"></i>
              </a>
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Github Account">
              <a href="https://github.com/mojahed-dev" target="_blank" rel="noopener noreferrer">
                <i className="ri-github-fill text-gray-600 text-2xl"></i>
              </a>
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Linkedin Account">
              <a href="https://www.linkedin.com/in/mojahed-habib/" target="_blank" rel="noopener noreferrer">
                <i className="ri-linkedin-box-fill text-gray-600 text-2xl"></i>
              </a>
            </div>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                onChange={handleToggle}
                // show toggle image based on localstorage theme
                checked={theme === "light" ? false : true}
              />

              {/* sun icon */}
              <svg
                className="swap-on h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>

        </div>
      </div>

    </>
  )
}

export default Header