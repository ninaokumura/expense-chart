import React from 'react';
import Bar from './Bar';
import data from '../data/data.json';

export default function ExpenseChart() {
  return (
    <div className='bg-very-pale-orange rounded-xl p-4 font-manrope'>
      <div className='grid gap-4'>
        <h1 className='font-[500] font-manrope'>Spending - Last 7 days</h1>
        <div className='flex justify-between items-end'>
          {data.map(balanceInfo => (
            <Bar height={balanceInfo.amount} day={balanceInfo.day} />
          ))}
        </div>
        <hr />
        <div className='flex justify-between'>
          <div>
            <div className='text-xs opacity-50'>Total this month</div>
            <div className='font-[500] font-manrope text-3xl'>$478.33</div>
          </div>
          <div className='text-xs grid place-items-center'>
            <div>
              <div className='text-right'>+2.4%</div>
              <div className='opacity-50'>From last month</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
