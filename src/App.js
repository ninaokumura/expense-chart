import './App.css';
import ExpenseChart from './components/ExpenseChart';
import Header from './components/Header';

function App() {
  return (
    <div className='grid place-items-center h-screen bg-cream'>
      <div className='max-w-xs w-full grid gap-4'>
        <Header balance='921.48' title='My balance' />
        <div className=''>
          <ExpenseChart />
        </div>
      </div>
    </div>
  );
}

export default App;
