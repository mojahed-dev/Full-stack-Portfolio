import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, Form, Input, message } from 'antd';
import { Showloading, HideLoading, ReloadData } from "../../redux/rootSlice";
import axios from "axios";

const AdminExperience = () => {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);
    const { experience } = portfolioData;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEditItemForEdit, setSelectedEditItemForEdit] = useState(null);

    const showModal = (item) => {
        setSelectedEditItemForEdit(item);
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        setSelectedEditItemForEdit(null);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setSelectedEditItemForEdit(null);
    };

    const onFinish = async (values) => {
        try {
            dispatch(Showloading());
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/portfolio/add-experience`, 
                values
            );
            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                handleCancel();
                dispatch(ReloadData(true));
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    };

    return (
        <div>
            <div className="flex justify-end">
                <Button type='primary' size='large' onClick={() => showModal(null)}>
                    Add Experience
                </Button>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-5">
                {experience?.map((exp) => (
                    <div key={exp.id} className='shadow border p-5 border-gray-400 flex flex-col h-full'>
                        <div className="flex-1 space-y-4">
                            <p className='text-secondary text-xl font-bold'>{exp.period}</p>
                            <hr className='my-3' />
                            <p>Company: {exp.company}</p>
                            <p>Role: {exp.title}</p>
                            <p>{exp.description}</p>
                        </div>
                        <div className='flex justify-end gap-4 mt-4 ml-auto'>
                            <Button type='primary' danger>Delete</Button>
                            <Button type="primary" onClick={() => showModal(exp)}>Edit</Button>
                        </div>
                    </div>
                ))}
            </div>
            <Modal
                footer={null}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                title={selectedEditItemForEdit ? 'Edit Experience' : 'Add Experience'}
            >
                <Form
                    layout='vertical'
                    initialValues={selectedEditItemForEdit || {}}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name='period'
                        label='Period'
                        rules={[{ required: true, message: 'Please input the period!' }]}
                    >
                        <Input placeholder='Period' />
                    </Form.Item>
                    <Form.Item
                        name='company'
                        label='Company'
                        rules={[{ required: true, message: 'Please input the company!' }]}
                    >
                        <Input placeholder='Company' />
                    </Form.Item>
                    <Form.Item
                        name='title'
                        label='Role'
                        rules={[{ required: true, message: 'Please input the role!' }]}
                    >
                        <Input placeholder='Role' />
                    </Form.Item>
                    <Form.Item
                        name='description'
                        label='Description'
                        rules={[{ required: true, message: 'Please input the description!' }]}
                    >
                        <Input placeholder='Description' />
                    </Form.Item>
                    <div className="flex justify-end gap-4 mt-4 ml-auto">
                        <Button type='text' onClick={handleCancel}>Cancel</Button>
                        <Button type="primary" htmlType="submit">
                            {selectedEditItemForEdit ? 'Update' : 'Add'}
                        </Button>
                    </div>
                </Form>
            </Modal>
        </div>
    );
};

export default AdminExperience;
