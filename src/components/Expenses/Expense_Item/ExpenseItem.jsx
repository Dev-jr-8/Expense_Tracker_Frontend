import React from "react"; //importing react, coz all the tags we are using in developed using react
import ExpenseDate from "../Expense_Date/ExpenseDate";
import './ExpenseItem.css';

//Caps -> Componenet
//small -> normal function

const ExpenseItem = (props) => {
    //default params
    let {
        title = 'No props passed',
        amount = -1,
        date = new Date()
    } = props;

    // useState used as hooks, for refresh particular component's code
    // const[title, setTitle] = useState(props.title);

    // //buttonClick Event
    // const onButtonClick = () => {
    //     setTitle("Updated");
    //     console.log("Updated")
    // }

    return (
        <div className="expense-item">
            {/* passing the date as props to expense date*/}
            <ExpenseDate date={date}/>
             
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">₹ {amount}</div>
            </div>
            {/* <button>Change Title</button> */}
        </div>
    )
}

export default ExpenseItem;