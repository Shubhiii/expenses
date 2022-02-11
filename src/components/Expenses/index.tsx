import React from "react";
import Card from "../../shared/Card";
import ExpenseList from "./ExpenseList";

interface IExpenseData {
	title: string;
	amount: number;
	date: string;
}

interface IExpenses {
	expenseItem: Object[] | IExpenseData[];
	onRemoveExpense: any;
}

const Expenses: React.FC<IExpenses> = ({ expenseItem, onRemoveExpense }) => {
	let expenses = (
		<p style={{ textAlign: "center", color: "#fff" }}>No Expenses Found!</p>
	);

	if (expenseItem.length) {
		expenses = (
			<ExpenseList items={expenseItem} onRemoveExpense={onRemoveExpense} />
		);
	}

	return <Card secondary>{expenses}</Card>;
};

export default Expenses;
