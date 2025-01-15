import { ExerciseProps } from './ExerciseCard';
import InputField from './InputField';
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

        <InputField
          field='weight'
          value={weight}
          textColor='mint'
          bgColor='green-800'
        />
        <InputField
          field='reps'
          value={reps}
          textColor='orange-300'
          bgColor='orange-800'
        />
        <InputField
          field='sets'
          value={sets}
          textColor='blue-300'
          bgColor='blue-800'
        />
        <div>{date}</div>
      </div>
    </>
  );
};

export default ExercisePage;
