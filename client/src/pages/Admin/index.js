import Reac, { useEffect } from 'react'
import Header from '../../components/Header'
import { Tabs } from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import { useSelector } from "react-redux";
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

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            window.location.href = '/admin-login';
        }
    }, [])


    return (
        <div className='bg-[#F0F2F5] min-h-screen m-0 p-0'>
            {/* <Header /> */}

            {portfolioData &&

                <div className="p-5">
                    <div className="flex justify-between items-center py-5">
                        <p> Welcome {portfolioData?.intro?.firstname}!</p>
                        <button
                            className='btn btn-link text-secondary p-0 cursor-pointer'
                            onClick={() => {
                                localStorage.removeItem("token");
                                window.location.href = "/admin-login";
                            }}>Logout
                        </button>
                    </div>
                    <Tabs defaultActiveKey="1" items={items} tabPosition='left' />
                </div>}
        </div>
    )
}

export default Admin