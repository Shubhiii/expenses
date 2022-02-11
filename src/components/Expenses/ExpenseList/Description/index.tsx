import React from "react";
import Button from "../../../../shared/Button/Index";
import classes from "./description.module.scss";

interface IDescription {
	title?: string;
	price?: number;
	id?: number;
	onRemoveExpense: any;
}

const Description: React.FC<IDescription> = ({
	title,
	price,
	id,
	onRemoveExpense,
}) => {
	const handleDelete = () => {
		onRemoveExpense(id);
		console.log(id, "id");
	};
	return (
		<div className={classes.description}>
			<h2>{title}</h2>
			<div className={classes.price}>{`$${price}`}</div>
			<button type="button" onClick={handleDelete}>
				&times;
			</button>
		</div>
	);
};

export default Description;
