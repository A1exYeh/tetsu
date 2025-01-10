import '../index.css';
import { useState } from 'react';
import { useEffect } from 'react';

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
        <div className='w-full h-[500px] bg-neutral-900 text-white flex flex-col items-center justify-center'>
            <form action="post" className='flex flex-col items-start justify-center gap-2'>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder='' className='text-black'  onChange={(e) => setUsername(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='' className='text-black' onChange={(e) => setPassword(e.target.value)}/>
            </form>
        </div>
        </>
    );
};

export default LoginForm;