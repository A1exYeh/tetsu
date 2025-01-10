import '../index.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Logo from '../assets/dumbbell-icon.svg'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        if (username.length > 0) {
            console.log(`Username: ${username}`);
        }
        if (password.length > 0) {
            console.log(`Password: ${password}`);
        }
    }, [username, password]);

    return (
        <>
        <div className='w-[80%] min-w-fit max-w-[300px] h-[350px] bg-neutral-900 text-white flex flex-col items-center justify-center p-4 rounded-2xl'>
            <img src={Logo} alt="" className='w-16 h-16 mb-8' />
            <form action="/dashboard" className='flex flex-col items-start justify-center gap-2'>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder='' className='text-black outline-none px-1 rounded-md focus:outline-red-500 focus:shadow-lg focus:shadow-black'  onChange={(e) => setUsername(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='' className='text-black outline-none px-1 rounded-md focus:outline-red-500 focus:shadow-lg focus:shadow-black' onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit' className='bg-[#2DDD6A] rounded-xl p-2 text-black mx-auto mt-4'>Log In</button>
            </form>
        </div>
        </>
    );
};

export default LoginForm;