// Does not work

import readFile from '../read-file.js';

function findJoltage(line, cursors) {
	let highestJoltage = 0;
	console.log(line);

	for (let i = 0; i < cursors.length; i++) {
		const cursor = cursors[i];
		let cursorSum = '';
		for (let x = 0; x < cursor.length; x++) {
			const pos = cursor[x];
			cursorSum = cursorSum + line[pos];
		}
		console.log(cursor, cursorSum);

		const asNumber = parseInt(cursorSum);
		if (cursorSum > highestJoltage) {
			highestJoltage = cursorSum;
		}
	}
	
	console.log('highest', highestJoltage);

	return highestJoltage;
}

function process(lines, cursors) {
	let total = 0;

	// findJoltage(lines[0]);

	for(let i = 0; i < lines.length; i++) {
		if (lines[i] === undefined) {
			continue;
		}

		total += findJoltage(lines[i], cursors);
	}

	return total;
}

try {
	const length = 3;
	let max = 5;

	for(let i = 0; i <= max; i++) {
		const list = [];
		for (let y = 0; y < length; y++) {
			const sum = y + i;
			if (sum > max) {
				break;
			}
			list.push(y + i);
		}
		console.log(list);
	}


	// console.log('4732321333332463233337712234322122322247222252423773321362313613333336333732233372323328332333322777'.length); = 100


	// const lines = await readFile('example.txt');
	// const lines = await readFile('input.txt');
	// const result = process(lines);
	// console.log(result);

	// const joltageLengt = 3;
	// const input = '123456';
	// const length = input.length;
	// const first_cursor_index = length - 1;
	// const last_cursor_index = first_cursor_index - joltageLengt;

	// const joltageCursors = [];


	// const baseCursor = [];
	// for (let i = length - joltageLengt; i <= first_cursor_index; i++) {
	// 	baseCursor.push(i);
	// }

	// // joltageCursors.push(baseCursor);

	// let lastCursor = [...baseCursor];


	// let minusCounter = [0,0,0];
	// let limit = 0;

	// const counters = [];

	// while(last_cursor_index >= minusCounter[joltageLengt - 1]) {
	// 	let x = 0;

	// 	counters.push([...minusCounter]);
	// 	while (x < joltageLengt) {
	// 		minusCounter[x]++;
	// 		x++;
	// 		counters.push([...minusCounter]);
	// 	}
	// }

	// // console.log('counters', counters);
	// for (var i = 0; i < counters.length; i++) {
	// 	const counter = counters[i];
	// 	console.log('counter', counter);
	// 	// console.log('lastCursor', lastCursor);

	// 	let x = 0;
	// 	while(x < joltageLengt) {
	// 		// console.log(x, lastCursor[x], counter[x], (lastCursor[x] - counter[x]));
	// 		lastCursor[x] = baseCursor[x] - counter[x];
	// 		x++;
	// 	}

	// 	// console.log('lastCursor--', lastCursor);
	// 	joltageCursors.push([...lastCursor]);

	// 	let altIndex = 0;
	// 	while(altIndex <= last_cursor_index) {
	// 		let newIndexVal = lastCursor[altIndex] - minusCounter[altIndex];

	// 		while (newIndexVal >= parseInt(0 + altIndex)){
	// 			lastCursor[altIndex] = newIndexVal;
				
	// 			joltageCursors.push(lastCursor);
	// 			lastCursor = [...lastCursor];
	// 			newIndexVal--;
	// 		}

	// 		altIndex++;
	// 	}	
	// }




	// while(last_cursor_index >= minusCounter[joltageLengt - 1] && limit < 100) {
	// 	// console.log('limit', limit);
	// 	// console.log(minusCounter[joltageLengt - 1]);
	// 	// console.log(minusCounter);
	// 	let x = 0;

	// 	let newCursor = [...baseCursor];
	// 	while (x < joltageLengt && x < 1) {
	// 		newCursor[x] = newCursor[x] - minusCounter[x];
	// 		console.log(newCursor);
	// 		joltageCursors.push(newCursor);

			
	// 		while(altIndex <= last_cursor_index) {
	// 			// minusCounter[altIndex]++;
	// 			let newIndexVal = lastCursor[altIndex] - minusCounter[altIndex];

	// 			while (newIndexVal >= parseInt(0 + altIndex)){
	// 				lastCursor[altIndex] = newIndexVal;
					
	// 		// 		joltageCursors.push(lastCursor);
	// 		// 		lastCursor = [...lastCursor];
	// 				newIndexVal--;
	// 			}

	// 			altIndex++;
	// 		}


	// 		minusCounter[x]++;
	// 		x++;
	// 	}

		

		
	// 	limit++;
	// }


	// const test = [];

	// test.push([3, 4, 5]);
	// test.push([2, 4, 5]);
	// test.push([1, 4, 5]);
	// test.push([0, 4, 5]);
	// test.push([2, 3, 5]);
	// test.push([1, 3, 5]);
	// test.push([0, 3, 5]);
	// test.push([1, 2, 5]);
	// test.push([0, 2, 5]);
	// test.push([0, 1, 5]);

	// test.push([2, 3, 4]);
	// test.push([1, 3, 4]);
	// test.push([0, 3, 4]);
	// test.push([1, 2, 4]);
	// test.push([0, 2, 4]);
	// test.push([0, 1, 4]);

	// test.push([1, 2, 3]);
	// test.push([0, 2, 3]);
	// test.push([0, 1, 3]);

	// test.push([0, 1, 2]);
// ======
	// test.push([3, 4, 5]);
	
	// test.push([2, 4, 5]);
	// test.push([2, 3, 5]);
	// test.push([2, 3, 4]);

	// test.push([1, 4, 5]);
	// test.push([1, 3, 5]);
	// test.push([1, 2, 5]);
	// test.push([1, 3, 4]);
	// test.push([1, 2, 4]);
	// test.push([1, 2, 3]);

	// test.push([0, 4, 5]);
	// test.push([0, 3, 5]);
	// test.push([0, 2, 5]);
	// test.push([0, 1, 5]);
	// test.push([0, 3, 4]);
	// test.push([0, 2, 4]);
	// test.push([0, 1, 4]);
	// test.push([0, 2, 3]);
	// test.push([0, 1, 3]);
	// test.push([0, 1, 2]);

	// make other cursors

	// const result = process(['123456', '654321', '253614', '251436'], joltageCursors);




	// console.log(joltageCursors);
	// console.log(test);

} catch (error) {
	console.error(error.message);
}


