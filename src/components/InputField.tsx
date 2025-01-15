import React from 'react';
import { useAuth } from '../hooks/useAuth';
import supabase from '../lib/supabase';
import { useState } from 'react';

interface inputFieldProps {
  field: string;
  value: string | number;
  textColor: string;
  bgColor: string;
  id: string;
  onUpdate?: () => void;
}

const InputField: React.FC<inputFieldProps> = ({
  field,
  value,
  textColor,
  bgColor,
  id,
  onUpdate,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { getUser } = useAuth();

  const updateField = async () => {
    const user = await getUser();

    const { error } = await supabase
      .from('exercises')
      .update({
        [field]:
          typeof value === 'number'
            ? parseFloat(inputValue.toString())
            : inputValue,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .eq('user_id', user.data.user.id)
      .select();

    if (error) {
      console.log('Error updating input field exercise: ', error);
      return;
    }
    setIsEditing(false);

    if (error) {
      console.log('Error ', error);
    } else {
      onUpdate?.();
    }
  };

  return (
    <div
      className={`flex h-fit w-full items-center justify-center gap-2 font-bold text-${textColor}`}
    >
      {isEditing ? (
        <>
          <div className='flex flex-row items-center justify-center'>
            <input
              type={typeof value === 'number' ? 'number' : 'text'}
              min={1}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              placeholder={field}
              className={`w-1/2 rounded-lg border-2 border-${textColor} bg-${bgColor} px-2 py-1 text-sm`}
            />
            <div
              className='ml-auto cursor-pointer'
              onClick={() => {
                setIsEditing(!isEditing);
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5'
                />
              </svg>
            </div>
            <div className='ml-auto cursor-pointer' onClick={updateField}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16' />
                <path d='m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05' />
              </svg>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className={`rounded-lg border-2 border-${textColor} bg-${bgColor} px-2 py-1 text-sm`}
          >
            {value}

            {field == 'weight' ? ' lbs' : ''}
            {field == 'reps' ? ' reps' : ''}
            {field == 'sets' ? ' sets' : ''}
          </div>

          <div
            className='ml-auto cursor-pointer'
            onClick={() => {
              setIsEditing(!isEditing);
            }}
          >
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
        </>
      )}
    </div>
  );
};

export default InputField;
