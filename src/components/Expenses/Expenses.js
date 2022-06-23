import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState("2020");
    const changeDateFilterHandler = (enteredYear) => {
        setSelectedYear(enteredYear);
    };
    return (
        <Card className="expenses">
            <ExpenseFilter selectedYear={selectedYear} onChangeDateFilter={changeDateFilterHandler} />
            {props.expenses.map((expense) => (
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    );
};

export default Expenses;
