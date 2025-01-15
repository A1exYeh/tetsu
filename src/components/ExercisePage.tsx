import { ExerciseProps } from './ExerciseCard';
import penIcon from '../assets/pen_icon.svg';
import '../index.css';

const ExercisePage: React.FC<ExerciseProps> = ({
  name,
  weight,
  reps,
  sets,
  date,
}) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center gap-4 text-center text-white'>
        <div className='font-bold'>{name}</div>
        <div className='flex h-fit w-full items-center justify-center gap-2 font-bold text-mint'>
          <div className='rounded-lg border-2 border-mint bg-green-800 px-2 py-1 text-sm'>
            {weight} lbs
          </div>

          <div className='ml-auto cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              stroke='currentColor'
              viewBox='0 0 16 16'
            >
              <path d='m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001' />
            </svg>
          </div>
        </div>
        <div className='flex h-fit w-full items-center justify-center gap-2 font-bold text-orange-300'>
          <div className='rounded-lg border-2 border-orange-300 bg-orange-800 p-1 text-sm'>
            {reps} Reps
          </div>
          <div className='ml-auto cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              stroke='currentColor'
              viewBox='0 0 16 16'
            >
              <path d='m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001' />
            </svg>
          </div>
        </div>
        <div className='flex h-fit w-full items-center justify-center gap-2 font-bold text-blue-300'>
          <div className='rounded-lg border-2 border-blue-300 bg-blue-800 p-1 text-sm'>
            {sets} Sets
          </div>
          <div className='ml-auto cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              stroke='currentColor'
              viewBox='0 0 16 16'
            >
              <path d='m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001' />
            </svg>
          </div>
        </div>
        <div>{date}</div>
      </div>
    </>
  );
};

export default ExercisePage;
