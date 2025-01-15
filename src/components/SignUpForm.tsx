import '../index.css';
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router';
import Logo from '../assets/dumbbell-icon.svg';

const SignUpForm = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passVisible, setPassVisible] = useState(false);

  const togglePassVisible = () => {
    setPassVisible(!passVisible);
  };

  const passVisibleIcon = () => {
    if (passVisible) {
      return (
        <>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='22'
            height='22'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path d='M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z' />
            <path d='M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0' />
          </svg>
        </>
      );
    } else {
      return (
        <>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='22'
            height='22'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path d='M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z' />
            <path d='M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829' />
            <path d='M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z' />
          </svg>
        </>
      );
    }
  };

  // useEffect(() => {
  //   if (username.length > 0) {
  //     console.log(`Username: ${username}`);
  //   }
  //   if (password.length > 0) {
  //     console.log(`Password: ${password}`);
  //   }
  // }, [username, password]);

  const handleLogIn = async (e: FormEvent) => {
    e.preventDefault();
    //console.log(e);

    const signUpAttempt = await signUp(username, password);

    if (signUpAttempt.data.user) {
      //console.log('SIGN UP SUCCESS' + signUpAttempt);
      navigate('/dashboard');
    } else {
      //console.log('SIGN UP FAIL' + signUpAttempt);
      alert(signUpAttempt.error?.message || 'Sign Up Failed');
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
          <label htmlFor='username'>Email</label>
          <input
            type='email'
            placeholder=''
            className='rounded-md px-1 text-black outline-none focus:shadow-lg focus:shadow-black focus:outline-mint'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <div className='relative flex w-full flex-row items-center justify-start'>
            <input
              type={passVisible ? 'text' : 'password'}
              placeholder=''
              className='rounded-md px-1 text-black outline-none focus:shadow-lg focus:shadow-black focus:outline-mint'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type='button'
              formAction='none'
              onClick={togglePassVisible}
              className='absolute right-1 rounded text-mint'
            >
              {passVisibleIcon()}
            </button>
          </div>
          <button
            type='submit'
            className='mx-auto mt-4 flex items-center justify-center rounded-xl bg-mint px-2 py-1 text-black'
          >
            Register
          </button>
          <p className='my-2 w-full text-center text-sm'>
            <Link to='/login'>Log In</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
