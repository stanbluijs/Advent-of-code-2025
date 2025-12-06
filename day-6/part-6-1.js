import readFile from '../read-file.js';

function makeLists(lines) {
	const lists = [];
	for (const index in lines) {
		const line = lines[index];
		lists.push(line.split(' ').filter((x) => x != ''));
	}

	return lists;
}

function calculate(x, y, operator) {
	if (operator == '+') {
		// console.log(operator, parseInt(x), parseInt(y), parseInt(x) + parseInt(y));
		return parseInt(x) + parseInt(y);
	}
	if (operator == '*') {
		// console.log(operator, parseInt(x), parseInt(y), parseInt(x) * parseInt(y));
		return parseInt(x) * parseInt(y);
	}
}

function calculateLists(lists) {
	let total = 0;
	const operators = lists.pop();

	for (const o in operators) {
		const operator = operators[o];
		
		let subTotal = parseInt(lists[0][o]);
		// console.log(0, subTotal);

		for (let l = 1; l < lists.length; l++) {
			const list = lists[l];

			subTotal = calculate(subTotal, parseInt(list[o]), operator);
			// console.log(l, subTotal);
		}
		// console.log('');
		total += subTotal;
	}

	return total;
}

try {
	// const lines = await readFile('example.txt');
	const lines = await readFile('input.txt');
	
	const lists = makeLists(lines);
	// console.log(lists);

	console.log(calculateLists(lists));
} catch (error) {
	console.error(error);
}