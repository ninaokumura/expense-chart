import React from 'react';
import Bar from './Bar';
import data from '../data/data.json';

export default function ExpenseChart() {
  // const initialValue = 0;
  // const totalExpense = data.reduce(
  //   (previousValue, currentValue) => previousValue + currentValue.amount,
  //   initialValue
  // );
  const amounts = data.map(expenseInfo => expenseInfo.amount);

  const maxValue = Math.max(...amounts);

  // const maxValue = amounts.sort()[amounts.length - 1];
  console.log(maxValue);
  // const maxValue = data.reduce((prev, current) =>
  //   prev.amount > current.amount ? prev : current
  // );

  return (
    <div className='bg-very-pale-orange rounded-xl p-4 font-manrope text-dark-brown'>
      <div className='grid gap-4'>
        <h1 className='font-[500] font-manrope'>Spending - Last 7 days</h1>
        <div className='flex justify-between items-end'>
          {data.map(balanceInfo => (
            <Bar
              height={balanceInfo.amount}
              day={balanceInfo.day}
              key={balanceInfo.day}
              backgroundColor={
                balanceInfo.amount === maxValue
                  ? 'hsl(186, 34%, 60%)'
                  : 'hsl(10, 79%, 65%)'
              }
              // maxHeight={'100%'}
            />
          ))}
        </div>
        <hr className='text-medium-brown' />
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
