import React from 'react';
import { ReactComponent as Logo } from '../images/logo.svg';

export default function Header(props) {
  return (
    <div className='bg-soft-red rounded-xl w-full text-white p-4 text-sm flex justify-between items-center'>
      <div className='flex flex-col gap-1'>
        <h1 className='text-xs opacity-[0.8]'>{props.title}</h1>
        <h1 className='text-lg font-[500]'>${props.balance}</h1>
      </div>
      <Logo className='w-12' />
    </div>
  );
}
