import React from "react";
import classes from "./input.module.scss";

export type inputType = string | number;

export type InputObject = {
	min?: inputType;
	step?: inputType;
	max?: inputType;
};

interface IInput {
	type?: React.HTMLInputTypeAttribute;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	value?: inputType;
	inputProps?: InputObject;
	label: string;
	hasError?: boolean;
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	errorMessage: string;
}

const Input: React.FC<IInput> = ({
	type,
	onChange,
	value,
	inputProps,
	label,
	hasError,
	onBlur,
	errorMessage,
}) => {
	let formClass = hasError
		? `${classes["form-control"]} ${classes.invalid}`
		: classes["form-control"];

	return (
		<div className={formClass}>
			<label>{label}</label>
			<input
				type={type}
				onBlur={onBlur}
				onChange={onChange}
				value={value}
				{...inputProps}
			/>
			{hasError && <p>{errorMessage}</p>}
		</div>
	);
};

Input.defaultProps = {
	type: "text",
};

export default Input;
