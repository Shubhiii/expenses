import React from "react";

interface IInputEvent {
	target: {
		value: string;
	};
}

const initialState = {
	value: "",
	isTouched: false,
};

const inputReducer = (
	state: { isTouched: boolean; value: string },
	action: { type: string; val?: any }
) => {
	if (action.type === "INPUT") {
		return { value: action.val, isTouched: state.isTouched };
	}

	if (action.type === "BLUR") {
		return { value: state.value, isTouched: true };
	}

	if (action.type === "RESET") {
		return { value: "", isTouched: false };
	}

	return initialState;
};

const useInput = (validateValue: (arg0: any) => any) => {
	const [inputState, dispatchAction] = React.useReducer(
		inputReducer,
		initialState
	);

	const valueIsValid = validateValue(inputState.value);

	const hasError = !valueIsValid && inputState.isTouched;

	const handleChange = (event: IInputEvent) => {
		dispatchAction({ type: "INPUT", val: event.target.value });
	};

	const handleBlur = () => {
		dispatchAction({ type: "BLUR" });
	};

	const handleReset = () => {
		dispatchAction({ type: "RESET" });
	};

	return {
		value: inputState.value,
		isValid: valueIsValid,
		hasError,
		handleChange,
		handleBlur,
		handleReset,
	};
};

export default useInput;
