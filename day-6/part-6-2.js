import readFile from '../read-file.js';

function findNonSpaceIndexes(str) {
    let indexes = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            indexes.push(i);  // Voeg de index toe als het geen spatie is
        }
    }
    return indexes;
}

function calculate(x, y, operator) {
	if (operator == '+') {
		return parseInt(x) + parseInt(y);
	}
	
	if (operator == '*') {
		return parseInt(x) * parseInt(y);
	}
}

function calculateNumbers(operator, numbers) {
	let sum = numbers[0];

	for (let n = 1; n < numbers.length; n++) {
		sum = calculate(sum, parseInt(numbers[n]), operator);
	}

	return sum;
}

function process(lines, operatorLine) {
	let total = 0;
	const operatorIndexes = findNonSpaceIndexes(operatorLine);
	let operatorIndex = operatorIndexes.length - 1;

	let rangeStart = parseInt(operatorIndexes[operatorIndex]);
	let rangeEnd = operatorLine.length - 1;

	while (operatorIndex >= 0) {
		// Get numbers
		const numbers = [];
		while (rangeEnd >= rangeStart) {
			let number = '';
			for (const l in lines) {
				const line = lines[l];

		 		if (line[rangeEnd] != '') {
		 			number += line[rangeEnd];
		 		}
			}
			numbers.push(number);

			rangeEnd--;
		}

		const operator = operatorLine[operatorIndexes[operatorIndex]];
		total += calculateNumbers(operator, numbers);

		rangeEnd = rangeStart - 2;
		operatorIndex--;
		rangeStart = parseInt(operatorIndexes[operatorIndex]);
	}

	return total;
}

try {
	// const lines = await readFile('example.txt');
	const lines = await readFile('input.txt');
	const operatorLine = lines.pop();
	
	console.log(process(lines, operatorLine));
} catch (error) {
	console.error(error);
}