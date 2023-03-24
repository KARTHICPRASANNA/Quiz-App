import React from 'react';
import { TextField } from '@mui/material';

const Question = (context) => {
	const { setState, state } = context;
	const { input } = state;

	return (
		<TextField { ...{
			placeholder: 'Question',
			value: input.question,
			onChange: ({ target: { value }}) => setState({
				...state,
				input: { ...input, question: value },
			}),
		} }
		/>);
};

export default Question;
