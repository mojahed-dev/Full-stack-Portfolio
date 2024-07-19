import React, { useState, useEffect } from 'react';
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
    const [form] = Form.useForm(); // Create a form instance

    useEffect(() => {
        if (selectedEditItemForEdit) {
            form.setFieldsValue(selectedEditItemForEdit); // Update form fields when selected item changes
        } else {
            form.resetFields(); // Clear the form when no item is selected
        }
    }, [selectedEditItemForEdit, form]);

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
            let response;
            if (selectedEditItemForEdit) {
                response = await axios.post(`${process.env.REACT_APP_API_URL}/api/portfolio/update-experience`, {
                    ...values,
                    _id: selectedEditItemForEdit._id,
                });
            } else {
                response = await axios.post(
                    `${process.env.REACT_APP_API_URL}/api/portfolio/add-experience`, values
                );
            }

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
                <button className="btn-custom-primary" onClick={() => showModal(null)}>
                    Add Experience
                </button>
            </div>

            <div className="grid grid-cols-4 gap-5 mt-5">
                {experience?.map((exp) => (
                    <div key={exp.id} className='shadow border p-5 flex flex-col h-full bg-white'>
                        <div className="flex-1 space-y-4">
                            <p className='text-secondary text-xl font-bold'>{exp.period}</p>
                            <hr className='my-3' />
                            <p>Company: {exp.company}</p>
                            <p>Role: {exp.title}</p>
                            <p>{exp.description}</p>
                        </div>
                        <div className='flex justify-end gap-3 mt-4 ml-auto'>
                            <button
                               className="btn btn-ghost hover:shadow-black text-error btn-sm rounded-none"
                                danger>Delete
                            </button>
                            <button
                                className='btn btn-sm rounded-none btn-custom-primary'
                                onClick={() => showModal(exp)}>Edit
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Modal
                footer={null}
                open={isModalOpen}
                onCancel={handleCancel}
                title={selectedEditItemForEdit ? 'Edit Experience' : 'Add Experience'}
            >
                <Form
                    layout='vertical'
                    key={selectedEditItemForEdit ? selectedEditItemForEdit._id : 'new'}
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
                    <div className="flex justify-end gap-3 mt-4 ml-auto">
                        <button className='btn btn-ghost btn-sm rounded-none' onClick={handleCancel}>Cancel</button>
                        <button className='btn btn-sm rounded-none btn-custom-primary' type="submit">
                            {selectedEditItemForEdit ? 'Update' : 'Add'}
                        </button>
                    </div>
                </Form>
            </Modal>
        </div>
    );
};

export default AdminExperience;
