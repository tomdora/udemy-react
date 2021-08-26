import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card"
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';

const Expenses = props => {
    const [yearSelection, setYear] = useState('2021');

    const filterHandler = year => {
        setYear(year);
    }
    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter
                    selected={yearSelection}
                    onYearSelect={filterHandler}
                />

                {props.items.map(expense =>
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />)
                }
            </Card>
        </div>
    );
}

export default Expenses;