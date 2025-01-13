import '../index.css';
import { useState, FormEvent } from 'react';
import { Link } from 'react-router';
import Logo from '../assets/dumbbell-icon.svg';
import supabase from '../lib/supabase';

const AddExerciseForm = () => {
  const [exerciseName, setExerciseName] = useState('');
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');

  const addExercise = async (e: FormEvent) => {
    e.preventDefault();
    console.log(e);

    const { data, error } = await supabase
      .from('exercises')
      .insert([
        {
          name: exerciseName,
          weight: parseFloat(weight),
          reps: parseInt(reps),
          sets: parseInt(sets),
        },
      ])
      .select();

    if (error) {
      console.error('Error adding exercise:', error);
    } else {
      console.log('Exercise added successfully:', data);
      // Clear form
      setExerciseName('');
      setWeight('');
      setReps('');
      setSets('');
    }
  };

  return (
    <>
      <div className='flex h-fit w-[80%] min-w-fit max-w-[300px] flex-col items-center justify-center rounded-2xl bg-neutral-900 p-4 text-white'>
        <img src={Logo} alt='' className='mb-8 h-16 w-16' />
        <form
          onSubmit={addExercise}
          className='flex flex-col items-start justify-center gap-2'
        >
          <label htmlFor='exerciseName'>Exercise Name</label>
          <input
            type='text'
            placeholder=''
            className='rounded-md px-1 text-black outline-none focus:shadow-lg focus:shadow-black focus:outline-mint'
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
          />

          <label htmlFor='weight'>Weight</label>
          <input
            type='number'
            placeholder=''
            className='rounded-md px-1 text-black outline-none focus:shadow-lg focus:shadow-black focus:outline-mint'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <label htmlFor='reps'>Reps</label>
          <input
            type='number'
            placeholder=''
            className='rounded-md px-1 text-black outline-none focus:shadow-lg focus:shadow-black focus:outline-mint'
            value={reps}
            onChange={(e) => setReps(e.target.value)}
          />

          <label htmlFor='sets'>Sets</label>
          <input
            type='number'
            placeholder=''
            className='rounded-md px-1 text-black outline-none focus:shadow-lg focus:shadow-black focus:outline-mint'
            value={sets}
            onChange={(e) => setSets(e.target.value)}
          />

          <button
            type='submit'
            className='mx-auto mt-4 flex items-center justify-center rounded-xl bg-mint px-2 py-1 text-black'
          >
            Add
          </button>
          <p className='my-2 w-full text-center text-sm'>
            <Link to='/dashboard'>Home</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default AddExerciseForm;
