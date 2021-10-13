import React from 'react';
import Item from './Item';

const messageMapping = {
	0 : 'Insertion sort visualization',
	1 : 'Highlighted green records on the left are sorted',
};

const getBackground = (stepsInfo, currentIndex, currentMove, totalMoves) => {
	if (('greenIndex' in stepsInfo && stepsInfo.greenIndex >= currentIndex) || (currentMove >= (totalMoves - 1))) {
		return 'hsl(160, 100%, 50%)';
	}
	if (stepsInfo.redIndex && stepsInfo.redIndex === currentIndex) {
		return 'hsl(330, 100%, 50%)';
	} return '#ffffff';
};

const Graph = ({ stepsInfo = {}, currentMove, totalMoves }) => {
	let message = messageMapping[currentMove];
	if (!message && currentMove >= (totalMoves - 1)) {
		message = 'The list is now sorted!';
	} else if (!message) {
		message = stepsInfo.message;
	}
	return (
		<div style={{
			background   : 'black',
			padding      : '16px 16px 0px 16px',
			borderRadius : 4,
		}}
		>
			<p style={{ color: 'white' }}>{message || ''}</p>
			<div style={{

				display    : 'flex',
				alignItems : 'flex-end',
				border     : '1px solid black',
			}}
			>
				{(stepsInfo.elements || []).map((element, i) => <Item height={element} background={getBackground(stepsInfo, i, currentMove, totalMoves)} />)}
			</div>
		</div>
	);
};
export default Graph;
