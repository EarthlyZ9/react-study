import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import React, { useState } from "react";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState("2020");

    const changeDateFilterHandler = (enteredYear) => {
        setSelectedYear(enteredYear);
    };
    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear;
    });

    return (
        <Card className="expenses">
            <ExpenseFilter selectedYear={selectedYear} onChangeDateFilter={changeDateFilterHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
