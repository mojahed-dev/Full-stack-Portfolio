import Reac from 'react'
import Header from '../../components/Header'
import { Tabs } from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import {useSelector} from "react-redux";
import AdminExperience from './AdminExperience';



const items = [
    {
        key: '1',
        label: 'Intro',
        children: <AdminIntro />,
    },
    {
        key: '2',
        label: 'About',
        children: <AdminAbout />,
    },
    {
        key: '3',
        label: 'Experience',
        children: <AdminExperience />,
    },
];

const Admin = () => {
    const { portfolioData } = useSelector((state) => state.root);
    return (
        <>
            {/* <Header /> */}
           { portfolioData &&  
            <div className="mt-5 p-5">
                <Tabs defaultActiveKey="1" items={items} />
            </div> }
        </>
    )
}

export default Admin