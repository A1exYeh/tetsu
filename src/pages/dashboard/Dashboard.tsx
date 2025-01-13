import '../../index.css';
import './dashboard.css';
import { useAuth } from '../../hooks/useAuth';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Dumbbell2 from '../../assets/dumbbell2-icon.svg';
import supabase from '../../lib/supabase';

export default function Dashboard() {
  const [userDisplay, setUserDisplay] = useState(null);
  const { getUser, signOut } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    const getUsername = async () => {
      const user = await getUser();
      setUserDisplay(user.data.user.email || 'dingus');
    };

    const getExercises = async () => {
      const user = await getUser();
      const { data, error } = await supabase
        .from('exercises')
        .select('*')
        .eq('user_id', user.data.user.id);

      if (error) {
        console.error('Error fetching exercises:', error);
        return;
      }

      console.log('User exercises: ', data);
      data.forEach((exercise) => {
        console.log(exercise.name);
      });
    };
    getExercises();
    getUsername();
  }, []);

  const addExercsie = () => {
    navigate('/addExercise');
  };

  return (
    <>
      <div className='flex h-full w-full flex-col items-center justify-start gap-4'>
        <h1 className='my-4 flex w-[90%] justify-start text-2xl font-bold text-white'>
          {userDisplay}
        </h1>
        <div className='flex h-1/4 w-[90%] items-center justify-between rounded-xl border-2 border-zinc-800 bg-zinc-950 p-4 text-white'>
          <div className='flex h-full w-2/5 flex-col items-center justify-center gap-2 rounded-xl'>
            <div className='streakIcon flex h-16 w-16 items-center justify-center text-3xl font-extrabold text-zinc-900 drop-shadow-2xl'>
              7
            </div>
            <p className='font-bold'>STREAK</p>
          </div>
          <div className='flex h-full w-3/5 flex-col items-center justify-center gap-4 rounded-xl font-bold'>
            Wed 17, August 2024
            <button className='rounded-lg bg-mint p-2 text-sm'>Check-In</button>
          </div>
        </div>
        <button onClick={signOut} className='rounded-lg bg-mint p-2 text-sm'>
          Sign Out
        </button>
        <button
          onClick={addExercsie}
          className='rounded-lg bg-mint p-2 text-sm'
        >
          Add Exercise
        </button>
        <div className='flex h-full w-[90%] flex-col items-center justify-start'>
          <div className='flex h-16 w-full flex-row items-center justify-evenly rounded-xl bg-transparent text-white hover:cursor-pointer hover:bg-zinc-900 focus:bg-zinc-900 active:bg-zinc-900'>
            <i className='flex items-center justify-center rounded-full border-2 border-zinc-800 bg-zinc-950 p-2'>
              <img src={Dumbbell2} alt='' className='h-8 w-8' />
            </i>
            <div className='flex h-full flex-col items-start justify-center'>
              <div className='font-bold'>EXERCISE NAME</div>
              <p className='text-sm'>12/25/2024</p>
            </div>
            <div className='flex h-full items-center justify-center font-bold'>
              100 lbs
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
