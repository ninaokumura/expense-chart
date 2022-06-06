import React from 'react';

export default function Bar(props) {
  return (
    <div>
      <div className='h-28 flex flex-col justify-end group'>
        <div
          className='relative border flex items-end'
          style={{
            height: `${props.amount * 1.5}%`,
          }}
        >
          <div
            className='bg-soft-red w-8 rounded cursor-pointer group-hover:opacity-[0.6] h-full'
            style={{
              backgroundColor: props.backgroundColor,
            }}
          />
          <span className='absolute -top-7 text-xs bg-dark-brown text-cream p-1 rounded -left-[25%] opacity-0 group-hover:opacity-100 transition-opacity'>
            ${props.amount}
          </span>
        </div>
      </div>
      <div className='text-center text-xs opacity-50'>{props.day}</div>
    </div>
  );
}
