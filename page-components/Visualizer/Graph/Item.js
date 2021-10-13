import React from 'react';

const Item = ({ height = 10, background }) =>
	// console.log(height);
	 (
		<div style={{ width: '50px', height: `${height}px`, background: background || '#fff', marginRight: 10 }} />
	);
export default Item;
