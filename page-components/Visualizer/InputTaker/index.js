import React from 'react';

const InputTaker = ({ onChange, value }) => {
	const props = {
		name     : 'input_taker',
		type     : 'text',
		onChange : (e) => onChange(e.target.value),
		value,
		style    : { marginBottom: 16, padding: 8 },
	};
	return <input {...props} />;
};
export default InputTaker;