// 123456 length = 6 first cursor = 6 - 3 = 3
// 456 [3, 4, 5]
// 356 [2, 4, 5]
// 346 [2, 3, 5]
// 345 [2, 3, 4]
// 256 [1, 4, 5]
// 246 [1, 3, 5]
// 245 [1, 3, 4]
// 236 [1, 2, 5]
// 235 [1, 2, 4]
// 234 [1, 2, 2]
// 156 [0, 4, 5]
// 146 [0, 3, 5]
// 145 [0, 3, 4]
// 136 [0, 2, 5]
// 135 [0, 2, 4]
// 134 [0, 2, 3]
// 126 [0, 1, 5]
// 125 [0, 1, 4]
// 124 [0, 1, 3]
// 123 [0, 1, 2]

// ----


// 123456 length = 6
// first_cursor = 6 - 1 = 5
// joltageLengt = 3


// while (first_cursor >= first_cursor - joltageLengt) { // 5-3=2
// 	let cursors = [];
// 	for
// }

// let cursors = [];
// for (let i = length - joltageLengt; i <= first_cursor; i++) {
// 	cursors.push(i);
// }

// 456 [3, 4, 5]
// 356 [2, 4, 5]
// 256 [1, 4, 5]
// 156 [0, 4, 5]
// 346 [2, 3, 5]
// 246 [1, 3, 5]
// 146 [0, 3, 5]
// 236 [1, 2, 5]
// 136 [0, 2, 5]
// 126 [0, 1, 5]

// 345 [2, 3, 4]
// 245 [1, 3, 4]
// 145 [0, 3, 4]
// 235 [1, 2, 4]
// 135 [0, 2, 4]
// 125 [0, 1, 4]

// 234 [1, 2, 3]
// 134 [0, 2, 3]
// 124 [0, 1, 3]

// 123 [0, 1, 2]