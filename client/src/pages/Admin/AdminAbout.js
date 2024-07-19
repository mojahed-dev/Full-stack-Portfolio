import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Showloading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from 'antd';


import { Form, Input, Button }
    from "antd";

const { TextArea } = Input

const AdminAbout = () => {
  const {portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const onFinish = async(values) => {
      try {
        const tempSkills = values.skills.split(",");
        values.skills = tempSkills;
          dispatch(Showloading())
          const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/portfolio/update-about`, {
              ...values,
              _id: portfolioData.about._id,

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
      <Form onFinish={onFinish} layout='vertical' className='mt-5' initialValues={{
         ...portfolioData.about,
        skills: portfolioData.about.skills.join(" , ")
      }}>
          <Form.Item name='lottieUrl' label='Lottie URL'>
              <Input placeholder='Lottie URL' />
          </Form.Item>
          <Form.Item name='description1' label='Description 1'>
              <TextArea rows={4} placeholder='Description 1' />
          </Form.Item>
          <Form.Item name='description2' label='Description 2'>
              <TextArea rows={4} placeholder='Description 2' />
          </Form.Item>
          <Form.Item name='skills' label='Skills'>
              <Input placeholder='Skills' />
          </Form.Item>
          <div className="flex justify-end w-full">
              <Button className='bg-primary text-white px-10 py-5' htmlType="submit">
                  Submit
              </Button>
          </div>
      </Form>
  )
}

export default AdminAbout