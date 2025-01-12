import '../index.css';
import { useState, FormEvent } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';
import Logo from '../assets/dumbbell-icon.svg';

const LoginForm = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
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

  const handleLogIn = async (e: FormEvent) => {
    e.preventDefault();
    console.log(e);

    const signInAttempt = await signIn(username, password);

    if (signInAttempt.data.user) {
      console.log('LOGGED IN SUCCESS' + signInAttempt);
      navigate('/dashboard');
    } else {
      console.log('LOGGED IN FAIL' + signInAttempt);
      setUsername('');
      setPassword('');
    }
  };

  return (
    <>
      <div className='flex h-[350px] w-[80%] min-w-fit max-w-[300px] flex-col items-center justify-center rounded-2xl bg-neutral-900 p-4 text-white'>
        <img src={Logo} alt='' className='mb-8 h-16 w-16' />
        <form
          onSubmit={handleLogIn}
          className='flex flex-col items-start justify-center gap-2'
        >
          <label htmlFor='username'>Username</label>
          <input
            type='email'
            placeholder=''
            className='rounded-md px-1 text-black outline-none focus:shadow-lg focus:shadow-black focus:outline-mint'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            placeholder=''
            className='rounded-md px-1 text-black outline-none focus:shadow-lg focus:shadow-black focus:outline-mint'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type='submit'
            className='mx-auto mt-4 flex items-center justify-center rounded-xl bg-mint px-2 py-1 text-black'
          >
            Log In
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
