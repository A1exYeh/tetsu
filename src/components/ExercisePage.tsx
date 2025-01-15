import { ExerciseProps } from './ExerciseCard';
import InputField from './InputField';
import '../index.css';

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
      </div>
    </>
  );
};

export default ExercisePage;
