import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = props => {
    const [inputTitle, setTitle] = useState("");
    const [inputAmount, setAmount] = useState("");
    const [inputDate, setDate] = useState("");
    // Alternate method, using one state
    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // });
    // const titleHandler = event => {
    //     setUserInput((prevState) => {
    //         return { ...prevState, title: event.target.value };
    //     });
    // }



    const titleHandler = event => {
        setTitle(event.target.value);
    }
    const amountHandler = event => {
        setAmount(event.target.value);
    }
    const dateHandler = event => {
        setDate(event.target.value);
    }



    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: inputTitle,
            amount: inputAmount,
            date: new Date(inputDate)
        };
        props.onSaveExpenseData(expenseData);

        setTitle('');
        setAmount('');
        setDate('');
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input
                    type="text"
                    value={inputTitle}
                    onChange={titleHandler} />
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input
                    type="number"
                    value={inputAmount}
                    min="0.01" step="0.01"
                    onChange={amountHandler} />
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input
                    type="date"
                    value={inputDate}
                    min="2019-01-01"
                    max="2022-12-31"
                    onChange={dateHandler} />
            </div>
        </div>

        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;