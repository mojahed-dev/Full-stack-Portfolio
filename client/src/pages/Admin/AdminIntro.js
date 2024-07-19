import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Showloading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from 'antd';


import { Form, Input, Button }
    from "antd";

const { TextArea } = Input

const AdminIntro = () => {
    const {portfolioData } = useSelector((state) => state.root);
    const dispatch = useDispatch();

    const onFinish = async(values) => {
        try {
            dispatch(Showloading())
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/portfolio/update-intro`, {
                ...values,
                _id: portfolioData.intro._id,

            });
            dispatch(HideLoading());
            if(response.data.success) {
                message.success(response.data.message);
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message)
        }
      };
    return (
        <Form onFinish={onFinish} layout='vertical' className='mt-5' initialValues={portfolioData?.intro}>
            <Form.Item name='welcomeText' label='Welcome text'>
                <Input placeholder='Welcome text' />
            </Form.Item>
            <Form.Item name='firstName' label='First name'>
                <Input placeholder='First name' />
            </Form.Item>
            <Form.Item name='lastName' label='Last name'>
                <Input placeholder='Last name' />
            </Form.Item>
            <Form.Item name='caption' label='Description'>
                <TextArea rows={4} placeholder='Description' />
            </Form.Item>
            <div className="flex justify-end w-full">
                <Button className='bg-primary text-white px-10 py-5' htmlType="submit">
                    Submit
                </Button>
            </div>
        </Form>
    )
}

export default AdminIntro