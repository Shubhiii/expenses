import React from "react";
import classes from "./expenseList.module.scss";
import Item from "./Item";

interface IExpenseData {
	title: string;
	amount: number;
	date: string;
}

interface IExpenseList {
	items: Object[] | IExpenseData[];
	onRemoveExpense: any;
}

const ExpenseList: React.FC<IExpenseList> = ({ items, onRemoveExpense }) => {
	return (
		<ul className={classes["expense-list"]}>
			{items.map((item, i) => (
				<Item key={i} onRemoveExpense={onRemoveExpense} data={item} />
			))}
		</ul>
	);
};

export default ExpenseList;
