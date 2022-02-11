import React from "react";
import "./App.scss";
import ExpenseForm from "./components/ExpenseForm";
import Expenses from "./components/Expenses";

interface IExpenseData {
	id: number;
	title: string;
	amount: number;
	date: any;
}

function App() {
	const [expenses, setExpenses] = React.useState<any>([]);

	const expenseData = (expense: any) => {
		setExpenses((prevExpense: any) => {
			return [expense, ...prevExpense];
		});
	};

	const handleExpenseRemove = (expenseId: number) => {
		setExpenses((prevExpense: any) => {
			return prevExpense.filter((expense: any) => expense.id !== expenseId);
		});
	};

	React.useEffect(() => {
		const data: any = localStorage.getItem("expenses");
		if (data) {
			const storeItem = JSON.parse(data);

			const updatedStoreItem = storeItem.map((item: any) => {
				return {
					...item,
					date: new Date(item.date),
				};
			});

			setExpenses((prevExpense: any) => {
				return [...updatedStoreItem, ...prevExpense];
			});
		}
	}, []);

	React.useEffect(() => {
		if (expenses.length > 0) {
			localStorage.setItem("expenses", JSON.stringify(expenses));
		} else {
			localStorage.removeItem("expenses");
		}
	}, [expenses]);

	return (
		<>
			<h2>Let's get started!</h2>
			<ExpenseForm onAdd={expenseData} />
			<Expenses expenseItem={expenses} onRemoveExpense={handleExpenseRemove} />
		</>
	);
}

export default App;
