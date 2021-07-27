import Expenses from './components/Expenses/Expenses';

const App = () => {
    const expenses = [
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



    return (
        <div>
            <h2>Let's get started!</h2>
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
