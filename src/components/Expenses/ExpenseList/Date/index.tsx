import React from "react";
import classes from "./date.module.scss";

interface IDate {
	date?: any;
}

const Date: React.FC<IDate> = ({ date }) => {
	const year = date?.getFullYear();
	const month = date?.toLocaleString("en-US", { month: "long" });
	const day = date?.toLocaleString("en-US", { day: "2-digit" });

	return (
		<div className={classes.date}>
			<div className={classes.month}>{month}</div>
			<div className={classes.year}>{year}</div>
			<div className={classes.day}>{day}</div>
		</div>
	);
};

export default Date;
