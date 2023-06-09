import React from 'react';
import { Box, TextField } from '@mui/material';
import OptionAdd from '../Buttons/OptionAdd';

const Options = (context) => {
	const { setState, state } = context;
	const { option } = state;

	return (
		<Box className="optionsInput">
			<TextField { ...{
				placeholder: 'Options',
				value: option,
				onChange: ({ target: { value }}) => setState({
					...state,
					option: value,
				}),
			} }
			/>
			<OptionAdd { ...context }/>
		</Box>
	);
};

export default Options;
