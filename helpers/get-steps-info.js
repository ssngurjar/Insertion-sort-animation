/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */

const insertionSort = (arrProp, n) => {
	const arr = new Array(...arrProp);
	const stepsInfo = {
		totalMoves : 0,
		steps      : {},
	};
	let i;
	let key;
	let j;
	for (i = 1; i < n; i++) {
		key = arr[i];
		j = i - 1;

		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			j -= 1;
			stepsInfo[stepsInfo.totalMoves] = {};
			stepsInfo[stepsInfo.totalMoves].elements = new Array(...arr);
			stepsInfo[stepsInfo.totalMoves].message = 'Move the red record until it reaches its correct position';
			stepsInfo[stepsInfo.totalMoves].redIndex = j + 1;
			stepsInfo.totalMoves += 1;
		}
		arr[j + 1] = key;
		stepsInfo[stepsInfo.totalMoves] = {};
		stepsInfo[stepsInfo.totalMoves].elements = new Array(...arr);
		stepsInfo[stepsInfo.totalMoves].message = 'Swap!';
		stepsInfo[stepsInfo.totalMoves].greenIndex = j + 1;
		stepsInfo.totalMoves += 1;
	}
	return { ...stepsInfo, arr };
};
const getStepsInfo = (input) => {
	if (input) {
		const elements = (input || '').split(',').map((item) => Number(item || 0));
		return { ...insertionSort(elements, elements.length), elements };
	} return {
		elements   : [],
		totalMoves : 0,
	};
};
export default getStepsInfo;
