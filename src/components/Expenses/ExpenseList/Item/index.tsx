import React from "react";
import Date from "../Date";
import Description from "../Description";

interface IItem {
	data: any;
	onRemoveExpense: any;
}

const Item: React.FC<IItem> = ({ data, onRemoveExpense }) => {
	return (
		<>
			<li>
				<Date date={data.date} />
				<Description
					title={data.title}
					price={data.amount}
					id={data.id}
					onRemoveExpense={onRemoveExpense}
				/>
			</li>
		</>
	);
};

export default Item;
