import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
        setExpandButton(false);
    };
    const [expandButton, setExpandButton] = useState(false);
    const newExpenseButtonHandler = () => {
        setExpandButton(true);
    };

    const setExpandButtonHandler = () => {
        setExpandButton(false);
    };

    return (
        <div className="new-expense">
            {!expandButton && <button type="button" onClick={newExpenseButtonHandler}>Add New Expense</button>}
            {expandButton &&
                <ExpenseForm onCancel={setExpandButtonHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    );
};

export default NewExpense;
