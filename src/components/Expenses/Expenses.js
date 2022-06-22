import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";

const Expenses = (props) => {
    const expenses = props.expenses;
    const [selectedYear, setSelectedYear] = useState("2020");
    const changeDateFilterHandler = (enteredYear) => {
        setSelectedYear(enteredYear);
        console.log(enteredYear);
    };
    return (
        <Card className="expenses">
            <ExpenseFilter selectedYear={selectedYear} onChangeDateFilter={changeDateFilterHandler} />
            <ExpenseItem
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
            ></ExpenseItem>
            <ExpenseItem
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}
            ></ExpenseItem>
            <ExpenseItem
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}
            ></ExpenseItem>
            <ExpenseItem
                title={expenses[3].title}
                amount={expenses[3].amount}
                date={expenses[3].date}
            ></ExpenseItem>
        </Card>
    );
};

export default Expenses;
