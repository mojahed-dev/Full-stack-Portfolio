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

const Home = () => {
    const { loading, portfolioData } = useSelector((state) => state.root);
    return (
        <div>
            <Header />
            {/* show contents when portfolioData is not null */}
            { portfolioData && (
                <div className='bg-primary px-40 sm:px-5'>
                    <Intro />
                    <About />
                    <Experiences />
                    <Project />
                    <Contact />
                    <Footer />
                    <LeftSider />
                </div>
            )}
        </div>
    )
}

export default Home