import React from "react";
import ExpenseItem from "./Expense_Item/ExpenseItem";
import './expenses.css'
/* parent component for all expenses list */
const Expenses = (props) => {
    const {expenses} = props;
    return (
        <div className="expenses">
            {
                expenses.map((each_item) =>{
                    return(
                        <ExpenseItem 
                        key={each_item.id}
                        title={each_item.title}
                        amount={each_item.amount}
                        date={each_item.date}
                        />
                    )
                })
            }
            {/* <ExpenseItem 
            title={"வாரிசு"}
            amount={196.27}
            date={new Date()}/>

            <ExpenseItem 
            title = {expenses[0].title}
            amount = {expenses[0].amount}
            date = {expenses[0].date}/>

            <ExpenseItem 
            title = {expenses[1].title}
            amount = {expenses[1].amount}
            date = {expenses[1].date}/>

            <ExpenseItem 
            title = {expenses[2].title}
            amount = {expenses[2].amount}
            date = {expenses[2].date}/>

            <ExpenseItem 
            title = {expenses[3].title}
            amount = {expenses[3].amount}
            date = {expenses[3].date}/>

            <ExpenseItem 
            title = {expenses[4].title}
            amount = {expenses[4].amount}
            date = {expenses[4].date}/> */
            }

        </div>
    )
} 

export default Expenses;