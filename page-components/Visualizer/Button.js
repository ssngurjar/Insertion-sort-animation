import React from 'react';

const Button = ({ children, onClick, ...rest }) => (
	<button
		type="button"
		style={{ background: 'blue', padding: 6, border: 'none', color: 'white', marginRight: 10, borderRadius: 4 }}
		onClick={onClick}
		{...rest}
	>
		{children}
	</button>
);
export default Button;
