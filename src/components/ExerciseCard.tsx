import Dumbbell2 from '../assets/dumbbell2-icon.svg';
import '../index.css';

export interface ExerciseProps {
  name: string;
  weight: number;
  reps: number;
  sets: number;
  date: string;
}

const ExerciseCard: React.FC<ExerciseProps> = ({
  name,
  weight,
  reps,
  sets,
  date,
}) => {
  return (
    <>
      <div className='flex h-full w-full flex-row items-center justify-start gap-8 rounded-xl bg-transparent text-white hover:cursor-pointer hover:bg-zinc-900 focus:bg-zinc-900 active:bg-zinc-900'>
        <i className='flex items-center justify-center rounded-full border-2 border-zinc-800 bg-zinc-950 p-2'>
          <img src={Dumbbell2} alt='' className='h-8 w-8' />
        </i>
        <div className='flex h-full flex-col items-start justify-center'>
          <div className='font-bold'>{name}</div>
          <p className='text-sm'>{date}</p>
        </div>

        <div className='flex h-full flex-grow-[1] flex-col items-end justify-center text-right'>
          <div className='flex h-fit items-center justify-center font-bold'>
            {weight} lbs
          </div>
          <div className='flex h-fit items-center justify-center font-bold'>
            {reps} reps
          </div>
          <div className='flex h-fit items-center justify-center font-bold'>
            {sets} sets
          </div>
        </div>
      </div>
    </>
  );
};

export default ExerciseCard;
