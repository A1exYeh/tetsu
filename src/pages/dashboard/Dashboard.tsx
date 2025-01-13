import '../../index.css';
import './dashboard.css';
import { useAuth } from '../../hooks/useAuth';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import supabase from '../../lib/supabase';
import ExerciseCard from '../../components/ExerciseCard';
import { ExerciseProps } from '../../components/ExerciseCard';

export default function Dashboard() {
  const [userDisplay, setUserDisplay] = useState(null);
  const { getUser, signOut } = useAuth();
  const [exercises, setExercises] = useState<ExerciseProps[]>([]);
  const navigate = useNavigate();

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, '0'); // Get hours and pad with zero if needed
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Get minutes and pad with zero if needed
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Get month (0-indexed) and pad
    const day = date.getDate().toString().padStart(2, '0'); // Get day and pad
    const year = date.getFullYear().toString().slice(-2); // Get last two digits of the year

    return `${hours}:${minutes} ${month}/${day}/${year}`;
  };

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
      const exerciseList: ExerciseProps[] = data.map((exercise) => ({
        name: exercise.name,
        weight: exercise.weight,
        reps: exercise.reps,
        sets: exercise.sets,
        date: exercise.updated_at,
      }));
      setExercises(exerciseList);
    };
    getUsername();
    getExercises();
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
        <div className='flex h-fit w-[90%] flex-col items-center justify-start'>
          {exercises.map(({ name, weight, reps, sets, date }) => (
            <ExerciseCard
              name={name}
              weight={weight}
              reps={reps}
              sets={sets}
              date={formatDate(date)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
