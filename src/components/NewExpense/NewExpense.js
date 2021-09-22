import React from "react";


import ExpenseForm from "./ExpenseForm";
import'./NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
    props.onAddExpense(expenseData);
    };

    // eslint-disable-next-line react/jsx-no-comment-textnodes
    // points expenseData to the ExpenseForm child to parent        
    return (
    <div className="new-expense">        
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
    );
};

export default NewExpense;