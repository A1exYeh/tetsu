import Dumbbell2 from '../assets/dumbbell2-icon.svg';
import '../index.css';

export interface ExerciseProps {
  onClick: () => void;
  name: string;
  weight: number;
  reps: number;
  sets: number;
  date: string;
  id: string;
}

const ExerciseCard: React.FC<ExerciseProps> = ({
  onClick,
  name,
  weight,
  reps,
  sets,
  date,
}) => {
  return (
    <>
      <div
        onClick={onClick}
        className='flex h-full w-full flex-row items-center justify-start gap-8 rounded-xl bg-transparent p-1 text-white hover:cursor-pointer hover:bg-zinc-900 focus:bg-zinc-900 active:bg-zinc-900'
      >
        <i className='flex items-center justify-center rounded-full border-2 border-zinc-800 bg-zinc-950 p-2'>
          <img src={Dumbbell2} alt='' className='h-8 w-8' />
        </i>

        <div className='flex h-full flex-col items-start justify-center'>
          <div className='font-bold'>{name}</div>
          <p className='text-sm font-semibold text-zinc-600'>{date}</p>
        </div>

        <div className='flex h-full flex-grow-[1] flex-col items-end justify-center gap-1 text-right'>
          <div className='flex h-fit items-center justify-center rounded-lg border-2 border-mint bg-green-800 p-1 text-sm font-bold text-mint'>
            {weight} lbs
          </div>
          <div className='flex h-fit items-center justify-center rounded-lg border-2 border-orange-300 bg-orange-800 p-1 text-sm font-bold text-orange-300'>
            {reps} reps
          </div>
          <div className='flex h-fit items-center justify-center rounded-lg border-2 border-blue-300 bg-blue-800 p-1 text-sm font-bold text-blue-300'>
            {sets} sets
          </div>
        </div>
      </div>
    </>
  );
};

export default ExerciseCard;
