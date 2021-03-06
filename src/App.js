import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 5, 10)
    },
    {
        id: 'e2',
        title: 'Groceries',
        amount: 300.54,
        date: new Date(2021, 5, 10)
    },
    {
        id: 'e3',
        title: 'Rent',
        amount: 1000,
        date: new Date(2021, 5, 1)
    },
    {
        id: 'e4',
        title: 'Food',
        amount: 20.56,
        date: new Date(2021, 5, 8)
    }
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = expense => {
        console.log(expense);
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses]
        });
    }



    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
