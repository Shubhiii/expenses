import React, { useReducer } from "react";
import useInput from "../../hooks/useInput";
import Button from "../../shared/Button/Index";
import Card from "../../shared/Card";
import Input from "../../shared/Input";
import classes from "./expenseForm.module.scss";

interface IExpenseData {
	id: number;
	title: string;
	amount: number;
	date: any;
}

interface IExpenseForm {
	onAdd: (e: IExpenseData) => void;
}

interface IHandleSubmit {
	preventDefault: () => void;
}

const isNotEmpty = (value: string) => value.trim() !== "";

const ExpenseForm: React.FC<IExpenseForm> = ({ onAdd }) => {
	const [id, setId] = React.useState(0);

	const {
		value: title,
		isValid: titleIsValid,
		hasError: titleHasError,
		handleChange: titleChangeHandler,
		handleBlur: titleBlurHandler,
		handleReset: resetTitle,
	} = useInput(isNotEmpty);

	const {
		value: amount,
		isValid: amountIsValid,
		hasError: amountHasError,
		handleChange: amountChangeHandler,
		handleBlur: amountBlurHandler,
		handleReset: resetAmount,
	} = useInput(isNotEmpty);

	const {
		value: date,
		isValid: dateIsValid,
		hasError: dateHasError,
		handleChange: dateChangeHandler,
		handleBlur: dateBlurHandler,
		handleReset: resetDate,
	} = useInput(isNotEmpty);

	const handleSubmit = (e: IHandleSubmit) => {
		e.preventDefault();

		setId((prevId) => prevId + 1);

		const formData: IExpenseData = {
			id: id,
			title: title,
			amount: +amount,
			date: new Date(date),
		};

		onAdd(formData);

		resetTitle();
		resetAmount();
		resetDate();
	};

	let formIsValid = false;

	formIsValid = titleIsValid && amountIsValid && dateIsValid;

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<div className={classes["input-wrapper"]}>
					<Input
						label="Title"
						onChange={titleChangeHandler}
						onBlur={titleBlurHandler}
						value={title}
						hasError={titleHasError}
						errorMessage="Enter Title!"
					/>

					<Input
						type="number"
						label="Amount"
						onChange={amountChangeHandler}
						onBlur={amountBlurHandler}
						value={amount}
						hasError={amountHasError}
						errorMessage="Enter Amount!"
						inputProps={{
							min: "0.01",
							step: "0.01",
						}}
					/>

					<Input
						type="date"
						label="Date"
						onChange={dateChangeHandler}
						onBlur={dateBlurHandler}
						value={date}
						hasError={dateHasError}
						errorMessage="Select Date!"
						inputProps={{
							min: "2019-01-01",
							max: "2022-12-31",
						}}
					/>
				</div>

				<div className={classes["button-group"]}>
					<Button isDisable={!formIsValid}>Add Expense</Button>
				</div>
			</form>
		</Card>
	);
};

export default ExpenseForm;
