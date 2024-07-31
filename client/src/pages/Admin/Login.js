import { message } from 'antd'
import axios from 'axios'
import React from 'react'
import { HideLoading, Showloading } from '../../redux/rootSlice'
import { useDispatch } from 'react-redux'

const Login = () => {
    const [user, setUser] = React.useState({
        username: "",
        password: ""
    })

    const dispatch = useDispatch();

    const login = async () => {
        try {
            dispatch(Showloading());
            const response =  await axios.post(`${process.env.REACT_APP_API_URL}/api/portfolio/admin-login`, user);
            console.log(response);
            dispatch(HideLoading());
            console.log("token:", response.data.success);
            if(response.data.success) {
               console.log("data" , response.data.user);
                localStorage.setItem('token', response.user);
                window.location.href = '/admin';
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            message.error(error.message);
            dispatch(HideLoading());
        }
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-96 flex flex-col gap-5 p-5 shadow border border-gray-500 bg-white'>
                <h1 className='text 2xl text-center'>Mojahed - Admin Login</h1>
                <input className='bg-white' type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} placeholder='Username'/>
                <input className='bg-white' type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder='password'/>
                <button className='btn-primary bg-primary p-2' onClick={login}>Login</button>
            </div>
        </div>
    )
}

export default Login