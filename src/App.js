import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/expenses';
import NewExpense from './components/NewExpenses/NewExpense';


const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'துணிவு',
    amount: 194.12,
    date: new Date(2021, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'வாரிசு', 
    amount: 799.49, 
    date: new Date(2020, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Repair',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New work desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id:'e5',
    title:"Paul Daniel's Treat",
    amount:420,
    date: new Date(2002, 7, 21),
  }
];

function App() {

  const[expenseList, setExpenseList] = useState(DUMMY_DATA);

  const onAddExpense = (new_expense={}) => {
    setExpenseList((prev_expen_list)=>{
    return [...prev_expen_list, new_expense]
    })
    console.log(expenseList);
  }

  return (
    <>
      <NewExpense onAddExpense={onAddExpense}/>
      <Expenses expenses={expenseList}/>
    </>
  );
}

export default App;
