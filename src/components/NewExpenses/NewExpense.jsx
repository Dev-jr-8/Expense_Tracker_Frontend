import React from "react";
import ExpenseForm from "./expense-form/ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const onSave = (new_expense = {}) =>{
        const expense = {
            ...new_expense,
            id: Math.random().toString()
        }
        props.onAddExpense(expense);
    }    

    return(
        <div className="new-expense">
            <ExpenseForm onSave={onSave}/>
        </div>
    )
}

export default NewExpense;