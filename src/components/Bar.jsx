import React from 'react';

export default function Bar(props) {
  return (
    <div>
      <div className='h-24 flex items-end'>
        <div
          className='bg-soft-red w-8 rounded'
          style={{
            height: props.height,
          }}
        ></div>
      </div>
      <div className='text-center text-xs opacity-50'>{props.day}</div>
    </div>
  );
}
