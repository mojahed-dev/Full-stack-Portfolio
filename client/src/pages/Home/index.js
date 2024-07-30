import React from 'react';
import Header from '../../components/Header';
import Intro from './Intro';
import About from './About';
import Experiences from './Experiences';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import LeftSider from './LeftSider';
import { useSelector } from 'react-redux';
import Skills from './Skills';

const Home = () => {
    const { loading, portfolioData } = useSelector((state) => state.root);
    return (
        <>

            {/* show contents when portfolioData is not null */}

            {portfolioData && (
                <div>
                    <Header />
                    <div className='bg-base-200 px-40 sm:px-5'>
                        <Intro />
                        <About />
                        <Project />
                        <Contact />
                        <Footer />
                        <LeftSider />
                    </div>
                </div >
            )}
        </>
    )
}

export default Home