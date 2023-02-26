import React,{useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (param) => {
    
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const onTitleChange = (event) => setEnteredTitle(event.target.value);
    const onAmountChange = (event) => setEnteredAmount(event.target.value);
    const onDateChange = (event) => setEnteredDate(event.target.value);


    const onSubmit = (event) => {
        event.preventDefault();
        const new_expense = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }
        param.onSave(new_expense);
        setEnteredAmount("");
        setEnteredDate("");
        setEnteredTitle("");
        //console.log(enteredTitle, enteredAmount, enteredDate);
    }

    return (
    <form action="" onSubmit={onSubmit}>
        <div className="new-expense__controls">

            <div className="new-expense__control">
                <label htmlFor="title">Title</label>
                <input type="text" 
                id="title" 
                name="expense_title"
                value={enteredTitle}
                onChange={onTitleChange}
                 />
            </div>

            <div className="new-expense__control">
                <label htmlFor="amount">Amount</label>
                <input type="number" 
                id="amount" 
                name="expense_amount" 
                min="0" 
                value={enteredAmount}
                onChange={onAmountChange}
                />
            </div>

            <div className="new-expense__control">
                <label htmlFor="date">Date</label>
                <input type="date" 
                id="date" 
                name="expense_date"
                value={enteredDate}
                onChange={onDateChange}
                />
            </div>
        </div>
            <div className="new-expense__actions">
                <button>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
    </form>
    );
}

export default ExpenseForm;