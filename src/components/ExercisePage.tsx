import { ExerciseProps } from './ExerciseCard';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import InputField from './InputField';
import '../index.css';
import supabase from '../lib/supabase';

interface OnUpdateProp extends ExerciseProps {
  onUpdate?: () => void;
}

const ExercisePage: React.FC<OnUpdateProp> = ({
  name,
  weight,
  reps,
  sets,
  date,
  id,
  onUpdate,
}) => {
  const { getUser } = useAuth();
  const [promptVisible, setPromptVisible] = useState(false);
  const togglePrompt = () => {
    setPromptVisible(!promptVisible);
  };

  const deleteExercise = async () => {
    const user = await getUser();
    await supabase
      .from('exercises')
      .delete()
      .eq('id', id)
      .eq('user_id', user.data.user.id);
  };
  return (
    <>
      <div className='flex flex-col items-center justify-center gap-4 text-center text-white'>
        <div className='font-bold'>{name}</div>

        <InputField
          field='weight'
          value={weight}
          textColor='mint'
          bgColor='green-800'
          id={id}
          onUpdate={onUpdate}
        />
        <InputField
          field='reps'
          value={reps}
          textColor='orange-300'
          bgColor='orange-800'
          id={id}
          onUpdate={onUpdate}
        />
        <InputField
          field='sets'
          value={sets}
          textColor='blue-300'
          bgColor='blue-800'
          id={id}
          onUpdate={onUpdate}
        />
        <div>{date}</div>
        <div className='ml-auto flex min-w-full cursor-pointer items-center justify-center text-red-500'>
          {!promptVisible ? (
            <svg
              onClick={togglePrompt}
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              viewBox='0 0 16 16'
            >
              <path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0' />
            </svg>
          ) : (
            <div>
              <p>Are you sure? </p>
              <button
                onClick={() => {
                  deleteExercise();
                  togglePrompt();
                  onUpdate?.();
                }}
                className='bg-blue-500'
              >
                yes
              </button>
              <button className='bg-yellow-500'>no</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ExercisePage;
