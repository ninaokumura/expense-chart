import React from 'react';
import Bar from './Bar';
import data from '../data/data.json';

const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const currentDayIdx = new Date().getDay();

export default function ExpenseChart() {
  return (
    <div className='bg-very-pale-orange rounded-xl p-4 font-manrope text-dark-brown'>
      <div className='grid gap-4'>
        <h1 className='font-[500] font-manrope'>Spending - Last 7 days</h1>
        <div className='flex justify-between items-end'>
          {data.map(balanceInfo => (
            <Bar
              amount={balanceInfo.amount}
              day={balanceInfo.day}
              key={balanceInfo.day}
              backgroundColor={
                balanceInfo.day === weekdays[currentDayIdx]
                  ? 'hsl(186, 34%, 60%)'
                  : 'hsl(10, 79%, 65%)'
              }
            />
          ))}
        </div>
        <div className='border-b border-cream' aria-hidden />
        <div className='flex justify-between'>
          <div>
            <div className='text-xs opacity-50'>Total this month</div>
            <div className='font-[500] text-3xl'>$478.33</div>
          </div>
          <div className='text-xs grid place-items-center'>
            <div>
              <div className='text-right'>+2.4%</div>
              <div className='opacity-50'>from last month</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
