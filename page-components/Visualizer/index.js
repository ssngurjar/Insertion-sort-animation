import React, { useEffect, useState } from 'react';
import InputTaker from './InputTaker';
import Graph from './Graph';
import Button from './Button';
import getStepsInfo from '../../helpers/get-steps-info';

const Visualizer = () => {
	const [currentMove, setCurrentMove] = useState(0);
	const [input, setInput] = useState();
	const [play, setPlay] = useState(false);
	const stepsInfo = getStepsInfo(input);
	let i = 0;

	function playVisualisation() {
		let interval = null;
		interval = setInterval(() => {
			if (play && i < (stepsInfo.totalMoves - 1)) {
				i += 1;
				setCurrentMove((prev) => prev + 1);
			} else {
				clearInterval(interval);
			}
		}, 500);
	}

	useEffect(() => {
		if (play) {
			playVisualisation();
		}
	}, [play]);

	return (
		<div style={{ border: '1px solid #e2e2e2', padding: '16px', borderRadius: 10 }}>
			<p>Move {currentMove + 1} of {stepsInfo.totalMoves}</p>
			<InputTaker onChange={(value) => setInput(value)} value={input} />
			{stepsInfo.elements.length ? (
				<Graph
					stepsInfo={stepsInfo[currentMove]}
					currentMove={currentMove}
					totalMoves={stepsInfo.totalMoves}
				/>
			) : null}
			<div style={{ marginTop: 16 }}>
				<Button onClick={() => setCurrentMove(0)} disabled={currentMove === 0}>Start</Button>
				<Button onClick={() => setCurrentMove(currentMove - 1)} disabled={currentMove === 0}>Back</Button>
				<Button onClick={() => setPlay(!play)}>{play ? 'Pauase' : 'Play'}</Button>
				<Button onClick={() => setCurrentMove(currentMove + 1)} disabled={currentMove >= (stepsInfo.totalMoves - 1)}>Next</Button>
				<Button onClick={() => setCurrentMove(stepsInfo.totalMoves - 1)} disabled={currentMove >= (stepsInfo.totalMoves - 1)}>End</Button>
			</div>
		</div>
	);
};

export default Visualizer;
