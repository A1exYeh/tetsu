import React from 'react';
import { useState } from 'react';

interface inputFieldProps {
  field: string;
  value: string | number;
  textColor: string;
  bgColor: string;
}

const InputField: React.FC<inputFieldProps> = ({
  field,
  value,
  textColor,
  bgColor,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div
      className={`flex h-fit w-full items-center justify-center gap-2 font-bold text-${textColor}`}
    >
      {isEditing ? (
        <>
          <div className='flex flex-row items-center justify-center'>
            <input
              type={typeof value === 'number' ? 'number' : 'text'}
              value=''
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
                stroke='currentColor'
                viewBox='0 0 16 16'
              >
                <path d='m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001' />
              </svg>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className={`rounded-lg border-2 border-${textColor} bg-${bgColor} px-2 py-1 text-sm`}
          >
            {value} lbs
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
