import { ExerciseProps } from './ExerciseCard';
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
        <div className='flex h-fit items-center justify-center rounded-lg bg-green-800 p-1 text-sm font-bold text-mint'>
          {weight} lbs
        </div>
        <div className='flex h-fit items-center justify-center rounded-lg bg-orange-800 p-1 text-sm font-bold text-orange-300'>
          {reps} Reps
        </div>
        <div className='flex h-fit items-center justify-center rounded-lg bg-blue-800 p-1 text-sm font-bold text-blue-300'>
          {sets} Sets
        </div>
        <div>{date}</div>
      </div>
    </>
  );
};

export default ExercisePage;
