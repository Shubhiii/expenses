import React from "react";
import classes from "./button.module.scss";

export type ButtonType = "submit" | "button" | "reset";

interface IButton {
	isDisable?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	type?: ButtonType;
}

const Button: React.FC<IButton> = ({ isDisable, onClick, children, type }) => (
	<button
		className={classes.button}
		type={type}
		onClick={onClick}
		disabled={isDisable}
	>
		{children}
	</button>
);

Button.defaultProps = {
	isDisable: false,
	type: "submit",
};

export default Button;
